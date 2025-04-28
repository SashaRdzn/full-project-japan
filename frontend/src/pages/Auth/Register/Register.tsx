import React, { useState } from "react";
import styles from "../../../core/Space/styles.module.scss";
import { renderInput } from "../../../components/CustomUI/InputForForm";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setError,
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
      const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            const errorMessage = Array.isArray(messages)
              ? messages[0]
              : messages;
            setError(field as keyof FormData, {
              type: "server",
              message: errorMessage,
            });
          });
        }
        return;
      }

      setSuccessMessage("Регистрация прошла успешно!");
      navigate('/login')
      reset();
    } catch (error) {
      setError("root", {
        type: "server",
        message: "Произошла ошибка при отправке запроса",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
        <h3>Регистрация</h3>

        {renderInput({
          name: "username",
          label: "Имя пользователя",
          type: "text",
          register,
          errors: formErrors,
          options: {
            required: "Введите имя",
            minLength: { value: 3, message: "Минимум 3 символа" },
          },
        })}

        {renderInput({
          name: "email",
          label: "Email",
          type: "email",
          register,
          errors: formErrors,
          options: {
            required: "Введите email",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Введите корректный email",
            },
          },
        })}

        {renderInput({
          name: "password",
          label: "Пароль",
          type: "password",
          register,
          errors: formErrors,
          options: {
            required: "Введите пароль",
            minLength: { value: 6, message: "Минимум 6 символов" },
          },
        })}

        {formErrors.root && (
          <div className={styles.errorMessage}>{formErrors.root.message}</div>
        )}

        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}>
          {isSubmitting ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
    </div>
  );
};

export default Register;
