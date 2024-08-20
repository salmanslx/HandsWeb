import React, { useEffect, useRef } from 'react';
import './screens.css';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.jpg';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';

function Screens() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (scrollContainer) {
                scrollAmount += 2;
                if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollAmount = 0; // Reset scroll when the end is reached
                }
                scrollContainer.scrollTo({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        };

        const scrollInterval = setInterval(autoScroll, 50); // Adjust the interval for desired speed

        return () => clearInterval(scrollInterval); // Cleanup on component unmount
    }, []);

    return (
        <div className='scrn' id='screens'>
            <div className='content'>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="section-title">
                            <h2 className='d-flex justify-content-center fw-bold mb-5'>Beautiful Interface</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div ref={scrollRef} className="screenshort-slide-content">
                            <div className="screenshort-slide d-flex">
                                <div className="screenshort-item">
                                    <img src={p1} className="img-fluid" alt="" />
                                </div>
                                <div className="screenshort-item">
                                    <img src={p2} className="img-fluid" alt="" />
                                </div>
                                <div className="screenshort-item">
                                    <img src={p3} className="img-fluid" alt="" />
                                </div>
                                <div className="screenshort-item">
                                    <img src={p4} className="img-fluid" alt="" />
                                </div>
                                <div className="screenshort-item">
                                    <img src={p5} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screens;
