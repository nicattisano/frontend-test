import React, { Component } from 'react';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import '../../App.css';

class SocialSharing extends Component {

  render() {

    const {
      FacebookShareButton,
      TwitterShareButton,
      GooglePlusShareButton,
      EmailShareButton,
    } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const GooglePlusIcon = generateShareIcon('google');
    const EmailIcon = generateShareIcon('email');

    const thisUrl = window.location.href;

    return (
      <div className="socialWrap">
        <p className="shareP">Share:</p>
        <div className="sm">
          <TwitterShareButton url={thisUrl} children="">
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div className="sm">
          <FacebookShareButton url={thisUrl} children="">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div className="sm">
          <GooglePlusShareButton url={thisUrl} children="">
            <GooglePlusIcon size={32} round={true} />
          </GooglePlusShareButton>
        </div>
        <div className="sm">
          <EmailShareButton url={thisUrl} children="" subject="Check out my new logo from LogoJoy!" >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default SocialSharing;
