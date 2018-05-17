import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


const LandingPage = () =>
  <div className="background landing">
    <Grid>
      <Row>
        <Col lg={6} lgOffset={3}>
          <div className="card">
            <div className="card-header">
              <h2 className="card-title"><b>I</b>ndeks&nbsp;<b>G</b>likemiczny&nbsp;-&nbsp;<b>G</b>lycemic&nbsp;<b>I</b>ndex</h2>
            </div>
            <div className="card-body">
              Indeks glikemiczny ...
            </div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>;

export default LandingPage;