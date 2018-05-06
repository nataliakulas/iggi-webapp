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

   activateGrains = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: true,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: false
  });

    activateDiary = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: true,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: false
  });

    activateSpices = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: false,
    activeSpices: true,
    activeDrinks: false,
    activeAlcohol: false
  });

    activateDrinks = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: true,
    activeAlcohol: false
  });

    activateAlcohol = () => this.setState({
    activeAll: false,
    activeFruits: false,
    activeVegetables: false,
    activeGrains: false,
    activeDiary: false,
    activeSpices: false,
    activeDrinks: false,
    activeAlcohol: true
  });


  componentDidMount() {
    db.getProducts().then(snap => {
        const products = [];
        
          snap.forEach(item => {
          let product = item.val();
          product.name = item.key;

          products.push(product)
        });     

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
                    <li onClick={this.activateGrains} className = {`${this.state.activeGrains ? "active" : ""}`}>Grains</li>
                    <li onClick={this.activateDiary} className = {`${this.state.activeDiary ? "active" : ""}`}>Diary</li>
                    <li onClick={this.activateSpices} className = {`${this.state.activeSpices ? "active" : ""}`}>Spices</li>
                    <li onClick={this.activateDrinks} className = {`${this.state.activeDrinks ? "active" : ""}`}>Drinks</li>
                    <li onClick={this.activateAlcohol} className = {`${this.state.activeAlcohol ? "active" : ""}`}>Alcohol</li>        
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

                    {this.state.activeVegetables && this.state.products.map(product => {
                    if (product.group === 'vegetables') {
                      return (
                        <div className="name">{product.name}</div>
                      )
                    }
                  })}

                    {this.state.activeGrains && this.state.products.map(product => {
                      if (product.group === 'grains'){
                        return(
                          <div className="name">{product.name}</div>
                          ) 
                         }
                      })}

                    {this.state.activeDiary && this.state.products.map(product => {
                      if (product.group === 'diary'){
                        return (
                          <div className="name">{product.name}</div>
                          )
                      }
                    })}

                    {this.state.activeSpices && this.state.products.map(product => {
                      if (product.group === 'spices'){
                        return (
                          <div className="name">{product.name}</div>
                          )
                      }
                    })}
                      {this.state.activeAlcohol && this.state.products.map(product => {
                      if (product.group === 'alcohol'){
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