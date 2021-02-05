import React from 'react';
import Footer from './Footer';
import Header from './Header';

import LazyHero from 'react-lazy-hero';

import BG from "../../images/janitor1.jpg"


const Layout = ({ children, hideHeader, hideFooter }) => {
  return (
    <>
      {/*{!hideHeader && <Header />}*/}
      <main className="w-full h-screen text-gray-900">
      <LazyHero
        /*imageSrc={props.bgImage}*/
        /*imageSrc="https://res.cloudinary.com/dexdumfqy/image/upload/v1608672766/rbl-art-designs/pexels-ella-olsson-1640774_snwle8.jpg"*/
        imageSrc={BG}
        isCentered={true}
        isFixed={false}
        minHeight="105vh"
        opacity={0.7}
        color="#000"
        transitionDuration={2000}
        className="z-20 hero"
      >
        {children}
        </LazyHero>
        
        </main>
    </>
  );
};

export default Layout;
