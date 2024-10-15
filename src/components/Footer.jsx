import React from 'react'

const Footer = () => {
  return (
  <footer className="py-4">
  <div className="container">
    <div className="row g-3 justify-content-center justify-content-lg-between align-items-center">
      <div className="col-12 col-lg-4 text-center text-lg-start">
        <p className="mb-0">Copyright © Your Website 2023</p>
      </div>
      <div className="col-12 col-lg-4">
        <div className="contact d-flex justify-content-center">
          <i className="fa-brands fa-x-twitter" />
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-linkedin-in" />
        </div>
      </div>
      <div className="col-12 col-lg-4 text-center text-lg-end">
        <p className="mb-0">Privacy Policy | Terms of Use</p>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer