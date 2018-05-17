import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import {authCondition} from '../shared/helpers';
import withAuthorization from '../shared/withAuthorization';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="background dashboard">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Pulpit</h2>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withAuthorization(authCondition)(Dashboard);