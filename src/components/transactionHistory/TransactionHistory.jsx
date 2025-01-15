const TransactionHistory = ({ type, amount, currency }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
          <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TransactionHistory;
