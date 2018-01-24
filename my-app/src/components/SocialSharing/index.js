import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import '../../App.css';

class SocialSharing extends Component {
  constructor(props) {
    super(props);
	}

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

    return (
      <div className="socialWrap">
        <p className="shareP">Share:</p>
        <div className="sm">
          <TwitterShareButton url="www.logojoy.com" children="">
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </div>
        <div className="sm">
          <FacebookShareButton url="www.logojoy.com" children="">
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
        <div className="sm">
          <GooglePlusShareButton url="www.logojoy.com" children="">
            <GooglePlusIcon size={32} round={true} />
          </GooglePlusShareButton>
        </div>
        <div className="sm">
          <EmailShareButton url="www.logojoy.com" children="">
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

export default SocialSharing;
