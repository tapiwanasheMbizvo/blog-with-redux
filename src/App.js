import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Landing from "./views";
import Categories from "./views/categories";
import Posts from "./views/posts";
import Topics from "./views/topics";
import store from "./Store";
import BlogNav from "./components/navbar";


class App extends  React.Component{
render(){
    return (

        <Provider store = {store}>
            <BrowserRouter>
                <BlogNav/>

                <Switch>
                    <Route
                        path={"/"}
                        exact
                        render={props => <Landing{...props}/>}
                    />
                    <Route

                        path={"/posts"}
                        exact
                        render={props => <Posts {...props}/>}

                    />

                    <Route
                        path={"/topics"}
                        exact
                        render={props => <Topics {...props}/>}
                    />

                    <Route
                        path={"/categories"}
                        exact
                        render={props => <Categories {...props}/>}
                    />

                </Switch>

            </BrowserRouter>
        </Provider>

    );

  }
}

export default App;
