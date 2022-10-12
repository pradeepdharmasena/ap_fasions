import React, { Component } from "react";
import { HomePage } from "./Pages/HomePage/HomePage";
class App extends Component {
  constructor(){
    super();
    this.state = {
      directory : [
        {
          "catogory" : "Hats",
          "image": "https://wombatleather.co.uk/wp-content/uploads/2014/10/wombat-original-copy-2-750x750.jpg",
          "id":1
        },
        {
          "catogory" : "Jackets",
          "image": "https://i8.amplience.net/t/jpl/jdie_product_list?plu=jd_555982_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto",
          "id":2
        },
        {
          "catogory" : "Sneakers",
          "image": "https://nypost.com/wp-content/uploads/sites/2/2021/02/1024x1024-Women-LowTop-Lavendar-1_1024x1024.jpeg?quality=90&strip=all&w=1024",
          "id":3
        },
        {
          "catogory" : "Womens",
          "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.standard.co.uk%2Fshopping%2Fesbest%2Ffashion%2Fbest-womens-clothing-a4208901.html&psig=AOvVaw25gO5EpP39E85H6sDzABib&ust=1665598988199000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLiv_fHl2PoCFQAAAAAdAAAAABAE",
          "id":4
        },
        {
          "catogory" : "Mens",
          "image": "https://ofmediaanddesign.files.wordpress.com/2019/04/0_jyhi-9qin2nhxlaw.jpg?w=720",
          "id":5
        }
      ]
    }
  }
  render() {
    return (
      <div >
        <HomePage directory= {this.state.directory} />
      </div>
    );
  }

}

export default App;
