//import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login'
import Signup1 from './Signup1'
import Signup2 from './Signup2';
import Forgotpassword from './Forgotpassword'
import HomepageOne from './HomepageOne'
import HomepageTwo from './HomepageTwo'
import Productlist from './Productlist'
import Productpage from './Productpage'
import Productproduct from './Productproduct'
function App() {
  return (
    <>
    <Routes>
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/signup2' element={<Signup2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/' element={<HomepageOne />} />
        <Route path='/homepagetwo' element={<HomepageTwo />} />
        <Route path='/productlist' element={<Productlist />} />
        <Route path='/productpage' element={<Productpage />} />
        <Route path='/productproduct' element={<Productproduct />} />
       
</Routes>
    </>
    
  );
}

export default App;
