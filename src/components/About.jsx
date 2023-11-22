// About.js
import { FiUsers } from 'react-icons/fi';
import React from 'react';
import aboutImage from '../assets/img/aboutImage.png';
import aboutImage2 from '../assets/img/aboutImage3.png';

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>About YumHealth</h5>
      <h2>Nourishing Lives, One Recipe at a Time</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Our Story: Where Flavor Meets Nutrition</h5>
              <p>
                Our journey began with a shared dream — a dream to make
                nutritious eating not only accessible but also enjoyable.
                YumHealth was born out of the desire to inspire and empower
                individuals like you to embrace a balanced and delicious
                approach to food.
              </p>
            </article>
            <article className="about__card">
              <h5>What Drives Us</h5>
              <p>
                We're driven by the belief that healthy living doesn't mean
                compromising on taste. It's about savoring every bite, nurturing
                your body, and sharing the culinary love. YumHealth is your
                partner in this adventure.
              </p>
            </article>
            <article className="about__card">
              <h5>Our Mission:</h5>
              <p>
                Our mission is simple yet profound: to unite food lovers and
                wellness seekers in a space that's as vibrant as your culinary
                creations. Whether you're a seasoned chef or a novice in the
                kitchen, YumHealth is your canvas to share, explore, and savor.
              </p>
            </article>
            <article className="about__card">
              <h5>Join Our Community:</h5>
              <p>
                YumHealth isn't just a platform; it's a community of food
                enthusiasts, nutrition experts, and home cooks who share a
                common love for great food and better living. Together, we're
                creating a world where taste and health walk hand in hand. Thank
                you for being a part of our flavorful journey. Let's cook,
                learn, and grow together. Welcome to YumHealth.
              </p>
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImage} alt="me" />
          </div>
          <div className="about__me-image">
            <img src={aboutImage2} alt="me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
