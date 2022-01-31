import { ErrorMessage, useField } from "formik";
import React from "react";
import s from "./TextField.module.css";
import cn from "classnames";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log(field);
  return (
    <div className={s.inputWrapper}>
      <label className={s.label} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={cn(s.input, {
          [s.isInvalid]: meta.touched && meta.error,
        })}
        autoComplete="off"
        id={field.name}
        type={props.type}
        {...field}
        {...props}
      />

      <ErrorMessage
        component="div"
        className={s.errorMessage}
        name={field.name}
      />
    </div>
  );
};
