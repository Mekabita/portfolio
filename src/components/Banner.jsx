import React, { Component } from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="profile">
          <img className="image" src={this.props.userInfo.avatar_url} />
        </div>
        <div className="info">
          <h5 className="infoLeft">Hello,</h5>
          <h2>I'M {this.props.userInfo.name}!</h2>
          <h5 className="bioLeft">{this.props.userInfo.bio}</h5>
        </div>
      </div>
    );
  }
}

export default Banner;
