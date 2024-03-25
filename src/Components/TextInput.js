import { useState } from "react";

function TextInput(props) {
  const [textValue, setTextValue] = useState("");
  const handleSubmit = () => {
    if (textValue) {
      props.onAddTask(textValue);
      setTextValue("");
    } else {
      alert("Input Can not be blank");
    }
  };
  return (
    <div className="text-center d-flex justify-content-center my-3">
      <div></div>
      <input
        className={`form-control w-50 text-center mx-1 ${
          props.darkMode && "bg-secondary text-white"
        }`}
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        placeholder="Add a new To-Do"
      />
      <button type="submit" className="btn btn-success" onClick={handleSubmit}>
        <i class="bi bi-journal-plus"></i>
      </button>
    </div>
  );
}

export default TextInput;
