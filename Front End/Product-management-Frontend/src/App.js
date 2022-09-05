import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";
import ProductList from './components/ProductList';
import ImageUploader from "./components/ImageUploader";
import Nav from './Nav/Nav';
import Create from './CreateProduct/Create';
import Update from './UpdateProduct/Update';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
// Bootstrap CSS

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Nav />
                <Switch>
                    <Route path="/" exact>
                        <ProductList />
                    </Route>
                    <Route path="/create" exact>
                        <Create />
                    </Route>
                    <Route path="/product/:id">
                        <Update />
                    </Route>


                </Switch>
                {/* <ImageUploader/> */}

            </Provider>
        </BrowserRouter>

    );
}

export default App;
