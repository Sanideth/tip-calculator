import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import classes from "./TipCalculator.module.css";

const PERCENTAGES = [5, 10, 15, 25, 50];

const TipCalculator = () => {
  return (
    <div className={classes.tipCalculatorContainer}>
      <div className={classes.calculatorContainer}>
        <p>Bill</p>
        <div>
          <InputField />
        </div>
        <p>Select Tip %</p>
        <div>
          {PERCENTAGES.map((percent) => (
            <Button>{percent}%</Button>
          ))}
          <InputField />
        </div>
        <p>Number of People</p>
        <div>
          <InputField />
        </div>
      </div>

      <div className={classes.resultContainer}>
        <div>
          <p>
            Tip Amount <span>/ person</span>
          </p>
          <p>0</p>
        </div>
        <div>
          <p>
            Total <span>/ person</span>
          </p>
          <p>0</p>
        </div>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default TipCalculator;
