import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

 const Cart = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const{carts,totalAmount,itemCount}=useSelector(state=>state.carts);
  console.log(carts)
  useEffect(()=>{

    dispatch(getCartTotal())
  },[dispatch])

  return (
    <div>
{
      carts?.length > 0 ?
      <div>

{
      carts?.map((cart,i)=>(
            <CartComp key={i} cart={cart}/>

      ))
}
<div className='flex items-center justify-end text-2xl ml-2'>Toplam Tutar: <span className='font bold text-2xl'>{totalAmount} Tl</span></div>
      </div>:
      <div>
Sepet Boş
      </div>
}
    </div>
  )
}
export default Cart
