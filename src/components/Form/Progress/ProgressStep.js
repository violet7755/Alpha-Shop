import styles from "./ProgressStep.module.css";

// Step component
function Step({ phase, text, label }) {
  return (
    <span className={styles.progressGroup}>
      <span className={styles.progressIcon} phase={phase}>
        <span className={styles.progressText}>{text}</span>
      </span>
      <span className={styles.progressLabel}>{label}</span>
    </span>
  );
}

// Progress Bar component
function ProgressBar({ className }) {
  return <span className={className}></span>;
}

export default function ProgressStep() {
  return (
    <div>
      <h2 className={styles.progressTitle}> 結帳 </h2>
      <section className={styles.progressContainer}>
        <Step text="1" label="寄送地址" phase="done" />
        <ProgressBar className={styles.progressBar} />
        <Step text="2" label="運送方式" phase="undone" />
        <ProgressBar className={styles.progressBarUndone} />
        <Step text="3" label="付款資訊" phase="undone" />
      </section>
    </div>
  );
}
