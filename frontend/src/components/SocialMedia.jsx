import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter onClick={()=> window.open("https://twitter.com/JanakaP65325099", '_blank')}/>
    </div>
    <div>
      <FaFacebookF onClick={()=> window.open("https://www.facebook.com/jcscorpio", '_blank')}/>
    </div>
    <div>
      <BsInstagram onClick={()=> window.open("https://www.instagram.com/jc.perera", '_blank')}/>
    </div>
    <div>
      <BsGithub onClick={()=> window.open("https://github.com/JcPerera", '_blank')}/>
    </div>
  </div>
);

export default SocialMedia;
