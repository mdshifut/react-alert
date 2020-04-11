import React from "react";
import Button from "@material-ui/core/Button";
import confirmAlert from "./component/ConfirmAlert";
import "./App.css";

const CustomButton = ({ onClose }) => {
  return (
    <>
      <Button
        color="secondary"
        onClick={() => onClose("Cancel from custom button")}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClose("Confirm from custom button")}
        disableElevation
      >
        Confirm
      </Button>
    </>
  );
};
const CustomUI = ({ onClose }) => {
  return (
    <div style={{ width: "200px", height: "100px" }}>
      <h3>Cutom interface</h3>
      <Button
        color="secondary"
        onClick={() => onClose("Cancel from custom ui")}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onClose("Confirm from custom ui")}
        disableElevation
      >
        Confirm
      </Button>
    </div>
  );
};

function App() {
  const handleConfirmAlert = async () => {
    const result = await confirmAlert({});
    console.log(result);
  };
  const handleConfirmAlertCustom = async () => {
    const result = await confirmAlert({
      ButtonComponent: CustomButton,
      title: "Custom title",
      description: (
        <>
          some custom description <strong>from custom description</strong>
        </>
      ),
    });
    console.log(result);
  };

  const handleConfirmAlertCustomUi = async () => {
    const result = await confirmAlert({
      CustomUI,
    });
    console.log(result);
  };

  return (
    <div className="App">
      <p>Default alert </p>
      <Button onClick={handleConfirmAlert} color="primary">
        confirm alert
      </Button>
      <p>Custom buttons and text</p>
      <Button onClick={handleConfirmAlertCustom} color="primary">
        Alert with custom button and text
      </Button>
      <p>Custom ui</p>
      <Button onClick={handleConfirmAlertCustomUi} color="primary">
        Full custom ui
      </Button>
    </div>
  );
}

export default App;
