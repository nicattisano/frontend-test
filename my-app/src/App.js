import React, { Component } from 'react';
import {Row, Grid, Col, Modal, Button, Image} from 'react-bootstrap';
import SocialSharing from './components/SocialSharing';
import Gallery from './components/Gallery';
import Heading from './components/PageHeader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
      showModal: false
    };
	}

	handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
	}

  render() {

    return (
        <div>
          <Heading />
          <Grid>
              <Row className="show-grid">
                  <Col md={4}>
                      <button className="modalClickBtn" onClick ={this.handleShow}>
  					               <Image src="/images/003/logo-lg@3x.png" className="full" />
                          <div className="overlayShare">
                              <Button className="shareBtn">Share</Button>
                          </div>
  				            </button>

                    <Modal show={this.state.showModal} onHide={this.handleClose}>
            					<Modal.Header>
                          <button className="closeX" onClick={this.handleClose}>
                              <Image src="/images/003/close@3x.png" />
                          </button>
                          <Row>
                            <Col md={12}>
                              <SocialSharing />
                            </Col>
                          </Row>
            					</Modal.Header>
            					<Modal.Body>
                        <Gallery />
            					</Modal.Body>
                    </Modal>
                  </Col>
              </Row>
          </Grid>
        </div>
    );
  }
}

export default App;
