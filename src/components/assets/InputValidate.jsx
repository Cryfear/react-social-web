import React from "react";

export const input = ({ input, meta, placeholder, type }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className="login">
      <input
        {...input}
        name={input.name}
        placeholder={placeholder}
        type={type}
        className={"login__input" + (hasError ? " error" : "")}
      />
      {hasError && <div>{meta.error}</div>}
    </div>
  );
};
