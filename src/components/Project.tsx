import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://avrora.ua/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://avrora.ua/" target="_blank" rel="noreferrer"><h2>«Аврора Мультимаркет»</h2></a>
                <p>This is the first project I led as a senior developer since joining the company.</p>
                <p>What I focused in this project, as a back-end engineer, was to establish a data structure and construct a system framework that can effectively process real-time data which is suitable for such a large and top-rated retail chain. CS Cart, Vue.js were used as the core frameworks.</p>
            </div>
            <div className="project">
                <a href="https://epicentrk.ua" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://epicentrk.ua" target="_blank" rel="noreferrer"><h2>Epicentr K's online website</h2></a>
                <p>Adventure, it was..</p>
                <p>In order to build a system and make the user interface more splendid, we held meetings every day and as a result, finally, we were able to create the framework for a new system based on CMS(1C-Bitrix) and Vue.js.</p>
            </div>
            <div className="project">
                <a href="https://my.clevelandclinic.org/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://my.clevelandclinic.org/" target="_blank" rel="noreferrer"><h2>online website of the Cleveland Clinic</h2></a>
                <p>I was a backend engineer & database optimizer during this project.</p>
                <p>During the period of the COVID-19 outbreak, this website fully demonstrated its performance and provided great help to many people.
                I am proud to have participated in this project.</p>
            </div>
            <div className="project">
                <a href="https://www.getsafe.com/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.getsafe.com/" target="_blank" rel="noreferrer"><h2>GetSafe online presence</h2></a>
                <p> ...Communication between SOS terminals and the server, which requires the real-time performance needs a deep knowledge about the server OS.</p>
                <p>The basic system was configured using WordPress, and communication with the terminals was scripted by PHP Script.It was a good experience in writing a PHP-based communication programming.
                </p>
            </div>
            <div className="project">
                <a href="https://uaefoodservice.transmed.com/" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://uaefoodservice.transmed.com/" target="_blank" rel="noreferrer"><h2>online website of the Transmed Overseas Inc.</h2></a>
                <p>My first project using Odoo.</p>
                <p>Wow. Odoo is amazing.
                    Why can't we choose Odoo as the most famous ERP package in the world?
                    In the process of introducing and developing Odoo modules, I have come to deeply understand its basic ideas, expandability, and modularity.</p>
            </div>
            <div className="project">
                <a href="https://shop.itea.co.nz/" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://shop.itea.co.nz/" target="_blank" rel="noreferrer"><h2>ITEA Trade Ltd online presence</h2></a>
                <p>Odoo and Backdrop were used as a CMS framework.</p>
                <p>During the project development, I specialized in introduction and development of Odoo, and leveled-up my skills in background engineering using PHP & Python & PostgreSQL.</p>
            </div>
            <div className="project">
                <a href="https://dermapen.com/" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://dermapen.com/" target="_blank" rel="noreferrer"><h2>DermapenWorld online presence</h2></a>
                <p>It was most difficult one I've ever done.</p>
                <p>Itegrating old-backend software and latest front-end is somewhat difficult one and I decided to map the back-end system to modern framework WordPress, and I won!</p>
            </div>
            <div className="project">
                <a href="https://blog.ixl.com/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://blog.ixl.com/" target="_blank" rel="noreferrer"><h2>IXL Official Blog website</h2></a>
                <p>WordPress and PHP7.4 was used in this project.</p>
                <p>Many RDBMS, such as MySQL is very useful, and efficient for building systems like Blog websites, but I noticed when I use MySQL in the online website development, it has some problems. But I solved that, and Bingo!</p>
            </div>
            <div className="project">
                <a href="https://hextom.com/" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hextom.com/" target="_blank" rel="noreferrer"><h2>Hextom E-commerce online presence</h2></a>
                <p>Optimization of database structure and improvement it's performance</p>
                <p>A E-commerce system's high performance is totally depends on the well-built background systems and the structure of DB. I inspected this more carefully, and finally fixed it up..</p>
            </div>
            <div className="project">
                <a href="https://www.santafixie.com/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.santafixie.com/" target="_blank" rel="noreferrer"><h2>Santafixie online presence</h2></a>
                <p>A bicycle manufacturing company using Odoo.</p>
                <p>I took part in this project as a simple freelancer, but my role was still back-end developer. I modified Odoo inventory module in this project and realized it in nearly 1 months.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;