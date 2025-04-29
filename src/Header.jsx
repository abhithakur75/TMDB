
import { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {

    const[search,setSearch]=useState("")
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }


    return (
        <>
            <div className="header">
                <div className="container">
                    <div className=" flex space-beteen">

                        <div className="nav">
                            <ul className="nav-list">
                                <li className="nav-item">

                                    <Link to="/">{/*  <img className="logo" src="tmdblogo.png" alt="" /> */}TMDB </Link> 
                                    <div className="links">
                                    <Link to="movies/popular">Popular</Link>
                                    <Link to="movies/toprated">TopRated </Link>
                                    <Link to="movies/upcoming">Upcoming</Link>
                                    </div>
                                    

                                </li>
                            </ul>
                        </div>
                        <div className="search-movie flex">
                            <div className="notification flex">
                            <i className="fa-solid fa-bell"> <small className="text-center py-1" >2</small> </i>
                            </div>
                            <form >
                                <input type="text" placeholder="search movie" value={search} name="search" onChange={handleChange} autoComplete="off"/>
                                
                                
                              <Link  to={"movies/search/"+search} className="search-btn" ><i className="fa-solid fa-magnifying-glass"></i> </Link> 
                            </form> 
                            <div className="profile flex ">
                                A
                            </div>
                            <div className="lang">
                               <select>  
                                <option>En</option> 
                                <option>Hindi</option> 
                                <option>French</option> 
                               </select>
                            </div>
                            <div className="menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;