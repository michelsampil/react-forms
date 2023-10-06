import { ControlledForm } from "./components/ControlledForm";
import { UncontrolledForm } from "./components/UncontrolledForm";

import "./App.css";

function App() {
  return (
    <>
      <h1>Forms</h1>
      <div className="card">
        <h3>Uncontrolled Form</h3>
        <ControlledForm />
        <h3>Controlled Form</h3>
        <UncontrolledForm />
      </div>
    </>
  );
}

export default App;
