import './App.css';
import { BrowserRouter, Switch,Route ,Link} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>

      
        <Route exact path="/">
          <div className="main">
            <div className='title'>
              <h2>Nirmitee</h2>
            </div>
            <h4>Blog&nbsp;Website</h4>
            <span>using&nbsp;<a href="https://reactjs.org/">React&nbsp;</a>&amp;&nbsp;<a href="https://redux.js.org/">Redux</a></span>
            <div className="btns">
              <Link exact to='/' className="waves-effect waves-light btn blue lighten-1">Login</Link>
              <Link exact to='/' className="waves-effect waves-light btn blue lighten-1">SignUp</Link>
            </div>
            <Link className="waves-effect waves-light btn blue lighten-1 explore" to="/home">Explore Latest Blogs</Link>
          </div>
        </Route>



        <Route path="/home"> 
            <Home/>
        </Route>

      </Switch>         
    </BrowserRouter>
    </>
  );
}

export default App;
