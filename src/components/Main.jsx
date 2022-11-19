import React from 'react'

export const Main = (props) => {
  return (
    <main className='main container'>
      <div className='main__illustration'>
        <img
          src={props.illustration}
          className='main__illustration-img'
          alt='Illustration'
        />
      </div>
      <div className='main__content'>
        <h1 className='main__content-title'>
          Build The Community Your Fans Will Love
        </h1>
        <p className='main__content-desc'>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <div className='main__content-register'>
          <a href='#' className='main__content-register_btn'>
            Register
          </a>
        </div>
      </div>
    </main>
  )
}
