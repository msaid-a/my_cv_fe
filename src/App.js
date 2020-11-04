import 'rsuite/dist/styles/rsuite-default.css';
import {useSelector, connect} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './screen/login'
import Dashboard from './screen/dashboard'
import './static/styles/css/style.css'
function App(props) {
  return (
    <BrowserRouter>
    <div >
            <Switch>
              <Route path='/login'  component={Login} exact/>
              <Route path='/dashboard'  component={Dashboard} exact/>

            </Switch>
    </div>
    </BrowserRouter>
  );
}


const mapStateToProps = state => {
  return {
    id: state
  }
}
export default  connect(mapStateToProps)(App);
