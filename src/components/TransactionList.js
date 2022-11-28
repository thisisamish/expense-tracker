import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className="minus" key={transaction.id}>
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
