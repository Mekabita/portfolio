import { render } from "@testing-library/react";
import React, { Component } from "react";

class Repos extends React.Component {
  render() {
    return (
      <div className="repobox">
        {this.props.repoInfo.map((repo) => (
          <div key={repo.id} className="repo">
            <h5>{repo.name}</h5>
            <p>{repo.description}</p>
            <br />
            <br />
            <button className="btnn">
              <a href={repo.html_url}>Code</a>
            </button>
            {repo.homepage ? (
              <button className="btnn">
                <a target="_blank" href={repo.homepage}>
                  Demo
                </a>
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Repos;
