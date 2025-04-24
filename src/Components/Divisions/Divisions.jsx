import React from 'react'
import './Divisions.css'
const items = [
    {name : "Catalog",href : "/catalog"},
    {name : "Sale",href : "/sale"},
    {name : "New",href : "/new"},
    {name : "Payment and  Delivery",href : "/payment and delivery"},
    {name : "About us",href : "/about"},
    {name : "Contact us",href : "/contact"},
    {name : "For Wholesalers",href : "/wholesalers"},
]
function Divisions() {
  return (
    <div className='division-heading'>
      {items.map((data,index)=>(
        <div key={index}>
            <a href={data.href} style={{color:"black",textDecorationLine:"none",fontSize:"20px"}} className='fw-semibold fs-6'>{data.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Divisions
