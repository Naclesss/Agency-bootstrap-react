import React from 'react'

const Contacts = () => {
  return (
   <div className="contacts p-5 d-flex flex-column justify-content-center" id="contact">
  <div className="title d-flex flex-column gap-2 justify-content-center align-items-center py-5">
    <h2 style={{fontSize: 40, color: 'white'}}>CONTACT-US</h2>
    <span style={{color: '#6c757d', fontSize: 18}} className="text-center"><i>Lorem ipsum dolor sit amet consectetur.</i></span>
  </div>
  <div className="container-fluid">
    <div className="row g-4">
      <div className="col-12 col-md-6">
        <div className="row g-4">
          <div className="col-12">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name*" />
          </div>
          <div className="col-12">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email*" />
          </div>
          <div className="col-12">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Phone*" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your Message*" defaultValue={""} />
      </div>
    </div>
  </div>
  <button type="button" className="btn btn-secondary btn-lg mt-4 ms-auto me-auto">
    SEND MESSAGE
  </button>
</div>

  )
}

export default Contacts