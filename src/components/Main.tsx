import React from "react";
import profile from '../assets/images/profile.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div> */}
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jiupaladin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/romanh/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Roman Haffarov</h1>
          <p>Senior Back-End Engineer & ERP/CRM/Odoo Expert</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jiupaladin" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/romanh/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;