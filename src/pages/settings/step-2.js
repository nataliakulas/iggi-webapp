import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import * as routes from '../../shared/routes';

import {setActiveMenuItem, getProductsThunk} from '../../state/actions';

import {ProductsForm} from '../../components/Forms';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const mapStateToProps = state => ({
  menuItem: state.menuItemState.menuItem,
  products: state.productsState.products,
  userProducts: state.form.userProducts
});

const mapDispatchToProps = dispatch => ({
  onSetActiveMenuItem: (item) => dispatch(setActiveMenuItem(item)),
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

  componentWillUnmount() {
    this.props.onGetProducts(null)
  }

  saveUserProducts = () => {
    let userProducts = Object.keys(this.props.userProducts.values);
    console.log(userProducts)
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
      <div className="background step-2">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              {this.state.hasProducts ?
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">Ustawienia</h2>
                    <h3 className="card-subtitle">Wybierz produkty</h3>
                  </div>
                  <ul className="card-menu">
                    {group.map((item, i) => {
                      i++;
                      return <li key={i} className={`${this.props.menuItem === item ? "active" : ""}`}
                                 onClick={() => this.props.onSetActiveMenuItem(item)}>{item}</li>
                    })}
                  </ul>
                  <ProductsForm className="card-body">
                    {this.props.menuItem && this.props.products.map((product, i) => {
                      if (product.group === this.props.menuItem) {
                        return <Checkbox key={i} name={product.name}/>
                      } else {
                        return <div key={i}/>
                      }
                    })}
                  </ProductsForm>
                  <div className="card-footer">
                    <Button type="button" onClick={this.saveUserProducts}>Submit</Button>
                  </div>
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
  connect(mapStateToProps),
  withRouter
)(Step2)