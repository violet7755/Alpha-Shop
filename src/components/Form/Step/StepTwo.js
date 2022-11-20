// shipping phase
import styles from './StepTwo.module.css'

function RadioGroup ({id, price, text, priceText, period, checked}) {
  return (
  <label className = {styles.radioGroup} data-price = {price}>
    <input id = {id} type="radio" name = "shipping"  checked = {checked}/>
    <div className = {styles.radioInfo}>
      <div className = {styles.radioInfoContainer}>
        <div className = {styles.text}>{text}</div>
        <div className = {styles.price}>{priceText}</div>
      </div>
      <div className = {styles.period}>{period}</div>
    </div>
    <div className = {styles.radioBoxBorder}></div>
  </label>
  );
}


export default function StepTwo() {
  return (
    <form class = {styles.formContainer} data-phase = "shipping">
      <h3 className = {styles.formTitle}> 運送方式 </h3>
      <section className = {styles.formBody}>
        <div className = {styles.radioGroupContainer}>
          <RadioGroup 
           id = "shipping-standard" 
           price = "0" 
           text = "標準運送" 
           priceText = "免費" 
           period = "約 3~7 個工作天"
           checked = "true"
          />
         </div>
        <div className = {styles.radioGroupContainer}>
          <RadioGroup 
           id = "shipping-dhl"  
           price = "500" 
           text = "DHL 貨運"
           priceText = "$500"  
           period = "48 小時內送達"
           checked = "false"
         />
        </div>
      </section>
    </form>
  ); 
}
