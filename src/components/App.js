import React, { useState } from "react";
import Transaction from "./Transaction";
import Listing from "./Listing";
import TransactionSummary from "./TransactionSummary";
const App = () => {
  const [income, setIncome] = useState([]); // income
  const [expense, setExpense] = useState([]); // expense

  return (
    <div className="ui container">
      <TransactionSummary income={income} expense={expense} />
      <Transaction
        amount={income}
        onChangeIncome={(newAmount) => {
          // adding values inside an state array
          setIncome((arr) => [...arr, newAmount]);
        }}
        label="Income"
        buttonValue="submit Income"
      />
      <Listing amount={income} label="Income List" />

      <Transaction
        amount={expense}
        onChangeIncome={(newAmount) => {
          // adding values inside an state array
          setExpense((arr) => [...arr, newAmount]);
        }}
        label="Expense"
        buttonValue="submit expense"
      />
      <Listing amount={expense} label="Expense List" />
    </div>
  );
};

export default App;
