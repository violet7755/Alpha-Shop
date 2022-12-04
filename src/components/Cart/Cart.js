import { products } from "./CartData.js";
import { ReactComponent as Minus } from "../../icons/minus.svg";
import { ReactComponent as Plus } from "../../icons/plus.svg";
import styles from "./Cart.module.css";

function CartInfo({ name, text, amount }) {
  return (
    <section className={styles.cartInfo} name={name}>
      <div className={styles.text}>{text}</div>
      <div className={styles.amount}>{amount}</div>
    </section>
  );
}

export default function Cart() {
  const listItems = products.map((product) => (
    <div className={styles.productContainer} key={product.id}>
      <img
        className={styles.imgContainer}
        src={product.img}
        alt={product.name}
      />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <Minus className={styles.minus} />
            <span className={styles.productCount}>{product.quantity}</span>
            <Plus className={styles.plus} />
          </div>
        </div>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  ));

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList}>{listItems}</section>
      <CartInfo name="shipping" text="運費" amount="免費" />
      <CartInfo name="total" text="小計" amount="$400" />
    </section>
  );
}
