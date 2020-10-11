import React, { Component } from "react";
import { Jumbotron, } from "reactstrap";
import  ReactDOM  from  'react-dom';
import {SocialMediaIconsReact} from 'social-media-icons-react';

ReactDOM.render(<SocialMediaIconsReact icon="twitter" url="https://twitter.com/your-twitter-handle"/>,	document.getElementById('root'));


export default class Navi extends Component {
  render() {
    return (
      <div>
        <Jumbotron width="800px" height="100px" > 
          <h1  className="companyname">
            <b> TÜRKYILMAZ</b> Ticaret ve Hizmetler A.Ş{" "}
          </h1>
          <div class="socialmedia">
          <SocialMediaIconsReact right borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="20%" url="https://some-website.com/my-social-media-url" size="30" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="20%" url="https://some-website.com/my-social-media-url" size="30" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="20%" url="https://some-website.com/my-social-media-url" size="30" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="20%" url="https://some-website.com/my-social-media-url" size="30" />
             </div>
          
          <hr className="my-3" />
          <p>2.el araç almak isteyenlerin en güvenilir adresi</p>

          </Jumbotron>
      </div>
    );
  }
}
