import React from "react";
import { Modal, useModal } from "./lib/";

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <button onClick={toggle}>Display</button>

      <Modal hide={toggle} isShowing={isShowing} label="sample">
        It works
      </Modal>
    </div>
  );
}

export default App;
