import styles from "./App.module.css";
import Form from "./components/Form/Form.js";
import Cart from "./components/Cart/Cart.js";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Form />
      <Cart />
    </div>
  );
}

export default App;
