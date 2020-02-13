import React from 'react'
import Header from './components/Header'
import NotFound from './components/NotFound'

import Genres from './pages/Genres'
import NewGenre from './pages/NewGenre'
import EditGenre from './pages/EditGenre'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/generos/novo' exact component={NewGenre} />
            <Route path='/generos/:id' exact component={EditGenre} />
            <Route path='/generos' exact component={Genres} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
