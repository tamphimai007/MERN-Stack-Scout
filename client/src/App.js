import React, { useEffect } from 'react'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
// Redux
import { useDispatch } from 'react-redux';
// Router
import { Switch, Route } from 'react-router-dom';
//Pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

//Admin
import HomeAdmin from './pages/admin/HomeAdmin';
import InsertCamp from './pages/admin/InsertCamp';
import InsertClub from './pages/admin/InsertClub';
import TypeEvent from './pages/admin/TypeEvent';
import InsertTraining from './pages/admin/InsertTraining';
import InsertEvents from './pages/admin/InsertEvents';

// Example 
import ExInsertCamp from './components/example/ExInsertCamp';
import ExHomeAdmin from './components/example/ExHomeAdmin';
//User 
import HomeUser from './pages/user/HomeUser';

// function
import { currentUser } from './functions/auth';

//Route
import UserRoute from './components/routes/UserRoute';
import AdminRoute from './components/routes/AdminRoute';



function App() {
  const dispatch = useDispatch();
  // console.log('APP.js', idTokenResult)

  useEffect(() => {
    const idTokenResult = localStorage.token;
    if (idTokenResult) {
      currentUser(idTokenResult)
        .then(res => {

          dispatch({
            type: 'LOGGED_IN_USER',
            payload: {
              name: res.data.name,
              role: res.data.role,
              token: idTokenResult
            }
          })

        }).catch(err => {
          console.log(err)
        })
    }
  }, [dispatch])


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <AdminRoute exact path="/home-admin" component={HomeAdmin} />
        <AdminRoute exact path="/insert-camp" component={InsertCamp} />
        <AdminRoute exact path="/insert-club" component={InsertClub} />
        <AdminRoute exact path="/insert-typeevent" component={TypeEvent} />
        <AdminRoute exact path="/insert-training" component={InsertTraining} />
        <AdminRoute exact path="/insert-event" component={InsertEvents}/>

        <UserRoute exact path="/home-user" component={HomeUser} />




        {/* example */}
        <UserRoute exact path="/ex-insert-camp" component={ExInsertCamp} />
        <UserRoute exact path="/ex-home-admin" component={ExHomeAdmin} />

      </Switch>
    </>
  );
}

export default App;
