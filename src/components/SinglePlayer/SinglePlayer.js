import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({player, cart, setCart}) => {
  // console.log(player)
 const {strPlayer,idPlayer,strCutout} = player;

 const handleAddToCart = () =>{
  const info = {
    SinglePlayer,
    idPlayer,
    strCutout
  };
  const newPlayer = [info]
  setCart(newPlayer)
 };
 console.log(cart)
  return (
    <div className='cart-single'>
    <img className='player-img' src={strCutout} alt="" />
    <h5>name:{strPlayer}</h5>
    <p>{idPlayer}</p>
    <button className='btn-cart'>Details</button>
    <button onClick={handleAddToCart} className='btn-cart'>Add to cart</button>
    <button className='btn-cart'>Bookmark</button>
    {/* <p>{strDescriptionEN 
    ?strDescriptionEN?.slice(0, 50):
    "ekdjiwufhkdhjfkiduhiluhiwudhkwduhwuhc"}</p> */}
    </div>
  );
};

export default SinglePlayer;