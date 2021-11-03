import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
        var project = this.props.data.project;var github = this.props.data.github;
        var name = this.props.data.name;
        var description= this.props.data.description;
        var city= this.props.data.address.city;
        var networks= this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className} /></a></li>
      })
    }

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         {/* <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                  data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                  aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars" />
          </button>*/}
          <a className="mobile-btn"  href="#hide-nav-wrap" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
             <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
                {networks}
              {/* <a href={project} className="button btn project-btn"><i className="fa fa-book" />Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github" />Github</a>*/}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
      </p>

   </header>
    );
  }
}

export default Header;