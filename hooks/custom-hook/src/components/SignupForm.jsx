import React from "react";
import useForm from "../hooks/useForm";

const SignupForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Email: ${values.email}, Password: ${values.password}, Confirm: ${values.confirmPassword}`
    );
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <button type="submit">Signup</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default SignupForm;
