import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import withAuthorization from './withAuthorization';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page home">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                <h1>Home</h1>
                <p>The Home Page is accessible by every signed in user.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);