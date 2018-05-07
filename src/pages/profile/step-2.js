import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {db} from '../../firebase/index';

import {setActiveList} from '../../actions';

import Group from '../../constants/group';

import {propByKey} from '../../helpers';
import Checkbox from '../../components/Checkbox';


const mapStateToProps = state => ({
  list: state.listState.list
});

const mapDispatchToProps = dispatch => ({
  onSetActiveList: (list) => dispatch(setActiveList(list))
});

class Step2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasProducts: false,
      products: null
    };
  }

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
                    {Group.map((product, i) => {
                      i++;
                      return (
                        <li key={i} className={`${this.props.list === product ? "active" : ""}`} onClick={() => this.props.onSetActiveList(product)}>{product}</li>
                      )
                    })}
                  </ul>

                  {this.props.list && this.state.products.map(product => {
                    if (product.group === this.props.list) {
                      return <div className="name">{product.name}</div>
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