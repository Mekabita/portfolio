import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2 className="title">ABOUT ME</h2>
        <img src={this.props.userInfo.avatar_url} alt="" />
        <p>
          An enthusiastic learner, always eager to learn about new technologies.
          I am good at problem solving and highly motivated to perform the job
          assigned to me. I am a good team player and easy to go person. I am an
          energetic person always ready to give my best. Programming is fun to
          do and I think I am good as a person and better as a programmer
        </p>
        <h2 className="title">Skills</h2>
        <ol>
          <li>Laravel</li>
          <li>Codeignitor</li>
          <li>Core PHP</li>
          <li>JavaScrript</li>
          <li>jQuery</li>
          <li>reactjs</li>
        </ol>
      </div>
    );
  }
}

export default About;
