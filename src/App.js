import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom' //Object Destructuring selecting properties of independent variables
import Home from './components/Home'
import Register from './components/Users/Register'
import Login from './components/Users/Login'
import CustomerList from './components/customers/List'
import CustomerNew from './components/customers/New'
import CustomerShow from './components/customers/Show'
import DepartmentList from './components/departments/List'
import CustomerEdit from './components/customers/Edit'

function App(props){
    const handleLogout = () => {  //es6 features
        localStorage.removeItem('authToken')  //clearing the locall storage 'authtoken' information
        window.location.href = '/account/login'
        window.location.reload()
    }
    return (
        <BrowserRouter>
        <div>
            <h1>Ticket Master</h1>
            <Link to="/">Home</Link>
            {
                localStorage.getItem('authToken') ? (
                    <div>
                        <Link to="/customers">customers</Link>
                        <Link to="department">|Department</Link>
                        <Link to="account/logout" onClick = {handleLogout}>|Logout</Link>
                        
                     </div>
                ) : (
                    <div>
                        <Link to="/account/login">|Login</Link>
                        <Link to="/account/register">|Register</Link>
                     </div>
                )
                     
            }
            
            <Switch>
            <Route path="/" component={ Home } exact = { true } />
            <Route path="/account/register" component={ Register } exact = { true } />
            <Route path="/account/login" component={ Login } exact = { true } />
            <Route path="/customers" component={CustomerList} exact = {true} />
            <Route path="/customers/new" component={CustomerNew} exact = {true} />
            <Route path="/customers/:id" component = {CustomerShow} exact = {true} />

            <Route path="/department" component = {DepartmentList} exact = {true} />

            <Route path="/customers/edit/:id" component = {CustomerEdit} exact={true} />
            </Switch>

         </div>
        </BrowserRouter>
    )
    
}

export default App