import React from "react";

const Listing = ({ amount, label, onChangeIncome, onChangeExpense, name }) => {
  const onDelete = (event) => {
    if (name == "income") {
      onChangeIncome(event.target.value);
    } else if (name == "expense") {
      onChangeExpense(event.target.value);
    }
  };
  const listIncome = amount.map((element, id) => {
    return (
      <div key={id}>
        {id + 1}. {element}
        <hr />
        <button value={id} onClick={onDelete}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="ui segment">
      <h1>{label}</h1>

      {listIncome}
    </div>
  );
};
export default Listing;
