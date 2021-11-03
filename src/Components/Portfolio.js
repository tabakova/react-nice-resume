import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta text-center">
                    <h5>{projects.title}</h5>
                    <br />
                    <h6>{projects.category}</h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    if (this.props.data) {
      var designProjects = this.props.data.designProjects.map(function (designProjects) {
        var designProjectImage = 'images/portfolio/' + designProjects.image;

        return (
            <div key={designProjects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={designProjects.url} title={designProjects.title} target="_blank">
                  <img alt={designProjects.title} src={designProjectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta text-center">
                      <h5>{designProjects.title}</h5>
                      <br />
                      <h6>{designProjects.category}</h6>
                    </div>
                  </div>
                </a>
              </div>
            </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Some of my Front-End Development works</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns collapsed">

            <h1>Graphic Design Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-thirds cf">
              {designProjects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
