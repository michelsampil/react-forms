import { useState } from "react";

export const ControlledForm = () => {
  const [values, setValues] = useState({ firstName: "", lastName: "" });

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${values.firstName} ${values.lastName}`, values);
  };

  console.log("rendering controlled form");

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};
