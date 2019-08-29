import React, {useContext} from 'react';
import { Switch, Route, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css'
import {
  PageOne,
  PageTwo,
  PageLand,
  Spinner
} from './components';

const App = () => {
  const { location } = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(50%, 0)" },
    enter: {  opacity: 1 , transform: "translate(0%, 0)"},
    leave: {  opacity: 0 , transform: "translate(-50%, 0)" }
  })
  return (
    <>
        <main>
        <Route exact path="/" component={PageLand}/>
          {transitions.map(({item, props, key}) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>

                <Route exact path="/one" component={PageOne}/>
                <Route exact path="/two" component={PageTwo}/>
                <Route exact path="/spin" component={Spinner}/>
              </Switch>
            </animated.div>
          ))}

        </main>
    </>
  );
}

export default App;
