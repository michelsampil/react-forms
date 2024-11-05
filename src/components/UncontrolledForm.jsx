import { useRef, useState } from "react";

export const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [errors, setErrors] = useState({ name: "", email: "" });

  console.log("Rendering Uncontrolled form");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get values from refs
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;

    // Validate values only on submit
    const isNameValid = nameValue.length >= 3;
    const isEmailValid = emailRegex.test(emailValue);

    // Set errors if any
    setErrors({
      name: isNameValid ? "" : "Name must be at least 3 characters long",
      email: isEmailValid ? "" : "Invalid email format",
    });

    // Only submit if both fields are valid
    if (isNameValid && isEmailValid) {
      console.log("Name:", nameValue);
      console.log("Email:", emailValue);
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" ref={emailRef} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
