import { OrderTableHeaders } from 'constants';

export default ({ orders }) => {
  return (
    <div className="container">
      <h4 className="text-center my-4">Most recent orders</h4>
      <table className="table">
        <thead>
          <tr>{OrderTableHeaders.map((h, idx) => !h.skip && <th key={idx}>{h.title}</th>)}</tr>
        </thead>
        <tbody>
          {orders?.map((order, orderIdx) => (
            <tr key={orderIdx}>
              {OrderTableHeaders.map((h, idx) => {
                return !h.skip && <td key={idx}>{order[h.key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
