import React, { Component } from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import '../../App.css';

class Heading extends Component {
  constructor(props) {
    super(props);
	}

  render() {

    return (
      <Grid>
          <Row className="show-grid">
              <Col md={12}>
                <PageHeader>
                  Front End Test<br/><span className="small">by Nicole Tseronakis</span>
               </PageHeader>
              </Col>
          </Row>
      </Grid>
    );
  }
}

export default Heading;
