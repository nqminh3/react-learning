import React from "react";
import "./Assignment1.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

export default function Assignment1(data) {
  return data?.data.map((item, index) => {
    return (
      <Card className="expense-item" key={index}>
        <ExpenseDate date={item.date} />
        <div className="expense-item__description">
          <h2>{item.title}</h2>
          <div className="expense-item__price  ">${item.amount}</div>
        </div>
      </Card>
    );
  });
}
