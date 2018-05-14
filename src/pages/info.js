import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Info extends React.Component {
  render() {
    return (
      <div className="background info">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Info;