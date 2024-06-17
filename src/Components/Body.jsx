import React from 'react'

const Body = () => {
  return (
    <>
    <div className='lg:flex'>
    <div className=''>
      <div>
        <p className='text-4xl tracking-tight leading-tight py-10 md:text-6xl lg:text-8xl'>
        Best way to revise for your next coding interview
        </p>
      </div>
      <div>
        <p className='text-1xl text-fuchsia-800 font-semibold hover:text-fuchsia-950  md:text-3xl' >
        Get everything in a single guide: Data structures, algorithms, patterns, visualizers, questions, examples, solutions, explanations, and much more!
        </p>
      </div>
      <div className='py-10'>
            <button className='w-full border-solid bg-green-300 text-black rounded-lg hover:cursor-zoom-in hover:bg-lime-300 p-2  md:text-3xl'>BUY FREE through <p className="font-bold">GUMROAD</p></button>
      </div>
      <div className="bg-slate-100 p-3">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <p className='md:text-2xl'>"Highly recommended if you're interviewing or preparing these days - this guide will help you revise concepts and practice things before the interview."</p>
            </div>
            <div class="carousel-item">
            <p className='md:text-2xl'>"Excellent revision tool, specially when you have an interview coming up in 15 days or so. It's so hard to find everything in one place."</p>
            </div>
             <div class="carousel-item">
            <p className='md:text-2xl'>"Love how the concepts are explained + all the wonderful resources mentioned. Having everything in one guide is super helpful."
            </p>
            </div>
            </div>

        </div>
      </div>
    </div>
        <div className='container'>
        <div className='p-10'>
            <img src="./images/dsa-main.png" alt="main" className='' />
        </div>
        </div>
    </div>
    </>
  )
}

export default Body
