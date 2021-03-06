import MainPage from './pages/MainPage'
import FeedPage from 'pages/FeedPage'
import PostPage from 'pages/PostPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.scss'

function App() {
  return (
    <div className='App'>
      {/* <MainPage/> */}
      {/* <FeedPage/> */}
      {/* <PostPage /> */}

      <Router>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/FeedPage' exact component={FeedPage} />
          <Route path='/PostPage' component={PostPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
