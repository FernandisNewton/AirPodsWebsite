import React,{useEffect} from "react";
import './App.css';
import vid from './AirPods.mp4';
import ScrollMagic from "scrollmagic";
import ProgressBar from "react-scroll-progress-bar";
function App() {

  useEffect(() => {
    const intro = document.querySelector('.intro');
    const video = document.querySelector('video');
    const section = document.querySelector('section');

    const controller = new ScrollMagic.Controller();

    const scene = new ScrollMagic.Scene({
      duration:30000,
      targetElement:intro,
      triggerHook:0,
    }).setPin(intro).addTo(controller);

    let accel = 0.1;
    let scrPos = 0;
    let delay=0;

    scene.on("update",(e)=>{
      scrPos = e.scrollPos / 1000;
    })

    setInterval(()=>{
      delay += (scrPos - delay) * accel;
      video.currentTime = delay;
    },33)

  },[]);
  return (
    <div className="App">
      <ProgressBar />
      <div className = "intro" id="id">
        <video src = {vid} muted></video>
      </div>
      <section>
        <h1>THANK YOU FOR WATCHING</h1>
      </section>
    </div>
  );
}

export default App;
