import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';





/*
ReactDOM.render(

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
    </Provider>,
    document.getElementById('root')


);
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
