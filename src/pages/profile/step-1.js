import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import Group from '../../constants/group';

import {propByKey} from '../../helpers';

import Checkbox from '../../components/Checkbox';

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'owoce': false,
      'warzywa': false,
      'kasze': false,
      'zboża': false,
      'nasiona': false,
      'orzechy': false,
      'przyprawy': false,
      'mleko': false,
      'nabiał': false,
      'jaja': false,
      'bez glutenu': false,
      'napoje': false,
      'alkohol': false,
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="page step-1">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                {Group.map((product, i = 0) => {
                  i++;
                  return <Checkbox index={i} name={product} type="slider"
                                   onClick={e => this.setState(propByKey(e.target.value, !this.state[e.target.value]))}/>
                    ;
                })}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connect()(Step1)