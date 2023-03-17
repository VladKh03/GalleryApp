import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap-trial';
import wrapperAddGsap from '../../gsap/wrapper.gsap'
import './app.css';

const MainPage = () => {
    let app = useRef(null)
    console.log("APP")
    
    useEffect(() => {
        console.log("HOOK")
        gsap.to(app, {duration:0, visibility:'visible'})
        wrapperAddGsap()
        
    }, [])

    return (
        <div className="wrapper" ref={el => app = el}>
            <div className="content">
                <header className="hero-section">
                    <img data-speed=".6" className="hero" src={require("../../assets/img/hero.png")} alt="Alt" />
                    <div className="container">
                        <div data-speed=".75" className="main-header">
                            <h1 className="main-title">creative scroll</h1>
                        </div>
                    </div>
                </header>
                <div className="portfolio">
                    <div className="container">
                        <div className="gallery" >
                            <div data-speed=".9" className="gallery__left">		
                                <img className="gallery__item" src={require("../../assets/img/gallery/1.jpg")} alt="Alt" />
                                <img className="gallery__item" src={require("../../assets/img/gallery/2.jpg")} alt="Alt" />		
                                
                                <div className="text-block gallery__item">
                                    <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                                    <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                                </div>		
                                <img className="gallery__item" src={require("../../assets/img/gallery/6.jpg")} alt="Alt" />                              
                            </div>
                            <div data-speed="1.1" className="gallery__right">		
                                <div className="text-block gallery__item">
                                    <h2 className="text-block__h">Creative floating scroll with amazing parallax effect</h2>
                                    <p className="text-block__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amount scrolling.</p>
                                </div>		
                                <img className="gallery__item" src={require("../../assets/img/gallery/3.jpg")} alt="Alt" />
                                <img className="gallery__item" src={require("../../assets/img/gallery/4.jpg")} alt="Alt" />
                                <img className="gallery__item" src={require("../../assets/img/gallery/5.jpg")} alt="Alt" />                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage