import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import * as routes from '../../shared/routes';

import {getProductsThunk} from '../../state/actions';

import {GroupsForm} from '../../components/Forms';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const mapStateToProps = state => ({
  products: state.productsState.products,
  userGroups: state.form.userGroups
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProductsThunk()),
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

  componentWillUnmount() {
    this.props.onGetProducts(null)
  }

  saveUserGroups = () => {
    let userGroups = Object.keys(this.props.userGroups.values);
    console.log(userGroups)
    this.props.history.push(routes.STEP_2)
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
      <div className="background step-1">
        <Grid>
          <Row>
            <Col lg={6} lgOffset={3}>
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Ustawienia</h2>
                  <h3 className="card-subtitle">Wybierz grupy produktów</h3>
                </div>
                <GroupsForm className="card-body">
                  {group.map((item, i) => {
                    i++;
                    return <Checkbox key={i} type="slider" name={item}/>
                  })}
                </GroupsForm>
                <div className="card-footer">
                  <Button type="button" onClick={this.saveUserGroups}>Submit</Button>
                </div>
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
  connect(mapStateToProps),
  withRouter
)(Step1)