import React, { Component } from "react";
import { HomePage } from "./Pages/HomePage/HomePage";
import { HatPage } from "./Pages/HatsPage/HatPage";
import { JacketPage } from "./Pages/JacketsPage/JacketPage";
import { SneakersPage } from "./Pages/SneakersPage/SneakersPage";
import { WomensPage } from "./Pages/WomensPage/WomensPage";
import { MensPage } from "./Pages/MensPage/MensPage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { Route, Routes} from "react-router-dom";
import { SignInRegister } from "./Pages/SignInRegisterPage/SignInRegister";


class App extends Component {

  

  constructor() {
    super();
    this.state = {
        directory: [
            {
                "catogory": "Hats",
                "image": "https://wombatleather.co.uk/wp-content/uploads/2014/10/wombat-original-copy-2-750x750.jpg",
                "id": 1,
                "linkUrl":"/hats"
            },
            {
                "catogory": "Jackets",
                "image": "https://i8.amplience.net/t/jpl/jdie_product_list?plu=jd_555982_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto",
                "id": 2,
                "linkUrl":"/jackets"
            },
            {
                "catogory": "Sneakers",
                "image": "https://nypost.com/wp-content/uploads/sites/2/2021/02/1024x1024-Women-LowTop-Lavendar-1_1024x1024.jpeg?quality=90&strip=all&w=1024",
                "id": 3,
                "linkUrl":"/sneakers"
            },
            {
                "catogory": "Womens",
                "image": "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/02/20/12/lfwstreetstyle2002j.jpg?width=1200&auto=webp&quality=75",
                "size": "large",
                "id": 4,
                "linkUrl":"/womens"
            },
            {
                "catogory": "Mens",
                "image": "https://ofmediaanddesign.files.wordpress.com/2019/04/0_jyhi-9qin2nhxlaw.jpg?w=720",
                "size": "large",
                "id": 5,
                "linkUrl":"/mens"
            }
        ]
    }
}

  render() {
    return (
      <div >
        <NavigationBar/>
        <Routes>
          <Route exact path = "/" element = {<HomePage directory = {this.state.directory}/>}/>
          <Route exact path = "/hats" element = {<HatPage/>}/>
          <Route exact path = "/jackets" element = {<JacketPage/>}/>
          <Route exact path = "/sneakers" element = {<SneakersPage/>}/>
          <Route exact path = "/mens" element = {<MensPage/>}/>
          <Route exact path = "/womens" element = {<WomensPage/>}/>
          <Route exact path = "/shop" element = {<ShopPage/>}/>
          <Route exact path = "/shop" element = {<ShopPage/>}/>
          <Route exact path = "/signin" element = {<SignInRegister/>}/>
          <Route exact path = "/register" element = {<SignInRegister/>}/>
        </Routes>
      </div>
    );
  }

}

export default App;
