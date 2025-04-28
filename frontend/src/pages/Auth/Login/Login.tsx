import React from "react";
import { useForm } from "react-hook-form";
import styles from "../../../core/Space/styles.module.scss";
import { renderInput } from "../../../components/CustomUI/InputForForm";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}auth/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Ошибка входа");
      }

      const result = await response.json();
      localStorage.setItem("refresh", result.refresh);
      localStorage.setItem("access", result.access);
      toast.success(`Приветсвуем ${result.user.username}`, {
        style: {
          padding: "16px",
          color: "white",
          background: "rgba(77, 234, 10, 0.5)",
        },
        icon: "👏",
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={styles.authSection}>
        <h2>Авторизация</h2>
        <div className={styles.authForms}>
          <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
            <h3>Вход</h3>
            {renderInput({
              name: "username",
              label: "Имя пользователя",
              register,
              errors,
              options: { required: "Введите имя пользователя" },
            })}
            {renderInput({
              name: "password",
              label: "Пароль",
              type: "password",
              register,
              errors,
              options: { required: "Введите пароль" },
            })}
            <button type="submit" className={styles.submitButton}>
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
