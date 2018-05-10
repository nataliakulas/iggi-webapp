import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {setActiveMenuList, getProductsThunk} from '../../actions';

import {ProductsForm} from '../../components/Forms';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const mapStateToProps = state => ({
  menuItem: state.menuListState.menuItem,
  products: state.productsState.products,
  userProducts: state.form.userProducts
});

const mapDispatchToProps = dispatch => ({
  onSetActiveMenuList: (item) => dispatch(setActiveMenuList(item)),
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
                  <ul className="card-menu">
                    {group.map((item, i) => {
                      i++;
                      return <li key={i} className={`${this.props.menuItem === item ? "active" : ""}`}
                                 onClick={() => this.props.onSetActiveMenuList(item)}>{item}</li>
                    })}
                  </ul>
                  <ProductsForm>
                    {this.props.menuItem && this.props.products.map((product, i) => {
                      if (product.group === this.props.menuItem) {
                        return <Checkbox key={i} name={product.name}/>
                      } else {
                        return <div key={i}/>
                      }
                    })}
                  </ProductsForm>
                  <Button type="button" onClick={this.saveUserProducts}>Submit</Button>
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