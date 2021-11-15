import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import AddService from './Component/Dashboard/AddService';
import Cart from './Component/Dashboard/Cart';
import ManageOrders from './Component/Dashboard/ManageOrders';
import Dashboard from './Component/Dashboard/Dashboard';
import Watches from './Component/Watches/Watches';
import Admin from './Component/Admin/Admin';
import Login from './Component/Login/Login';
import Pay from './Component/Pay/Pay';
import Brands from './Component/Brands/Brands';
import AuthProvider from './Context/AuthProvider';
import Ragistration from './Component/Login/Ragistration';
import WatchInfo from './Component/WatchInfo/WatchInfo';
import ExploreCards from './Component/ExploreCards/ExploreCards';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Feature from './Component/Feature/Feature'; 
import AddReview from './Component/AddReview/AddReview';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';
import PrivateRoute from './Component/Login/PrivetRoute/PrivateRoute';
import ContactUs from './Component/ContactUs/ContactUs';
import AboutUs from './Component/AboutUs/AboutUs';











function App() {
  return (
    <div>
      
      <AuthProvider>
      
      <Router>
           
           <Header></Header>
      <Switch>
      
      <Route exact path="/">
      <Home></Home></Route>
      
      <Route path="/home">
      <Home></Home></Route>
      
      <Route path="/header">
      <Header></Header></Route>
      
      <Route path="/dashboard">
      <Dashboard></Dashboard></Route>
      
      <Route path="/pay">
      <Pay></Pay></Route>
      
      <Route path="/cart">
      <Cart></Cart></Route>
      
      <Route path="/reviews">
      <Reviews></Reviews></Route>
      
      <Route path="/addreviews">
      <AddReview></AddReview></Route>
      
      <Route path="/watches">
      <Watches></Watches></Route>
      
      <PrivateRoute path="/feature">
      <Feature></Feature></PrivateRoute>
      
      <Route path="/login">
      <Login></Login></Route>
      
      <Route path="/manageorders">
      <ManageOrders></ManageOrders></Route>
      
      <Route path="/brands">
      <Brands></Brands></Route>

       <Route path="/ragistration">
                      <Ragistration></Ragistration>
             </Route> 
      
      <PrivateRoute path="/watchinfo/:watchId">
      <WatchInfo></WatchInfo></PrivateRoute>
      
      <PrivateRoute path="/explorecards">
      <ExploreCards></ExploreCards></PrivateRoute>
      
      <Route path="/addservice">
      <AddService></AddService></Route>
      
      
      <Route path="/admin">
      <Admin></Admin></Route>
      
      <PrivateRoute path="/aboutus">
      <AboutUs></AboutUs></PrivateRoute>
      
      <Route path="/contactus">
      <ContactUs></ContactUs></Route>
      
      <Route path="*">
      <NotFound></NotFound></Route>
      
      
      </Switch>
      
            
      
      
      <Footer></Footer>

      </Router>


      </AuthProvider>
    </div>
  );
}

export default App;
