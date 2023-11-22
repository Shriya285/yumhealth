import React from 'react'
import aboutImg1 from '../assets/img/aboutImg1.jpg'


export const About = () => {
  return (
    <div className='about container section'>
        <div className='sectionContainer grid'>
            <div className='imgDiv'>
                <img src={aboutImg1}/>
            </div>
            <div className='textDiv'>
                <h2>Welcome</h2>
            </div>

            <div className='grids grid'>
                <div className='singleGrid'>
                    <span>
                        Loreum ipsum welcome
                    </span>
                    <p>
                        some paragraph
                    </p>
                </div>
                
                <div className='singleGrid'>
                    <span>
                        Loreum ipsum welcome
                    </span>
                    <p>
                        some paragraph
                    </p>
                </div>
                <div className='singleGrid'>
                    <span>
                        Loreum ipsum welcome
                    </span>
                    <p>
                        some paragraph
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
