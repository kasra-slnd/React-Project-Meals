import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemform = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterefAmount = amountInputRef.current.value;
    const enterefAmountNumber = +enterefAmount;

    if (
      enterefAmount.trim().length === 0 ||
      enterefAmountNumber < 1 ||
      enterefAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enterefAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemform;
