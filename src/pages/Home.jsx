import React from 'react';
import  './Homestyle.css';
import SliderHome from '../components/SliderHome';
const Home = ()=>{
  
        return (
           
            <div className='Home'>
                <div className="conteiner_content">
                {/* <img className="hero" src={HeroIMG}></img> */}
                <div className="hero">
                    < SliderHome />
                </div>
                </div>
            </div>
        );
    
};

export default Home;