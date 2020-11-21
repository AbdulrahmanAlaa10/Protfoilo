import React, { Component } from 'react';
import './App.css';
import Darkmode from 'darkmode-js';


function App() {

  var options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  new Darkmode().showWidget();

  return (

    <div className="App">


      {/* SIDEBAR */}
      <div className="w3-black">
        <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
          <img src="/images/003c72513e4489c08085a35493d28062.png" width="120" height="85" />
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>ABOUT</p>
          </a>
          <a href="#work" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-eye w3-xxlarge"></i>
            <p>WORK</p>
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
        </nav>

        {/* MY IMAGE AND MY INFORMATION */}
        <div className="w3-padding-large" id="main">
        <header className="w3-container w3-padding-32 w3-center w3-black" id="home">
          <h5 className="w3-jumbo">Abdulrahman Alaa</h5>
          <h2 className="w3-jum">Front-end Developer</h2>
          <img src="/images/2.jpg" alt="boy" className="w3-image w3-circle" width="220" height="200" />
        </header>

        {/* PROFILE */}
        <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
          <h2 className="w3-text-light-grey">Profile</h2>
          <hr className="w3-opacity" />
          <p className="profile">I am a Front-end developer with more than a year of experience implementing programming projects. I am looking foward to work in a multinationational company.  Above you can see my skills and projects I had work on hoping you can consider the possibility of a professional collaboration. I´ll be waiting for your news! I would like to join your team!
          </p>

    {/* SKILLS AND MY ABOUT */}
    <section className="ourskills">
      <div className="container">
      <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
        <div className="row">
        <div className="col-md-6">

          <div className="progress">
          <div className="progress-bar progress-bar-animated progress-bar-striped active" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
          <h4 className="java">HTML/ Html5 </h4>
          </div>
          </div>

          <div className="progress">
            <div className="progress-bar1 progress-bar-animated progress-bar-striped bg-info" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">CSS/ CSS3</h4>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar4 progress-bar-animated progress-bar-striped bg-dark" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              <h4 className="java">React</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar5 progress-bar-animated progress-bar-striped bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">Git & Github</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar3 progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">Javascript</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar6 progress-bar-animated progress-bar-striped bg-dark" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">PugJs</h4>
            </div>
          </div>

    </div>

    <div className="col-md-6 col-md-offset-1">
          <div className="progress">
            <div className="progress-bar2 progress-bar-animated progress-bar-striped bg-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">Bootstrap3 / 4</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar8 progress-bar-animated progress-bar-striped bg-primary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">Redux</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar8 progress-bar-animated progress-bar-striped bg-secondary" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">OOP</h4>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar6 progress-bar-animated progress-bar-striped bg-dark" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">Sass</h4>
            </div>
          </div>
          

          <div className="progress">
            <div className="progress-bar7 progress-bar-animated progress-bar-striped bg-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <h4 className="java">C</h4>
            </div>
          </div>
        </div>
       </div>
     </div>
    </section>


    {/* WORK AND MY PROJECTS */}

    <h2 className="Projects">Projects</h2>

    <section className="gallray" id="work">
        <div className="gall">
          <div className="box">
            <div className="imgBox">
              <img src="/images/126804040_364995024777807_3413763511144015053_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Facebook Clone</h2>
              <p className="ppp">Facebook Clone with Firebase. <br /> Develop with HTML5, CSS3 , BootStrap4, React, Firebase, MATERIAL-UI</p>
              <a href="https://clone-facebook-exi51okvv.vercel.app/login" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>       
          </div>

          <div className="box">
            <div className="imgBox">
            <img src="/images/126513249_128318865492542_7415535031019945764_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Login and Regsiter</h2>
              <p className="ppp">Login Website. <br /> Develop with HTML5, CSS3 , BootStrap4, React, Firebase</p>
              <a href="https://code-kappa.vercel.app/Login" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
            <img src="/images/126804037_1038516469999561_8852452409316177192_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Quiz App</h2>
              <p className="ppp">Quiz About HTML AND JavaScript. <br /> Develop with HTML, CSS , BootStrap4, Javascript, React</p>
              <a href="https://quiz-app-sigma-three.vercel.app/?fbclid=IwAR0x0-R2uZ-fFJ_DoRvTs6xGFWAsZ0K47A6KCDXlhUBTe8e2aCZ-jOTkzO4" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
            
          </div>


        </div>
    </section>

    <section className="gallray">
        <div className="gall">

            
        <div className="box">
            <div className="imgBox">
            <img src="/images/blur-close-up-code-computer-546819.jpg" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">How ??</h2>
              <p className="ppp">How To become Front-end developer. <br /> Develop with HTML5, CSS3 , BootStrap4, React</p>
              <a href="https://abdulrahmanalaa.netlify.app/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
            <img src="/images/assorted-salads-on-bowls-1640773.jpg" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Delivery</h2>
              <p className="ppp">Online Delivery Food. <br /> Develop with HTML5, CSS3 , BootStrap4, React, Redux</p>
              <a href="https://deliveryonline.netlify.app/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>


          <div className="box">
            <div className="imgBox">
            <img src="/images/sliced-vegetable-and-cooked-food-on-white-ceramic-plate-1234535.jpg" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Delicious</h2>
              <p className="ppp">Template design of food. <br /> Develop with HTML5, CSS3 , BootStrap4, css.animtion</p>
              <a href="https://abdalrahmanalaa.github.io/Template1/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>

        </div>
    </section>

    <section className="gallray" id="work">
        <div className="gall">
          <div className="box">
            <div className="imgBox">
              <img src="/images/126786193_198014251784666_5355289081431041580_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Search Movie</h2>
              <p className="ppp">Search Movie with API IMDB. <br /> Develop with HTML5, CSS3 , BootStrap4, React, Redux</p>
              <a href="https://abdulrahmansearchmovie.netlify.app/#/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>       
          </div>

          <div className="box">
            <div className="imgBox">
            <img src="/images/126516722_394503695234006_3118928028898624353_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Design</h2>
              <p className="ppp">It was task for company in America. <br /> Develop with BootStrap4, React</p>
              <a href="https://task2-qaclzxiij.vercel.app/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBox">
            <img src="/images/126867263_378651560118053_8591217303628905586_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Udemy Design</h2>
              <p className="ppp">Design For Courses. <br /> Develop with HTML, CSS , BootStrap4</p>
              <a href="https://udemy-nine.vercel.app/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>

        </div>
    </section>


    <section className="gallray" id="work">
        <div className="gall">
 


          <div className="box">
            <div className="imgBox">
            <img src="/images/126845314_820938145394432_7068137288795235466_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Weather App</h2>
              <p className="ppp">This Website Help you Know weather Today <br /> Develop with HTML5, CSS3 , BootStrap4, JavaScript</p>
              <a href="https://weather-app-blond-eta.vercel.app/" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>

          <div className="box">
            <div className="imgBox">
            <img src="/images/126535964_1103572026763890_6476441568342104594_n.png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">Show My Channel</h2>
              <p className="ppp">Information About Viedos in my Channel. <br /> Develop with HTML, CSS , BootStrap4, Javascript</p>
              <a href="https://abdooalaa22.netlify.app/?fbclid=IwAR2EOBOIe8TLfbXVP7mTfm10UuRlGTXWbrjYu2Ebd-A5bPjYy7u5IWFZItE" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
            
          </div>


          <div className="box">
            <div className="imgBox">
            <img src="/images/126925606_886971462046654_4828729268650245404_n (1).png" />
            </div>
            <div className="details">
            <div className="content">
              <h2 className="hhh">IPTV</h2>
              <p className="ppp">Website with Client Working Freelancer. <br /> Develop with HTML5, CSS3 , BootStrap4, React, Redux</p>
              <a href="https://iptv22-icg19fphf.vercel.app/Home" target="_blank"><button type="button" className="btnnnn btn btn-danger">Live</button></a>
            </div>
            </div>
          </div>


        </div>
    </section>



  {/* CONTACT ME */}
  <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
    <h2 className="w3-text-light-grey">Contact Me</h2>
    <hr className="w3-opacity" />

    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Cairo Egypt</p>
      <p><i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Phone: 0201008698567</p>
      <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i>Mail: Abdulrahmaanalaa1999@gmail.com</p>
    </div>
  </div>


  {/* FOOTER */}

<footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
  <h4 className="follow">Find me</h4>
  <a className="w3-buttonn w3-large w3-teal" href="https://www.facebook.com/profile.php?id=100010144689198" target="_blank"  title="Facebook"><i className="fa fa-facebook"></i></a>
  <a className="w3-buttonn w3-large w3-teal" href="https://github.com/AbdulrahmanAlaa10" target="_blank"  title="github"><i className="fa fa-github"></i></a>
  <a className="w3-buttonn w3-large w3-teal" href="https://www.youtube.com/channel/UCmTbs3eMgZ2XzCRoNLzKGwA?view_as=subscriber" target="_blank" title="youtube"><i className="fa fa-youtube"></i></a>
  <a className="w3-buttonn w3-large w3-teal" href="https://www.instagram.com/abdulrahman_alaa10/" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a>
  <a className="w3-buttonn w3-large w3-teal w3-hide-small" href="https://www.linkedin.com/in/abdulrahman-alaa-2b88611a5/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></a>
  <p className="w3-medium">Find me <a href="https://github.com/AbdulrahmanAlaa10" target="_blank" className="w3-hover-text-green">Abdulrahman Alaa</a></p>
</footer>

</div>
</div>
</div>
</div>
  );

}
export default App;
