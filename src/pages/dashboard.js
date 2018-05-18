import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {getProductsThunk} from '../state/actions';

import {authCondition} from '../shared/helpers';
import withAuthorization from '../shared/withAuthorization';


const mapStateToProps = state => ({
  products: state.productsState.products
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProductsThunk()),
});

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onGetProducts();
  }

  componentWillUnmount() {
    this.props.onGetProducts(null)
  }

  render() {
    return (
      <div className="background dashboard">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Produkty</h2>
                </div>
                <div className="card-body center">
                  <table>
                    <thead>
                    <tr>
                      <th style={{width: 150}}>Name</th>
                      <th style={{width: 45}}>IG</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.products.map((product, i) => {
                      return (
                        <tr key={i}>
                          <td style={{width: 150}}>{product.name}</td>
                          <td style={{width: 45}}>{product.gi}</td>
                        </tr>
                      )
                    })}</tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default compose(
  withAuthorization(authCondition),
  connect(null, mapDispatchToProps),
  connect(mapStateToProps)
)(Dashboard);