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
        <h1 className="title">React Frontend Developer</h1>
        <p>Passionate about crafting exceptional user experiences. With a strong foundation in web technologies and a keen eye for design, I thrive on tackling complex challenges and turning them into simple, intuitive solutions.</p>
        <div className="social-media">
          <a href="https://github.com/MohamedZakidev" target="_blank"><span className="icon icon-github"></span></a>
          <a href="https://www.linkedin.com/in/mohamed-zaki-55983b287/" target="_blank"><span className="icon icon-linkedin-square"></span></a>
        </div>
      </div>
      <div className="right-section animation">animation</div>
    </section>
  )
}
