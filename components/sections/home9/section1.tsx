"use client";

import Countdown from '@/components/elements/Countdown';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Section1() {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        const animateText = () => {
            setAnimationClass('scale-up');
            setTimeout(() => {
                setAnimationClass('fade');
                setTimeout(() => {
                    setAnimationClass('slide-in');
                }, 1000);
            }, 2000);
        };

        animateText();
        const interval = setInterval(animateText, 5000); // Loop animation every 5s
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
            />

            <style>
                {`
                .text-animation {
                    display: inline-block;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 700;
                    color: white;
                    text-shadow: 3px 3px 0 #000, 6px 6px 0 rgba(0, 0, 0, 0.3);
                    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                }
                .scale-up {
                    transform: scale(1.2);
                }
                .fade {
                    opacity: 0.5;
                }
                .slide-in {
                    transform: translateY(-10px);
                    opacity: 1;
                }
                .highlight {
                    color: #ffd700;
                    font-weight: 900;
                }
                `}
            </style>

            <div
                className="hero9-slider-area"
                style={{
                    backgroundImage: 'url(assets/img/bg/header-bg2.gif)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom'
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="hero8-header">
                                <h5>
                                    <img src="/assets/img/logo/fav-logo.png" alt="" />
                                    SHOWCASE TALENT, INSPIRE CREATIVITY
                                </h5>
                                <div className="space16" />
                                <h1 className={`text-animation ${animationClass}`}>
                                    THE <span className="highlight">NAVODIAN</span> <br /> PLATFORM
                                </h1>
                                <div className="space32" />
                                <div className="btn-area1">
                                    <Link href="pricing-plan" className="vl-btn1">
                                        <span className="demo">Buy Tickets Now!</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="timer-bg-area">
                                <div className="row">
                                    <div className="col-lg-7">
                                        <div className="timer-btn-area">
                                            <Countdown style={1} />
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <div className="heading12">
                                            <h3>30 March 2025</h3>
                                            <div className="space16" />
                                            <p>
                                                <img src="/assets/img/icons/location1.svg" alt="" />
                                                Chandigarh
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
