"use client"
import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const NewsLetter = () => {
  return (
    <div  className='relative' >
      <div  className='bg-pink mx-auto max-w-2xl br-50 md:max-w-7xl rounded-lg mt-48' >
        <div  className='grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8' >

          {/* Column 1  */}
          <div className='col-span-7' >
            <div   className='m-10 lg:ml-32 lg:mt-20 lg:mb-20' >
              <Fade  direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
              <h3  className='text-lg font-normal mb-3 ls-5 text-white' >NewsLetter</h3>
              </Fade>

              <Fade  direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
              <h3  className='text-3xl md:text-5xl font-semibold mb-8 text-white' >Subscribe our <br/> newsLetter</h3>
              </Fade>
             

              <div>
                <div  className='relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full' >
                  <input  className='py-6 sm:py-8 text-sm w-full text-black bg-grey-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black'   type='Email address'  name='q'  placeholder='@ enter your email address'  autoComplete='off'   />
                  <div  className=' absolute inset-y-0 right-0 flex items-center pr-2' >
                    <button   type='submit' className='p-1 focus:outline-none focus:shadow-outline'  >
                      <Image  src='images/NewsLetter/arrow.svg'  alt='inputicon' width={57}  height={71}  />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2  */}
          <div  className='col-span-5 relative hidden md:block' >
            <div>
              <Image  src='/images/Newsletter/soup.svg' alt='soup-image' width={626} height={602}
              className='-mt-24' />
            </div>

            <div  className='absolute top-[78%]' >
              <Image  src='/images/NewsLetter/onion.svg'  alt='Onion image' width={300} height={122} />
            </div>

            <div  className='absolute top-[30%] right-[-23%]' >
            <Image  src='/images/NewsLetter/lec.svg'  alt='Letus-image' width={300} height={122} />
            </div>

            <div  className='absolute bottom-[10%] left-[0%]' >
            <Image  src='/images/NewsLetter/yellow.svg'  alt='yellow-image' width={59} height={59} />
            </div>

            <div  className='absolute bottom-[20%] right-[20%]' >
            <Image  src='/images/NewsLetter/blue.svg'  alt='blue-image' width={25} height={25} />
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default NewsLetter