import React from "react";
import { Modal } from "./lib/Modal/modal";
import useModal from "./lib/Modal/useModal";

function App() {
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <button onClick={toggle}>Afficher la modale</button>

      <Modal hide={toggle} isShowing={isShowing} label="sample">
        It works
      </Modal>
    </div>
  );
}

export default App;
