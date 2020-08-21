import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from '@reach/router';
import { NavBar } from './components/navBar';
import { Home } from './components/home';
import { Blog } from './components/blog';
import { Work } from './components/work';
import { NotFoundView } from './components/not-found-view';
import './index.scss';
import BottomBar from './components/bottomBar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const App = (
  <>
    <div className='page'>
      <BrowserRouter>
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={100000} classNames='fade'>
                <Switch location={location}>
                  <Route path='/home' component={Home} />
                  <Route path='/blog' component={Blog} />
                  <Route path='/work' component={Work} />
                  <Redirect from='/' to='/home' noThrow />
                  <NotFoundView default />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </div>
    <BottomBar />
  </>
);

ReactDOM.render(App, document.getElementById('root'));

// TO-DO: move off app.js and just use index.js   done
// TO-DO: move to scss                            done
// TO-DO: set up typescript and move to .tsx      done
// TO-DO: set up cypress                          done
// TO-DO: migrate off of styled-components-n/r    done
// TO-DO: set up mock-database                    x
// TO-DO: design the website in full              x
// TO-DO: work page responsive                    x
// TO-DO: work page sticky                        x
