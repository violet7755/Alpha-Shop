import styles from "./Form.module.css";
import ProgressStep from "./Progress/ProgressStep.js";
import StepOne from "./Progress/Step/StepOne.js";
//import StepTwo from '.Progress//Step/StepTwo.js'
//import StepThree from '.Progress//Step/StepThree.js'
import ProgressControl from "./Progress/ProgressControl.js";

function Form() {
  return (
    <div className={styles.FormContainer}>
      <ProgressStep />
      <StepOne />
      <ProgressControl />
    </div>
  );
}
export default Form;
