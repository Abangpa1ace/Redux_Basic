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
  
  const fetchData = async () => {
    dispatch(loadStart());
    try {
      const res = await fetch(DATA_API);
      const cartList = await res.json();
      await dispatch(fetchList(cartList));	// 디스패치에 함수 적용
      dispatch(loadEnd());
    }
    catch(err) {
      alert(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
    
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