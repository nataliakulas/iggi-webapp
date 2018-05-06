import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import {db} from '../../firebase/index';
import Group from '../../constants/group';

import {propByKey} from '../../helpers';

import Checkbox from '../../components/Checkbox';

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasProducts: false,
      products: null,
      activeAll: true,
      activeFruits: false,
      activeVegetables: false,
      activeGrains: false,
      activeDiary: false,
      activeSpices: false,
      activeDrinks: false,
      activeAlcohol: false
    };
  }

  activateAll = () => this.setState({
    activeAll: true,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: false
  });

  activateFruits = () => this.setState({
    activeAll: false,
    activeFruits: true,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: false
  });

  activateVegetables = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: true,
    activeGrains: false,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: false
  });


  componentDidMount() {
    db.getProducts().then(snap => {
        const products = [];

        snap.forEach(item => {
          let product = item.val();
          product.name = item.key;

          products.push(product)
        });
        console.log(products);

        if (products.length > 0) {
          this.setState(() => ({hasProducts: true, products: products}))
        }
      }
    );
  }

  render() {
    return (
      <div className="page step-2">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              {this.state.hasProducts ?
                <div className="card">
                  <ul className="card-menu">
                    <li onClick={this.activateAll} className={`${this.state.activeAll ? "active" : ""}`}>All</li>
                    <li onClick={this.activateFruits} className={`${this.state.activeFruits ? "active" : ""}`}>Fruits</li>
                    <li onClick={this.activateVegetables} className={`${this.state.activeVegetables ? "active" : ""}`}>Vegetables</li>
                    <li>Grains</li>
                    <li>Diary</li>
                    <li>Spices</li>
                    <li>Drinks</li>
                    <li>Alcohol</li>
                  </ul>

                  {this.state.activeAll && this.state.products.map(product => {
                    return (
                      <div className="name">{product.name}</div>
                    )
                  })}

                  {this.state.activeFruits && this.state.products.map(product => {
                    if (product.group === 'fruits') {
                      return (
                        <div className="name">{product.name}</div>
                      )
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


export default connect()(Step2)