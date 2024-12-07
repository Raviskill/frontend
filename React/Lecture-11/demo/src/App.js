import React from 'react'
// import Demo from './demo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Card';
import KitchenSinkExample from './Card2';

const App = () => {
  return (
    <div className=''>
      {/* <Demo/> */}
      <Cards/>
      < KitchenSinkExample/>
    </div>
  )
}

export default App