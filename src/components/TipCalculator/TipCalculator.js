import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import classes from "./TipCalculator.module.css";

const PERCENTAGES = [5, 10, 15, 25, 50];

const TipCalculator = () => {
  return (
    <div className={classes.tipCalculatorContainer}>
      <div className={classes.calculatorContainer}>
        <p className={classes.billText}>Bill</p>
        <div className={classes.billInputContainer}>
          <InputField
            className={classes.billInput}
            type="number"
            placeholder="0"
          />
        </div>
        <p className={classes.tipText}>Select Tip %</p>
        <div className={classes.tipContainer}>
          {PERCENTAGES.map((percent) => (
            <Button key={percent}>{percent}%</Button>
          ))}
          <InputField placeholder="Custom" className={classes.tipInputField} />
        </div>
        <p className={classes.numberOfPeopleText}>Number of People</p>
        <div className={classes.numberOfPeopleInputContainer}>
          <InputField placeholder="0" />
        </div>
      </div>

      <div className={classes.resultContainer}>
        <div className={classes.tipAmountContainer}>
          <p className={classes.tipAmountText}>
            Tip Amount <span>/ person</span>
          </p>
          <p className={classes.tipAmount}>0</p>
        </div>
        <div className={classes.tipAmountPerPersonContainer}>
          <p className={classes.tipAmountPerPersonText}>
            Total <span>/ person</span>
          </p>
          <p className={classes.tipAmountPerPerson}>0</p>
        </div>
        <Button className={classes.button}>Reset</Button>
      </div>
    </div>
  );
};

export default TipCalculator;
