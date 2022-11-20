import styles from './App.module.css';
import ProgressStep from './components/Form/ProgressStep.js'
import StepOne from './components/Form/Step/StepOne.js'
//import StepTwo from './components/Form/Step/StepTwo.js'
//import StepThree from './components/Form/Step/StepThree.js'
import ProgressControl from './components/Form/ProgressControl.js'

function App() {
  return (
  <div className={styles.mainContainer}>
  <ProgressStep/>
  <StepOne/>
  <ProgressControl/>
  </div>
  );
}
export default App;