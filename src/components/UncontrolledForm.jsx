import { useRef } from "react";

export const UncontrolledForm = () => {
  // Create refs for form fields
  const nameRef = useRef();
  const emailRef = useRef();

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Access values using refs
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    // You can now perform further actions with the form data
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForm;
