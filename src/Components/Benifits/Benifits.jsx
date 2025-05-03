import React from 'react'
import './Benifits.css'
function Benifits() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",gap:"50px",margin:"5% 0%"}} className='Benifits'>
      <div className='Benifits-experience'>
        <h1>25 years of experience and trust</h1>
        <p>Jewelry enhances personal style, symbolizes special moments, and can hold emotional or cultural significance while also serving as a form of investment or self-expression.</p>
      </div>

      <div style={{width:"100%"}} className='Benifites-left'>
        <div className='Benifits-quality'>
            <h1>Quality and materials</h1>
            <p>Quality and materials refer to the craftsmanship and the type of metals, stones, or gems used in jewelry, which determine its durability, value, and appearance.</p>
        </div>
        <div className='Benifits-environmental'>
            <h1>Environamental responsiblities</h1>
            <p>Environmental responsibilities involve using sustainable practices and ethically sourced materials to minimize harm to the planet during jewelry production.</p>
        </div>
      </div>
    </div>
  )
}

export default Benifits
