import React from 'react';

import {db} from '../firebase/index';

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Profile/>
    </div>
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

  componentWillMount() {
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
      <div>
        {this.state.hasProducts ?
          <div>
            {this.state.products.map(product => {
              return (
                <ul>
                  <li>{product.name}</li>
                  <li>{product.gi}</li>
                </ul>
              )
            })
            }
          </div>
          : null}
      </div>
    )
  }
}

export default ProfilePage