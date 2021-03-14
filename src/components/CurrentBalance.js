import React from "react";

const CurrentBalance = ({ income, expense }) => {
  return <div>Current Balance: {income - expense}</div>;
};
export default CurrentBalance;
