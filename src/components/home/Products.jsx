import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts,getCategoryProducts } from '../../redux/productSlice'
import Loading from "../Loading"
import ReactPaginate from 'react-paginate';
import Product from './Product'
const Products = ({category,sort}) => {
  const dsipatch=useDispatch()

  const {products,productsStatus}=useSelector(state=>state.products)

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage=6
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
  
    setItemOffset(newOffset);
  };
  useEffect(()=>{
    if(category){
      dsipatch(getCategoryProducts(category))

    }
    else{
      dsipatch(getProducts())


    }
    
  },[dsipatch,category])
  return (
    <div>
      {
        productsStatus=="LOADING" ? <Loading/>:
        <>
        <div className='flex flex-wrap'>
          {
            currentItems?.sort((a,b)=>sort=="inc" ?a.price-b.price : sort =="dec" ? b.price-a.price : "" )?.map((product,i)=>(
              <Product key={i} product={product}/>

            ))
        
          }
        </div>
        <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
          </>
  
  
      }
    </div>
  )
}

export default Products