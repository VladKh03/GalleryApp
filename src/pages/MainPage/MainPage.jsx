import React, {useRef, useEffect} from 'react';
import { gsap } from 'gsap-trial';
import wrapperAddGsap from '../../gsap/wrapper.gsap'

import Upper from './Upper';
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
                <Upper/>
                <Body/>
            </div>
        </div>
    )
}

export default MainPage