//object-cover = fit to height
// ! in tailwind means priority
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [bgIndex, setBgIndex] = useState(1);

  const [hasClicked, setHasClicked] = useState(false);
  //since we are using the same video for all the mini videos, we don't need to load it multiple times, so we can use a state to check if the video has been clicked or not, and if it has been clicked, we can just play the video, otherwise, we can load the video
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  //we use useRef to target html elements, like a pointer in c++
  const nextVideoRef = useRef(null);
  useEffect(()=>{
    if(loadedVideos === totalVideos-1){
       setIsLoading(false)

    }

  },[loadedVideos])
  //dep.. and rev.. is default
  useGSAP(()=> {
    //if miniplayer has clicked
    if(hasClicked){
      //initial state, target the id 
      //make the invisible video visible, then animate
      gsap.set('#next-video',{visibility:'visible'});
      //animate to
      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: .3,
        ease: 'power1.inOut',
        //to play the nextvideo
        onStart:()=> nextVideoRef.current.play()
      });
      //animate from this to the set
      gsap.from('#current-video',{
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut'
      })
    }
  },{dependencies:[currentIndex],revertOnUpdate:true});

  useGSAP(()=>{
    gsap.set('#video-frame',{
      clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
      borderRadius: '0 0 20% 0%'
    })
    gsap.from('#video-frame',{
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger:{
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,


      }
    })
  })

  const handleVideoLoad = () => {
    //proper way of incrementing in react
    setLoadedVideos((prevLoadedVideos) => prevLoadedVideos + 1);
  };
  //increment everytime currentindex changed
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
    setTimeout(() => {
      setBgIndex((prevIndex) => (prevIndex % totalVideos) + 1)

    }, 300);
    console.log(currentIndex)
    

  };

  //souce of mini video and bg video
  const videoSource = (index) => `/videos/hero-${index}.mp4`;

  //overflow-x-hidden to hide the scrollbar
  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
            <div className="three-body__dot"/>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={videoSource(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
          
            ref={nextVideoRef}
            src={videoSource(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
          
            src={videoSource( 
             bgIndex
            )}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40  size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-200 flex-center gap-1"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
