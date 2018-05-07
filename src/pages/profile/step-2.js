import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {setActiveMenuList, getProductsThunk} from '../../actions';

import Group from '../../constants/group';

import Checkbox from '../../components/Checkbox';


const mapStateToProps = state => ({
  menuList: state.menuListState.menuList,
  products: state.productsState.products
});

const mapDispatchToProps = dispatch => ({
  onSetActiveMenuList: (menuList) => dispatch(setActiveMenuList(menuList)),
  onGetProducts: () => dispatch(getProductsThunk())
});

class Step2 extends React.Component {
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
    console.log(this.props)
    return (
      <div className="page step-2">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              {this.state.hasProducts ?
                <div className="card">
                  <ul className="card-menu">
                    {Group.map((product, i) => {
                      i++;
                      return (
                        <li key={i} className={`${this.props.menuList === product ? "active" : ""}`} onClick={() => this.props.onSetActiveMenuList(product)}>{product}</li>
                      )
                    })}
                  </ul>

                  {this.props.menuList && this.props.products.map((product, i) => {
                    if (product.group === this.props.menuList) {
                      return <Checkbox key={i} name={product.name}/>
                    } else {
                      return <div key={i}/>
                    }
                  })}
                </div>
                : null}
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
)(Step2)