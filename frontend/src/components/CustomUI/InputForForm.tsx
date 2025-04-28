import { useState } from "react";
import styles from "../../core/Space/styles.module.scss";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type InputProps = {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  options?: any;
};

export const renderInput = ({
  name = "text",
  label = "text",
  type = "text",
  register,
  errors,
  options = {},
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      {type === "password" ? (
        <div className={styles.passwordInput}>
          <input
            type={showPassword ? "text" : "password"}
            {...register(name, options)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.passwordToggle}>
            {showPassword ? "🛸" : "🦯"}
          </button>
        </div>
      ) : (
        <input type={type} {...register(name, options)} />
      )}
      {errors[name] && (
        <span className={styles.error}>{errors[name]?.message as string}</span>
      )}
    </div>
  );
};
