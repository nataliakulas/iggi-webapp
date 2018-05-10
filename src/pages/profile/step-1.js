import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {compose} from 'recompose';
import {connect} from 'react-redux';

import {getProductsThunk} from '../../actions';

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

  saveUserGroups = () => {
    let userGroups = Object.keys(this.props.userGroups.values);
    console.log(userGroups)
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
                <GroupsForm>
                  {group.map((item, i) => {
                    i++;
                    return <Checkbox key={i} type="slider" name={item}/>
                  })}
                </GroupsForm>
                <Button type="button" onClick={this.saveUserGroups}>Submit</Button>
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