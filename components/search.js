'use client'
export default function Searchinput(){
    return (
			<div>
				<input type="text" id="search" contentEditable='true' placeholder="Search..." autoComplete="false"/>
				<button className="search-btn" onClick={()=>{
					if(!document.getElementById('search').value){

					} else{
                    document.location ="/search/" + document.getElementById("search").value;
					}
                }}>Search</button>
			</div>
		);
}