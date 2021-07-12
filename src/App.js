import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from "./components/HomePage/HomePage";
import AutoPark from "./components/Pages/AutoPark/AutoPark";
import Advantages from "./components/Pages/Advantages/Advantages";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Partners from "./components/Pages/Partners/Partners";
import Contacts from "./components/Pages/Contacts/Contacts";

function App() {
    return (
        <>
            <HomePage />
            <Switch>
                <Route path='/auto_park' render={() => <AutoPark />}/>
                <Route path='/advantages' render={() => <Advantages />}/>
                <Route path='/about_us' render={() => <AboutUs />}/>
                <Route path='/partners' render={() => <Partners />}/>
                <Route path='/contacts' render={() => <Contacts />}/>
            </Switch>
        </>
    );
}

export default App;
