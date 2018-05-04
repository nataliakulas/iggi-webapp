import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap'

import {db} from '../firebase/index';

const ProfilePage = () => {
  return (
    <Profile/>
  )
};

class Profile extends React.Component {
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
        console.log(products);

        if (products.length > 0) {
          this.setState(() => ({hasProducts: true, products: products}))
        }
      }
    );
  }

  render() {
    return (
      <div className="page profile">
        <Grid>
          <Row>
            <Col lg={8} lgOffset={2}>
              {this.state.hasProducts ?
                <Panel>
                  {this.state.products.map(product => {
                    return (
                      <ul>
                        <li>{product.name}</li>
                        <li>- {product.gi}</li>
                      </ul>
                    )
                  })
                  }
                </Panel>
                : null}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ProfilePage