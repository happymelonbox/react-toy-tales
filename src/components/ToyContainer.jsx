import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys}) => {
  return(
    <div id="toy-collection">
      {toys.map(eachToy)}
    </div>
  );
}

const eachToy = ({name, image, likes}) =>{
  return (
    <div key={name}>
      <ToyCard name={name} image={image} likes={likes}/>
    </div>
  )
}

export default ToyContainer;
