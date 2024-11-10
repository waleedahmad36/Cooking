"use client"
import Image from 'next/image'
import React from 'react'
import {Fade}  from "react-awesome-reveal"

const Cook = () => {
  return (
    <div   className='relative '  id='cook-section'   >
      <div  className='mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6 lg:pr-20 ' >

      <div  className='absolute right-0 bottom-[-18%] hidden lg:block' >
      <Fade  direction='right' delay={800} cascade damping={1e-1} triggerOnce={true}  >
      <Image  src='/images/Cook/burger.png'  
          alt='Burger-image' width={463} height={622}  />
      </Fade>
        </div>

        <div  className='grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5'  >

          {/* left section  */}
          <div   className='col-span-6 flex justify-start' >
            <Fade  direction='left' delay={400} cascade damping={1e-1} triggerOnce={true}  >
            <Image  src='/images/Cook/cook.png' alt="Experts" width={635} height={808} />
            </Fade>
          </div>

          {/* Right section  */}

          <div   className='col-span-6 flex flex-col justify-center' >
          <Fade  direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}  >
          <h2  className='text-pink text-lg font-normal mb-3 ls-51 uppercase' >Cook with us</h2>
          </Fade>

          <Fade  direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}  >
          <h3  className='text-3xl lg:text-5xl font-semibold text-black text-start' >Cooking together with the experts</h3>
          </Fade>
            

          <Fade  direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}  >
          <p  className='text-grey md:text-lg font-normal mb-10 text-start mt-2' >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo architecto eius id odio ex laboriosam. Nobis consequatur accusantium quidem tempore incidunt delectus. Recusandae optio sunt accusamus alias commodi repudiandae neque praesentium assumenda vel. Rerum reiciendis similique amet repellat libero nesciunt minima fugit unde aperiam. Nulla et iste dolorem quas ab.
            </p>
           
            <p  className='text-grey md:text-lg font-normal mb-10 text-start mt-1' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in fugiat iure assumenda totam dolorum, pariatur voluptatum porro autem odit.....</p>

            <div   className='flex align-middle justify-center md:justify-start' >
          <button  className='text-xl font-medium bg-pink rounded-full text-white py-5 px-6 lg:px-10' >
            Learn more
            </button>
          </div>

          </Fade>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Cook