import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
  
import { Formulario } from '../components/pages/Formulario';
import { Lista } from '../components/pages/Lista';


export const AppRouter = () => {
   
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        exact
                        path="/"
                        component={ Formulario }
                    />
                    <Route 
                        exact
                        path="/lista"
                        component={ Lista }
                    />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}
