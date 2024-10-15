import React from 'react'

const Brands = () => {
  return (
   <div className="brands">
  <div className="container-fluid">
    <div className="row g-3 p-4 py-5">
      <div className="col-12 col-sm-6 col-md-3">
        <div className="brand d-flex justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/microsoft.svg" width={206} height={44} />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="brand d-flex justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/google.svg" width={118} height={44} />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="brand d-flex justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/facebook.svg" width={164} height={44} />
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-3">
        <div className="brand d-flex justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/logos/ibm.svg" width={110} height={44} />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Brands