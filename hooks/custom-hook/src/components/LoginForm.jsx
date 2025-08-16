import React from "react";
import useForm from "../hooks/useForm";

const LoginForm = () => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${values.username}, Password: ${values.password}`);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default LoginForm;
