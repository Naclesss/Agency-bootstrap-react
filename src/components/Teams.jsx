import React from 'react'

const Teams = () => {
  return (
    <div className="our-teams py-5" style={{backgroundColor: '#f8f9fa'}} id="team">
  <div className="title d-flex flex-column gap-2 justify-content-center align-items-center py-5">
    <h2>Our Amazing Team</h2>
    <p style={{color: '#6c757d'}}>Lorem ipsum dolor sit amet consectetur.</p>
  </div>
  <div className="container-fluid">
    <div className="row g-5 px-5 mx-5">
      <div className="col-12 col-lg-4">
        <div className="member d-flex flex-column align-items-center justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg" />
          <div className="member-info">
            <h2>Parveen Anand</h2>
            <p>Lead Designer</p>
          </div>
          <div className="contact">
            <i className="fa-brands fa-x-twitter" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="member d-flex flex-column align-items-center justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/3.jpg" />
          <div className="member-info">
            <h2>Diana Petersen</h2>
            <p>Lead Marketer</p>
          </div>
          <div className="contact">
            <i className="fa-brands fa-x-twitter" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <div className="member d-flex flex-column align-items-center justify-content-center">
          <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/2.jpg" />
          <div className="member-info">
            <h2>Larry Parker</h2>
            <p>Lead Developer</p>
          </div>
          <div className="contact">
            <i className="fa-brands fa-x-twitter" />
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-linkedin-in" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <p className="text-center" style={{color: '#6c757d'}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
    laboriosam veritatis, quos non quis ad<br />
    perspiciatis, totam corporis ea, alias ut unde.
  </p>
</div>

  )
}

export default Teams