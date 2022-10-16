import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isTenChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isTenChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      city: enteredAddressIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredAddressIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <b> Name was not be empty!</b>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <b> Address was not be empty!</b>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <b> Please enter a valid postal code!</b>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <b> City was not be empty!</b>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
