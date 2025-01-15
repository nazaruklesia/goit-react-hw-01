import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactions}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.title}>Type</th>
            <th className={styles.title}>Amount</th>
            <th className={styles.title}>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td className={styles.box}>{type}</td>
              <td className={styles.box}>{amount}</td>
              <td className={styles.box}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
