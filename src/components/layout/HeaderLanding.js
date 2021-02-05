import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

import Logo from "../../images/Lagos-logo.png"


const HeaderLanding = () => (
  <header className="sticky top-0 bg-transparent">
    <div className="container flex flex-col items-center justify-between mx-auto sm:flex-row">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <img src={Logo} alt="Lagos &amp; Lagos Cleaning Services" />
        </div>
      </div>
      {/*<div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
</div>*/}
    </div>
  </header>
);

export default HeaderLanding;
