import { useState } from "react";


function DropDown() {
  
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  
  return (
    <div className="App">
      <button className="clickme" onClick={() => Toggle()}>
        Modal
      </button>
    </div>
  );
}

export default DropDown;