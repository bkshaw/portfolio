import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Bishal Kr. Shaw</h2>
        <p>
          <a href="mailto:bishalkrshaw1994@gmail.com">bishalkrshaw1994@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Bishal. I am a IIT Guwahati graduate, KGEC alumni, and a software engineer.
        I am currently working as the Lead AI Engineer at
        <a href="https://www.valuence.inc/en/group/technologies/"> Valuence Technologies</a>
        . I am interested in AI, Machine Learning, Data Science, and some Web Development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Bishal Kr. Shaw <Link to="/">bkshaw.github.io</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
