import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './components/loader';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { loadStart, loadEnd } from './Action/loadAction';
import { fetchList, calculate } from './Action/cartAction';
import { DATA_API } from './data';

function App() {
  const loading = useSelector(state => state.loading.isLoading);
  const list = useSelector(state => state.cart.list);

  const dispatch = useDispatch();
  const fetchList = async () => {
    dispatch(loadStart());
    const res = await fetch(DATA_API);
    const cartList = await res.json();
    dispatch({ type: 'FETCHCART', cartList});
    dispatch(loadEnd());
  }

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    dispatch(calculate());
  }, [list]);

  if (loading) {
    return(<Loader />);
  }

  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;