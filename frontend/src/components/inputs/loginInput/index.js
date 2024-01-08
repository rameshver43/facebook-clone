import React from "react";
import "./style.css";
import { ErrorMessage, useField } from "formik";
import { useMediaQuery } from "react-responsive";

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({
    query: "(min-width:850px)",
  });
  console.log(desktopView);
  return (
    <div className="login-input">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView ? "input-error input-error-desktop-top" : "input-error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                desktopView ? "error-arrow-desktop" : "error-arrow-top"
              }
            ></div>
          )}
        </div>
      )}
      <div className="icon-wrap">
        <input
          className={
            meta.touched && meta.error ? "input-error-border" : undefined
          }
          name={field.name}
          type={field.type}
          placeholder={placeholder}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && <i className="error_icon"></i>}
      </div>
      {meta.touched && meta.error && bottom && (
        <div
          className={
            desktopView
              ? "input-error input-error-desktop-bottom"
              : "input-error"
          }
        >
          {meta.touched && meta.error && <ErrorMessage name={field.name} />}
          {meta.touched && meta.error && (
            <div
              className={
                desktopView ? "error-arrow-desktop" : "error-arrow-bottom"
              }
            ></div>
          )}
        </div>
      )}
    </div>
  );
}
