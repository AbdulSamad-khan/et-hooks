import React, { useState } from "react";

const Transaction = ({ amount, onChangeIncome, label, buttonValue }) => {
  const [input, setInput] = useState("");

  const addIncome = () => {
    onChangeIncome(input);
  };

  return (
    <div className="ui form">
      <h4> {label}</h4>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder={label}
      />
      <button className="ui button" onClick={addIncome}>
        {buttonValue}
      </button>
    </div>
  );
};
export default Transaction;
