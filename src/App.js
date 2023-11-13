import './App.css';
import { Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/users' element={ <UserList />} />
    <Route path='/' element={ <Home />} />
    <Route path='/*' element={ <NotFound />} />
    <Route path='/dashboard' element={ <Dashboard />} />
   </Routes>
    </div>
  );
}

export default App;
