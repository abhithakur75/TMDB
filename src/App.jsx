
import Header from "./Header";
 import Topmovie from "./Topmovie";
 import Popular from "./Popular";
 import Upcoming from "./Upcoming";
 import Home from "./Home";
 import Search from "./Search";

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Trailer from "./Trailer";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Header /> 

     
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route  path="movies/popular" element={<Popular /> }/>
          <Route  path="movies/toprated" element={<Topmovie /> }/>
          <Route  path="movies/upcoming" element={<Upcoming /> }/>
          <Route  path="movies/search/:search" element={<Search /> }/>
          <Route  path="movies/trailer/:trailerId" element={<Trailer /> }/>
          <Route path="/trailer/:trailerId" element={<Trailer />} />
          

        </Routes>

        </BrowserRouter>
    </>
  )
}
export default App;