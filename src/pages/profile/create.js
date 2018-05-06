import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'

import {db} from '../../firebase/index';
import Group from '../../constants/group';

import {propByKey} from '../../helpers';

import Checkbox from '../../components/Checkbox';

const ProfilePage = () => {
  return (
    <Step1/>
    // <Step2/>
  )
};


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
    console.log(this.state);
    return (
      <div className="page step-1">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                {Group.map((product, i = 0) => {
                  i++;
                  return (
                    <Checkbox index={i} name={product}
                              onClick={e => this.setState(propByKey(e.target.value, !this.state[e.target.value]))}/>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


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


export default ProfilePage