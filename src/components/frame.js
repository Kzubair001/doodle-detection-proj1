import { useEffect } from 'react';
import React from 'react';


const Frame = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll('[data-animate-on-scroll]');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          const targetElement = entry.target;
          targetElement.classList.add("animate");
          observer.unobserve(targetElement);
        }
      }
    }, {
      threshold: 0.15,
    });

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative w-full h-[1080px] overflow-hidden bg-[url('/public/frame-15@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-xl text-white font-poppins lg:w-[1600px] lg:h-[1370px] md:w-[1790px] md:h-[1100px] sm:w-[600px] sm:h-[490px] flex justify-center content-center">
            <div className="absolute top-[236px] left-[721px] rounded-[18px] bg-gray-200 [backdrop-filter:blur(4px)] w-[477px] h-[629px]" />
      <section className="absolute top-[236px] left-[721px] rounded-[18px] bg-gray-200 [backdrop-filter:blur(4px)] w-[477px] h-[629px]"></section>
      <div className="absolute top-[329px] left-[787px] text-base font-medium text-gainsboro text-center inline-block w-[345px] h-[23px]">Get started with your existing account</div>
      <h3 className="m-0 absolute top-[291px] left-[915px] text-5xl font-medium font-inherit inline-block w-[89px] h-[29px]">Sign In</h3>
      <input
       className="bg-gray-100 absolute top-[390px] left-[777px] rounded-md box-border w-[365px] h-[66px] border-[1px] border-solid border-darkslategray-200 px-4 py-2"
       placeholder="Enter Your Email"
       type="text" ></input>
      <input
       className="bg-gray-100 absolute top-[484px] left-[777px] rounded-md box-border w-[365px] h-[66px] border-[1px] border-solid border-darkslategray-200 px-4 py-2" 
       placeholder="Enter Your Password" 
       type="password" />
      <button className="cursor-pointer [border:none] p-0 bg-blue absolute top-[588px] left-[777px] rounded-md shadow-[0px_4px_250px_39px_rgba(112,_25,_255,_0.25)] w-[365px] h-[67px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]" autoFocus={true} data-animate-on-scroll />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[607px] left-[890px] text-5xl font-semibold font-poppins text-white text-left inline-block w-[139px] h-[29px]">Get Started</button>
      <div className="absolute top-[670px] left-[946px] font-medium inline-block w-[27px] h-6">or</div>
      <img
        className="absolute top-[731px] left-[1088px] w-[37px] h-[38px] object-cover"
        alt=""
        src="/googlelogopngiconfreedownloadsuf63j-1@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-transparent absolute top-[738px] left-[805px] text-xl font-semibold text-darkslategray-100 inline-block w-[139px] h-[29px]">
        Google Log in
      </button>
      <h1 className="m-0 absolute top-[54px] left-[92px] text-[48px] font-bold font-inherit inline-block w-52 h-[59px]">DOODLY</h1>
      <b className="absolute top-[119px] left-[92px] inline-block w-[167px] h-7">Play Solve Draw</b>
    </div>);
};

export default Frame;
