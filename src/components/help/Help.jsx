import React, { useState } from 'react';
import '../../styles/css/Help.css';
import Rule from './Rule';

const Help = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <div className={modalIsOpen ? 'flouter' : 'deflouter'}>Help</div>
      <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>
        Open Modal
      </button>
      {modalIsOpen && <Rule />}
    </div>
  );
};
export default Help;
