import propTypes from 'prop-types'
const Bottle = ({bottle,purchaseHandler}) => {
  
    const {name,img,price}=bottle
    return (
        <div>
            <h1>Name:{name}</h1>
            <img src={img}></img>
            <h3>Price:{price}</h3>
            <button className='btn' onClick={()=>purchaseHandler(bottle)}>Purchase</button>
            
        </div>
    );
};


Bottle.propTypes ={
    bottle: propTypes.object,
    purchaseHandler:propTypes.func
}
export default Bottle;