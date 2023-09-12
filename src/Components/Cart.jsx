import propTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const Cart = ({cart,removehandler}) => {
    console.log(cart)
    return (

        <div className='w-28'>
             <h2>{cart.name}</h2>
          <img src={cart.img}></img>
          <button className='btn' onClick={ ()=>removehandler(cart.id)}> Remove</button>
           
     
        </div>
        
    );
};


Cart.propTypes={
    cart: propTypes.array,
    removehandle:propTypes.func
}

export default Cart;