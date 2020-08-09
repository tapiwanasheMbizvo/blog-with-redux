import React from 'react';
import {Provider} from 'react-redux';
import store from "./Store";
import Categories from './components/categories'
import CategoryForm from "./components/categoryForm";

class App extends  React.Component{
render(){
    return (

        <Provider store = {store}>

            <div className={"App"}>
                <h1>Welcome  to Blog</h1>
              <hr/>
            <Categories/>
                <hr/>
                <CategoryForm/>
            </div>
        </Provider>

    );

  }
}

export default App;
