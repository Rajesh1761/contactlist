import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import FetchContactList from './component/FetchContactList';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <div >
      <Router>
          <Header/>
            <div className='container'>
            <Switch>
              <Route exact path='/'> <FetchContactList/></Route>
              <Route exact path='/search'> <Search/></Route>
              
            </Switch>
            </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
