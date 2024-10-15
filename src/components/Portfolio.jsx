import React from 'react'

const Portfolio = () => {
  return (
   <div className="portfolios py-5" style={{backgroundColor: '#f8f9fa'}} id="portfolio">
  <div className="title d-flex flex-column gap-2 justify-content-center align-items-center py-5">
    <h2 style={{fontSize: 40}}>PORTFOLIO</h2>
    <span style={{color: '#6c757d'}}>Lorem ipsum dolor sit amet consectetur.</span>
  </div>
  <div className="container-fluid">
    <div className="row g-3 px-5">
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Threads</h3>
            <p>Illustration</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Explore</h3>
            <p>Graphic Design</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Finish</h3>
            <p>Identity</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Lines</h3>
            <p>Branding</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Southwest</h3>
            <p>Website Design</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-4">
        <div className="portfolio">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg" className="img-fluid" />
          <div className="portfolio-content">
            <h3>Window</h3>
            <p>Photography</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Portfolio