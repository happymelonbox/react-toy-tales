import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys}) => {
  return(
    <div id="toy-collection">
      {toys.map(eachToy)}
    </div>
  );
}


const eachToy = ({name, image, likes, id}) =>{
  return (
    <div key={name}>
      <ToyCard name={name} image={image} likes={likes} id={id} />
    </div>
  )
}

export default ToyContainer;
