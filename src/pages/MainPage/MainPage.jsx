import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap-trial';
import wrapperAddGsap from '../../gsap/wrapper.gsap'

import Header from './Header';
import Body from './Body';

const MainPage = () => {
    let app = useRef(null)
    useEffect(() => {
        gsap.to(app, {duration:0, visibility:'visible'})
        wrapperAddGsap()
        
    }, [])

    return (
        <div className="wrapper" ref={el => app = el}>
            <div className="content">
                <Header/>
                <Body/>
            </div>
        </div>
    )
}

export default MainPage