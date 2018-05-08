import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


const LandingPage = () =>
  <div className="page landing">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <h1>This is a landing page</h1>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;

export default LandingPage;