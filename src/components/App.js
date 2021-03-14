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
      <Listing
        amount={income}
        label="Income List"
        onChangeIncome={(index) => {
          setIncome(
            income.filter((e, id) => {
              return id != index;
            })
          );
        }}
        name="income"
      />

      <Transaction
        amount={expense}
        onChangeIncome={(newAmount) => {
          // adding values inside an state array
          setExpense((arr) => [...arr, newAmount]);
        }}
        label="Expense"
        buttonValue="submit expense"
      />
      {/* <Listing
        amount={expense}
        label="Expense List"
        onChangeExpense={setExpense}
      /> */}
      <Listing
        amount={expense}
        label="Expense List"
        onChangeExpense={(index) => {
          setExpense(
            expense.filter((e, id) => {
              return id != index;
            })
          );
        }}
        name="expense"
      />
    </div>
  );
};

export default App;
