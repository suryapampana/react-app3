import logo from "./logo.svg";
import "./App.css";
import { Alert, Butto } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2"> React Bootstrap</h1>
      <Button variant="secondary">React Bootstrap </Button>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        aliquam vero quia eius maxime laborum deleniti officiis nostrum alias
        accusantium reprehenderit, ex eveniet inventore tempora nobis, beatae
        doloribus! Eos, aliquid.
      </div>

      <Alert variant="primary">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ut
        inventore consectetur voluptates aut earum unde culpa officiis ratione
        vel.
      </Alert>
    </div>
  );
}

export default App;
