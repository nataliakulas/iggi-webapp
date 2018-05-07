import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {getProductsThunk, setUserGroups} from '../../actions';

import {GroupsForm} from '../../components/Forms';
import Checkbox from '../../components/Checkbox';

const mapStateToProps = state => ({
  products: state.productsState.products
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProductsThunk()),
  onSetUserGroups: (userGroups) => dispatch(setUserGroups(userGroups))
});

class Step1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasProducts: this.props.products,
    };
  }

  componentDidMount() {
    this.props.onGetProducts();
  }

  onSubmit = userGroups => {
    this.props.onSetUserGroups(userGroups)
  };

  render() {
    const group = [];
    if (this.state.hasProducts) {
      this.props.products.forEach((product) => {
        if (group.indexOf(product.group) < 0) {
          group.push(product.group)
        }
      });
    }

    return (
      <div className="page step-1">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                <GroupsForm onSubmit={this.onSubmit}>
                  {group.map((item, i) => {
                    i++;
                    return <Checkbox key={i} type="slider" name={item}/>
                  })}
                  <button type="submit">Submit</button>
                </GroupsForm>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  connect(mapStateToProps)
)(Step1)