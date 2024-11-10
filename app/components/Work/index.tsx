"use client"

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';


interface cardDataType {
  imgSrc : string;
  heading: string,
  subheading: string;
  link : string;
}


const cardData: cardDataType[] = [
  {
    imgSrc: '/images/Features/FeatureOne.svg',
    heading : 'Menu variations',
    subheading: 'Craisin relish . sweer potato butter',
    link : 'Learn more'
  },
  {
    imgSrc: '/images/Features/FeatureTwo.svg',
    heading : 'Cooking raw',
    subheading: 'Harissa dill vinaigretter . nobody blue labneh',
    link : 'Learn more'
  },
  {
    imgSrc: '/images/Features/FeatureThree.svg',
    heading : 'Best Spicy',
    subheading: 'Avacado . kumqutas . quenaa curnuch',
    link : 'Learn more'
  },
  {
    imgSrc: '/images/Features/FeatureFour.svg',
    heading : 'Fast Food',
    subheading: 'Pickled vaggies . limey-herby dressing',
    link : 'Learn more'
  },
]

const Work = () => {
  return (
    <div  id="about-section"  className='mx-auto max-w-7xl py-40 px-6'  >
      <div  className='text-center mb-14' >
        <Fade  direction='up' delay={400} cascade damping={1e-1} triggerOnce={true} >
        <h3  className='text-pink text-lg font-normal mb-3 ls-51 uppercase' >Features</h3>
        </Fade>
        <Fade  direction='up' delay={800} cascade damping={1e-1} triggerOnce={true} >
        <p  className='text-3xl lg:text-5xl font-semibold text-lightgrey'  >
        Get a many of interesting <br /> features.
      </p>
        </Fade>
      </div>

      <div  className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32' >

      <Fade  direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true} >
      {
          cardData.map((items,i) => (
            <div key={i}   className='card-b p-8 relative rounded-3xl'   >
              <div  className='work-img-bg rounded-full justify-center absolute top-[-50%] sm:top-[-40%]  lg:top-[-45%] left-[0%] custom-position' >
                <Image  src={items.imgSrc}   
                alt={items.imgSrc} width={510} height={10}
                />
              </div>
              <h3  className='text-2xl text-black font-semibold text-center mt-16'  >{items.heading}</h3>
              <p  className='text-lg font-normal text-black text-center text-opacity-50 mt-2' >{items.subheading}</p>
              <div   className='flex items-center justify-center'  >
                <Link href='/' >
                <p  className='text-center text-lg font-medium text-pink mt-2 hover-underline ' >
                  {items.link}<ChevronRightIcon  width={20} height={20} />
                  </p>
                </Link>
              </div>
            </div>
          ))
        }
      </Fade>
        
        
      </div>
    </div>
  )
}

export default Work