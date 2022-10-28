import { useSelector } from "react-redux";
import { Map, Form, Toast } from "../src/components";
import "../src/styles/App.css";

function App() {
  const { showSuccess } = useSelector((state) => state.ui);
  return (
    <div className="App">
      <Map />
      <Form />
      {showSuccess && <Toast />}
    </div>
  );
}

export default App;
