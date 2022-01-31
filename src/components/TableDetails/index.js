import { useEffect, useState } from 'react';
import { getOrdersByFormula } from 'services';

const START_DATE = '2021-12-31';
const END_DATE = '2021-10-01';

export default ({ orders }) => {
  const [ordersInProgress, setOrdersInProgress] = useState([]);

  useEffect(async () => {
    if (!ordersInProgress.length) {
      const records = await getOrdersByFormula(`{order_status} = "in_progress"`);
      setOrdersInProgress(records);
    }
  }, [setOrdersInProgress, getOrdersByFormula]);

  const revenue = orders.reduce((prev, next) => {
    return prev + next.price;
  }, 0);

  const lastMonthOrders = orders.filter(
    (order) =>
      new Date(START_DATE) > new Date(order.order_placed) &&
      new Date(order.order_placed) > new Date(END_DATE)
  );

  return (
    <div className="container">
      <div className="d-flex flex-inline justify-content-around my-4">
        <div>Total orders: &nbsp; {orders.length || 0}</div>
        <div>Last quarter orders: &nbsp; {lastMonthOrders.length || 0}</div>
        <div>In progress orders: &nbsp; {ordersInProgress.length || 0}</div>
        <div>
          Revenue: &nbsp; {revenue.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
        </div>
      </div>
    </div>
  );
};
