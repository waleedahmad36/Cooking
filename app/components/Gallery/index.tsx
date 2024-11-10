"use client"
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'


const Gallery = () => {
  return (
    <div  id='gallery-section'  >
      <div  className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 md:pt-24 lg:pt-24 pt-10'  >
        <div  className='text-center' >
          <Fade  direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}  >
          <h2  className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51' >Our Gallery</h2>
          </Fade>

          <Fade  direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}   >
          <h3  className='text-3xl lg:text-5xl font-semibold text-black' >Gallery of our cooked food</h3>
          </Fade>
          
        </div>

        {/* Gallery Photos  */}

        <div   className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6 ' >
          <div   className='col-span-12 flex justify-center' >
            <div  className='grid grid-rows-1 grid-flow-row' >

              {/* Top photos  */}
              <div  className='row-span-1 overflow-hidden  rounded-3xl mb-5'  >
                <Image  src={'/images/Gallery/chickenleg.jpg'}  alt='Chiken'  width={700} height={405}   className='inner-img'  />
              </div>

              {/* Bottom section  */}
              <div  className='grid grid-cols-2 gap-2' >

                <div   className='overflow-hidden rounded-3xl' >
                  <Image  src={'/images/Gallery/foodthree.jpg'}  alt='food' width={350} height={405}   className='inner-img'  />
                </div>

                <div   className='overflow-hidden rounded-3xl' >
                  <Image  src={'/images/Gallery/pizza.jpg'}  alt='food' width={350} height={405}   className='inner-img'  />
                </div>

                <div   className='overflow-hidden rounded-3xl' >
                  <Image  src={'/images/Gallery/foodthree.jpg'}  alt='food' width={350} height={405}   className='inner-img'  />
                </div>

                <div   className='overflow-hidden rounded-3xl' >
                  <Image  src={'/images/Gallery/pizza.jpg'}  alt='food' width={350} height={405}   className='inner-img'  />
                </div>

              </div>


            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Gallery