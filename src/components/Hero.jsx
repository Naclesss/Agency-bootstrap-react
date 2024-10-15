import React from 'react'

const Hero = () => {
  return (
   <div className="hero d-flex align-items-center justify-content-center">
  <div className="hero-content text-center d-flex flex-column align-items-center">
    <span className="mb-3 fst-italic fs-4">Welcome To Our Studio!</span>
    <h1 className="mb-5" style={{fontWeight: 700}}>IT'S NICE TO MEET YOU</h1>
    <button type="button" className="btn btn-secondary btn-lg">
      TELL ME MORE
    </button>
  </div>
</div>

  )
}

export default Hero