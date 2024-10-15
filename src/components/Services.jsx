import React from 'react'

const Services = () => {
  return (
  <div className="services py-5">
  <div className="title d-flex flex-column gap-2 justify-content-center align-items-center py-5">
    <h2 style={{fontSize: 40}}>SERVICES</h2>
    <span style={{color: '#6c757d'}}>Lorem ipsum dolor sit amet consectetur.</span>
  </div>
  <div className="container-fluid">
    <div className="row px-3">
      <div className="col-12 col-md-4">
        <div className="service">
          <i className="fa-solid fa-cart-shopping" />
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="service">
          <i className="fa-solid fa-laptop" />
          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="service">
          <i className="fa-solid fa-lock" />
          <h3>Web Security</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta
            impedit.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Services