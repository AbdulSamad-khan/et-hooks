import React from "react";

const Listing = ({ amount, label }) => {
  const listIncome = amount.map((element, id) => {
    return (
      <div key={id}>
        {id + 1}. {element}
        <hr />
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
