import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {getProductsThunk, setActiveMenuList} from '../../actions';
import {propByKey} from '../../helpers';

import Checkbox from '../../components/Checkbox';


const mapStateToProps = state => ({
  products: state.productsState.products
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProductsThunk())
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
                {group.map((item, i) => {
                  i++;
                  return <Checkbox key={i} name={item} type="slider"
                                   onClick={e => this.setState(propByKey(e.target.value, !this.state[e.target.value]))}/>;
                })}
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