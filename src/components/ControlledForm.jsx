import { useState } from "react";

export const ControlledForm = () => {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });

  console.log("Rendering Controlled form");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update field value
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validate in real-time as the user types
    if (name === "name") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name:
          value.length >= 3 ? "" : "Name must be at least 3 characters long",
      }));
    } else if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check all validation rules on submit as a final check
    if (
      !values.name ||
      values.name.length < 3 ||
      !emailRegex.test(values.email)
    ) {
      alert("Please fill out the form correctly.");
      return;
    }

    console.log(`name: ${values.name}, email: ${values.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <button>Submit</button>
    </form>
  );
};
