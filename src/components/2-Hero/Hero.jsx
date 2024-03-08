import React from "react";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero space">
      <div className="left-section">
        <div className="avatar-container">
          <img className="avatar" src="/profile.png" alt="personal avatar" />
          <span className="icon-verified"></span>
        </div>
        <h1>React Frontend Developer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, reiciendis animi culpa, repellat corrupti eos modi quae voluptates ullam ad ab illum? Perspiciatis cupiditate ea possimus quidem nam ullam voluptas.</p>
        <div className="social-media"></div>
      </div>
      <div className="right-section animation">animation</div>
    </section>
  )
}
