import css from "./TransactionHistory.module.css"
export const TransactionHistory = ({ transactions }) => {
    const transformedTransactions = transactions.map((transaction) => ({
      ...transaction,
      amount: parseFloat(transaction.amount),
    }));
    return (
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr className={css.tableRow}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
    
  
        <tbody className={css.tableBody}>
          {transformedTransactions.map((transaction) => (
            <tr className={css.tableRow} key={transaction.id}>
              <td className={css.tableDescription}>{transaction.type}</td>
              <td className={css.tableDescription}>{transaction.amount}</td>
              <td className={css.tableDescription}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  
  export default TransactionHistory;