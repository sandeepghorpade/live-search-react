
import React, { useState } from 'react';
import './Search.css';
import Sresult from './Sresult';
//import axios from 'axios';
//import Loader from '../loader.gif';
//import PageNavigation from './PageNavigation';

const Search = () => {

	const [img, setImg] = useState("");
	const inputEvent = (event) =>{
		const data = event.target.value;
		setImg(data);
	}

   return(
	   <>
	   <div className="container">
	   <h1 className="heading"> This Search Page</h1>
	   <div className="searchbar">
<input type="text" placeholder="Search Anything" value={img} onChange={inputEvent}/>
<Sresult name={img}/>
	   </div>
	   </div>
	   </>
   )
}

export default Search;