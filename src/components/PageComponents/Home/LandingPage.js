import React from "react"


import Logo from "../../../images/Lagos-logo-shadow.png"

import "./landing.css"

import {
    FaFacebook,
    FaInstagram,
    FaPhoneAlt,
    FaLinkedin,
    FaEnvelope,
    FaTwitter
} from "react-icons/fa"


const LandingPage = (props) => {
    return (



        <div className="relative z-10 bg-transparent rounded-lg md:bg-gray-900 md:bg-opacity-25 animate-fade-in-fwd">
          <div className="px-4 py-0 mx-auto my-5 md:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-16 lg:px-8">
            <div className="flex flex-col items-center justify-between sm:items-start xl:flex-row">
              <div className="w-full max-w-xl mb-6 sm:mb-12 xl:mb-0 xl:px-16 xl:w-7/12">
                <header className="container flex flex-col items-center mx-auto justify-items-center">
                    <div className="flex flex-col items-center text-2xl">
                        <div className="w-24 py-5 mx-auto lg:w-40 ">
                            <img src={Logo} alt="Lagos &amp; Lagos Cleaning Services" className="w-full" />
                        </div>
                        <h1 className="text-4xl font-bold text-white">Lagos &amp; Lagos</h1>
                    </div>
            </header>
                <h2 className="max-w-lg mt-2 mb-4 font-sans text-2xl font-medium tracking-tight text-white lg:mt-6 sm:text-3xl sm:leading-none">
                Full Service Commercial Cleaners

                </h2>

                <div className="hidden px-6 mx-auto lg:mt-48 justify-evenly md:flex md:flex-row ">
            <a href="#" rel="noopener" className="text-gray-100 hover:text-gray-600">
              <FaFacebook size="2rem"/>
              </a>
              <a href="#" rel="noopener" className="text-gray-100 hover:text-gray-600">
              <FaInstagram size="2rem"/>
              </a>
              <a href="#" rel="noopener" className="text-gray-100 hover:text-gray-600">
              <FaLinkedin size="2rem"/>
              </a>
          </div>



              </div>
              <div className="w-full max-w-xl xl:px-4 xl:w-5/12">
                <div className="p-6 bg-white rounded shadow-2xl">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:text-2xl">
                    Request A Quote
                  </h3>
                  <form
                            name="requestQuoteForm"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            action="/#"
                  >
                                  <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="requestQuoteForm" />
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="flex mb-1 font-medium"
                      >
                        First name*
                      </label>
                      <input
                        placeholder="John"
                        required
                        type="text"
                        className="flex-grow w-full h-10 px-4 mb-2 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="flex mb-1 font-medium"
                      >
                        Last Name*
                      </label>
                      <input
                        placeholder="Doe"
                        required
                        type="text"
                        className="flex-grow w-full h-10 px-4 mb-2 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="flex mb-1 font-medium"
                      >
                        E-mail*
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-10 px-4 mb-2 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="tel"
                        className="flex mb-1 font-medium"
                      >
                        Phone*
                      </label>
                      <input
                        placeholder="(310) 555-5555"
                        required
                        type="tel"
                        className="flex-grow w-full h-10 px-4 mb-2 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        id="tel"
                        name="phone"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                    <label htmlFor="message" className="flex mb-1 font-medium">
              What Can We Help You With?
              </label>
            <textarea 
            id="message" 
            name="message" 
            className="w-full h-20 px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" 
            defaultValue={""} />
</div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btnColor hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                    {/*<p className="text-xs text-gray-600 sm:text-sm">
                      We respect your privacy. Unsubscribe at any time.
    </p>*/}
                  </form>
                </div>
              </div>
            </div>
            <div className="flex flex-row px-6 mx-auto my-5 justify-evenly md:hidden">
              <FaFacebook size="2rem" color="white"/>
              <FaInstagram size="2rem" color="white"/>
              <FaLinkedin size="2rem" color="white"/>
          </div>
          </div>
        </div>
    );
  };

  export default LandingPage