import React from "react"
import { list } from "../../data/Data"
import {useDispatch} from 'react-redux'
// import Cart from '../Pages/Cart'
import {useSelector} from 'react-redux'
// import {add,remove} from '../redux/Slices/CounterSlice'
import {add,remove} from '../../../redux/Slices/CounterSlice'
import { CiHeart } from "react-icons/ci";

const RecentCard = ({val}) => {
  const dispatch = useDispatch()
  const {cart} =useSelector((state)=> state)

  const removeFromCart=()=>{
    console.log("wrong")
    dispatch(remove(val.id))
    alert("item remove from cart")

  }

  const addToCart=()=>{
    console.log("wrong 1")
    dispatch(add(val))
    alert("item added to cart")
  }
  return (
    <>
      <div  className='content mtop '>
        
          {/* const { cover, category, location, name, price, type } = val */}
          
            <div className='box shadow'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: val.category === "For Sale" ? "#25b5791a" : "#ff98001a", color: val.category === "For Sale" ? "#25b579" : "#ff9800" }}>{val.category}</span>
                  
                  {/* {
                  cart.some((p)=>p.id == data.id)?
                  (<i className='fa fa-heart'></i>):
                  (<i className='fa fa-heart'></i>
                  )} */}


          {
          cart.some((p)=>p.id == val.id)?
          
          (<button className='text-red-600 text-2xl hover:scale-95 hover:text-3xl' onClick={removeFromCart}><CiHeart /> </button>):
          (<button  className=' hover:scale-75 'onClick={addToCart}> <i className='fa fa-heart'></i></button>)
          
          }
          


                </div>
                <h4>{val.name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> 
                  {val.location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{val.price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{val.type}</span>
              </div>
            </div>
          
        
      </div>
    </>
  )
}

export default RecentCard
