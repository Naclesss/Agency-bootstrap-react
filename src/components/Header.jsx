import React from 'react'

const Header = () => {
  return (
  <div className="header">
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top custom-navbar" data-bs-theme="dark">
    <div className="container-fluid px-2 py-2 py-lg-3 mx-md-5">
      <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-text me-1" style={{fontSize: 12}}>MENU</span>
        <span className="navbar-toggler-icon custom-toggler" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">SERVICES</a>
          <a className="nav-link" href="#portfolio">PORTFOLIO</a>
          <a className="nav-link" href="#">ABOUT</a>
          <a className="nav-link" href="#team">TEAM</a>
          <a className="nav-link" href="#contact">CONTACT</a>
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Header