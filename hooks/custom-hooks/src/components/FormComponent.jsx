import React from "react";
import useForm from "../hooks/useForm";

const FormComponent = () => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nUsername: ${values.username}\nEmail: ${values.email}`);
    resetForm();
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid gray", borderRadius: "10px" }}>
      <h2>Custom Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginRight: "10px" }}>Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>
    </div>
  );
};

export default FormComponent;
