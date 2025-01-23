import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faPhp} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Php",
    "Php 7",
    "Php Script",
    "Laravel",
    "CakePHP",
    "MySQL",
    "PostgreSQL",
    "NoSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux"
];

const labelsThird = [
    "ERP Software Development",
    "CRM",
    "Odoo",
    "Odoo Development",
    "Enterprise Systems Engineering",
    "CRM Development",
    "Streamlit",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>I'm an Expert</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPhp} size="3x"/>
                    <h3>PHP Back-End Engineering</h3>
                    <p>I have built a diverse array of web back-end applications based on PHP Language and modern PHP frameworks such as Laravel, Zend Framework, CakePHP and CodeIgniter. PHP is the first language I spacialized in.. I love it.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ERP/CRM/Odoo Development</h3>
                    <p>Why ERP/CRM?. Just programming is not all of the world, I think. The true face of ERP lies in its ability to save time, effort, and money, while integrating everything into a single page. I'm expert in Odoo and Odoo programming.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                {/* <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default Expertise;