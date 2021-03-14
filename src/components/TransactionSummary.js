import React, { useState, useEffect } from "react";
import CurrentBalance from "./CurrentBalance";

const TransactionSummary = ({ income, expense }) => {
  const [totalIncome, setTotalIncome] = useState(null);
  const [totalExpense, setTotalExpense] = useState(null);
  const sumIncome = income.reduce((acc, element) => {
    return parseInt(acc) + parseInt(element);
  }, 0);
  const sumExpense = expense.reduce((acc, element) => {
    return parseInt(acc) + parseInt(element);
  }, 0);
  useEffect(() => {
    setTotalIncome(sumIncome);
    setTotalExpense(sumExpense);
  }, [income][expense]);
  return (
    <div>
      <CurrentBalance income={totalIncome} expense={totalExpense} />
      Income: {totalIncome} Expense: {totalExpense}
    </div>
  );
};

export default TransactionSummary;
