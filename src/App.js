import { useEffect, useState } from 'react';

import { RecentOrdersComponent, LoadingComponent, TableDetailsComponent } from 'components';
import { getOrders } from 'services';

function App() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    if (!orders.length) {
      setLoading(true);
      const records = await getOrders();
      setOrders(records);
      setLoading(false);
    }
  }, [setOrders, getOrders, setLoading]);

  return loading ? (
    <LoadingComponent />
  ) : orders ? (
    <div className="container">
      <TableDetailsComponent orders={orders} />
      <RecentOrdersComponent orders={orders} />
    </div>
  ) : (
    <div className="text-center mt-3">No orders found</div>
  );
}

export default App;
