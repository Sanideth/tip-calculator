import { useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import classes from "./TipCalculator.module.css";

const PERCENTAGES = [5, 10, 15, 25, 50];

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [customPercent, setCustomPercent] = useState(0);
  const [persons, setPersons] = useState(0);
  const [buttonId, setButtonId] = useState(null);

  const handleBillChange = (event) => {
    setBill(event.target.value);
  };

  const handleTipPercentChange = (event, id) => {
    setTipPercent(event.target.innerText.slice(0, -1)); //because of the percent character at the end
    setButtonId(id);
  };
  const handleCustomTip = (event) => {
    setCustomPercent(event.target.value);
    setTipPercent(0);
    setButtonId(null);
  };

  const handlePersonsChange = (event) => {
    setPersons(event.target.value);
  };

  const handleReset = () => {
    setBill("");
    setTipPercent(0);
    setButtonId(null);
    setPersons(0);
    setCustomPercent(0);
  };

  console.log(persons);

  return (
    <div className={classes.tipCalculatorContainer}>
      <div className={classes.calculatorContainer}>
        <p className={classes.billText}>Bill</p>
        <div className={classes.billInputContainer}>
          <InputField
            className={classes.billInput}
            type="number"
            placeholder="0"
            onChange={handleBillChange}
            value={bill}
          />
        </div>
        <p className={classes.tipText}>Select Tip %</p>
        <div className={classes.tipContainer}>
          {PERCENTAGES.map((percent, index) => (
            <Button
              key={percent}
              onClick={handleTipPercentChange}
              className={buttonId === index ? classes.clickedButton : ""}
              index={index}
            >
              {percent}%
            </Button>
          ))}
          <InputField
            placeholder="Custom"
            className={classes.tipInputField}
            onChange={handleCustomTip}
            value={customPercent}
          />
        </div>
        <div className={classes.errorContainer}>
          <p className={classes.numberOfPeopleText}>Number of People</p>
          {bill &&
          (tipPercent || customPercent) &&
          (!persons || persons === 0) ? (
            <p className={classes.error}>Can't be zero</p>
          ) : null}
        </div>

        <div className={classes.numberOfPeopleInputContainer}>
          <InputField
            placeholder="0"
            onChange={handlePersonsChange}
            value={persons}
          />
        </div>
      </div>

      <div className={classes.resultContainer}>
        <div className={classes.tipAmountContainer}>
          <p className={classes.tipAmountText}>
            Tip Amount <span>/ person</span>
          </p>
          <p className={classes.tipAmount}>
            {persons
              ? `$${((tipPercent || customPercent * bill) / 100).toFixed(2)}`
              : `$${0.0}`}
          </p>
        </div>
        <div className={classes.tipAmountPerPersonContainer}>
          <p className={classes.tipAmountPerPersonText}>
            Total <span>/ person</span>
          </p>
          <p className={classes.tipAmountPerPerson}>
            {persons
              ? `$${(
                  ((tipPercent || customPercent * bill) / 100) *
                  persons
                ).toFixed(2)}`
              : `$${0.0}`}
          </p>
        </div>
        <Button
          className={
            bill && (tipPercent || customPercent) && persons
              ? classes.resetButton
              : classes.button
          }
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TipCalculator;
