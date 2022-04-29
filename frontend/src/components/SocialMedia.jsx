import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://twitter.com/JanakaP65325099"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsTwitter />
      </div>
    </a>
    <a
      href="https://www.facebook.com/jcscorpio"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a
      href="https://www.instagram.com/jc.perera"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://github.com/JcPerera" target="_blank" rel="noreferrer">
      <div>
        <BsGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
