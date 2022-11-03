import React from 'react'

export  default function Navbar () {
  return (
    <div>
<nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">WE BUY</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className=" navbar-nav ml-50px ">
       <li className="nav-item">
        <a className="nav-link" href="#"><i class="fa fa-sign-in" aria-hidden="true">Login</i>
</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="fa-solid fa-cart-shopping">Cart</i></a>
      </li>
    </ul>
  </div>
</nav>  
  </div>
  )
}
