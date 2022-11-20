import styles from './ProgressControl.module.css'

import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg'
import { ReactComponent as RightArrow } from '../../icons/right-arrow.svg'

function Button({name, text}) {
  return (
    <button id = {name}>
      <LeftArrow className = {styles.leftArrow}/>
      {text}
      <RightArrow className = {styles.rightArrow}/>
    </button>
  );
 }

export default function ProgressControl() {
  return (
  <section className = {styles.progressControlContainer}>
    <section className = {styles.buttonContainer} data-phase = "address">
      <Button name = "next" text = "下一步"/>
    </section>
    {/* <section className = {styles.buttonContainer} data-phase = "shipping">
      <Button name = "prev" text="上一步"/>
      <Button name = "next" text="下一步"/>
    </section> */}
    {/* <section className = {styles.buttonContainer} data-phase = "credit-card">
      <Button name = "prev" text="上一步"/>
      <Button name = "confirm" text="確認下單"/>
    </section> */}
  </section>
  ); 
}

