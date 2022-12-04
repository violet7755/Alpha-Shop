// credit-card phase
import { InputGroup } from "./StepOne";
import styles from "./StepThree.module.css";

export default function StepThree() {
  return (
    <form className={styles.formContainer} data-phase="credit-card">
      <h3 className={styles.formTitle}> 付款資訊 </h3>
      <section className={styles.formBody}>
        <div className={styles.inputContainer}>
          <InputGroup
            id="CardHolder"
            label="持卡人姓名"
            placeholder="John Doe"
          />
        </div>
        <div className={styles.inputContainer}>
          <InputGroup
            id="CardNumber"
            label="卡號"
            placeholder="1111 2222 3333 4444"
          />
        </div>
        <div className={styles.inputContainer}>
          <InputGroup id="ExpireDate" label="有效期限" placeholder="MM/YY" />
          <InputGroup id="CVC" label="CVC / CCV" placeholder="123" />
        </div>
      </section>
    </form>
  );
}
