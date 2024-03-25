function Modeswitch(props) {
  return (
    <div class="form-check form-switch mt-2 align-self-end">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        checked={props.darkMode}
        onChange={props.onModeChange}
      />
      <label
        class={`form-check-label ${props.darkMode && "text-white"}`}
        for="flexSwitchCheckChecked"
      >
        Toggle Dark/Light Mode
      </label>
    </div>
  );
}

export default Modeswitch;
