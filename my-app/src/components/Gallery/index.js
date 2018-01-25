import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
import '../../App.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.changeSrc = this.changeSrc.bind(this);

    this.state = {
      modalImageSrc: "/images/003/logo-lg@3x.png"
    };
  }

  changeSrc(source) {
      this.setState({ modalImageSrc: source });
  }

  render() {
    return (
      <Row>
          <Col md={3} className="customCol21">
            <Image src="/images/003/logo-thmb@3x.png" className="full galleryThumb" onClick={() => this.changeSrc('/images/003/logo-lg@3x.png')} />
            <Image src="/images/003/t-shirt-thmb@3x.png" className="full galleryThumb" onClick={() => this.changeSrc('/images/004/shirt-lg@3x.png')} />
            <Image src="/images/003/bc-thmb@3x.png" className="full galleryThumb" onClick={() => this.changeSrc('/images/005/bc-lg@3x.png')} />
            <Image src="/images/003/social-media@3x.png" className="full galleryThumb" onClick={() => this.changeSrc('/images/006/sm-lg@3x.png')} />
          </Col>
          <Col md={9} className="noPad">
              <div className="current full">
                  <Image src={this.state.modalImageSrc} className="full" />
                  <div className="modalContent">
                    <h2 className="modalH2">The Number 1 Free Logo Maker</h2>
                    <p>His father was a sheriff in Bucks County and his mother worked as a secretary in the office of the small township where they lived.</p>
                    <p><a href="http://logojoy.com">www.logojoy.com</a></p>
                  </div>
              </div>
          </Col>
      </Row>
    );
  }
}

export default Gallery;
