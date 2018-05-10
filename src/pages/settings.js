import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Settings extends React.Component {
  render() {
    return (
      <div className="background settings">
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

export default Settings;