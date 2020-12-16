import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import Gents from './Components/Gents';
import Ladies from './Components/Ladies';
import Child from './Components/Child';



function RouteConfig() {

  return (
	<div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Gents" component={Gents}/>
                <Route exact path="/Ladies" component={Ladies}/>
                <Route path="/Child" component={Child}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;