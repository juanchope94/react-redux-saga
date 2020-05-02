import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Productos from './productos';



class auxiliar extends Component {
    
    render() {
        return (
            <div>
                <Link to={{
                    pathname: `/productos`
                }} >
                    <h1>Consultar productos</h1>
                </Link>
                <Switch>

                    <Route path="/productos" component={Productos} />
                </Switch>
            </div>


        );
    }
}

export default auxiliar;
