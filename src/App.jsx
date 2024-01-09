import React from 'react';
import {Route, Routes} from 'react-router-dom';



// importing pages

import Login from './Login'
import Signup1 from './Signup1'
import Signup2 from './Signup2';
import Forgotpassword from './Forgotpassword'
import HomepageOne from './HomepageOne'
import Productlist from './Productlist'
function App() {
  return (
    <>
    <Routes>
        <Route path='/signup1' element={<Signup1 />} />
        <Route path='/signup2' element={<Signup2 />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/homepageone' element={<HomepageOne />} />
        <Route path='/productlist' element={<Productlist />} />
       
</Routes>
    </>
    
  );
}

export default App;
