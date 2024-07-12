import React from "react";
import { useState } from "react";
import Form from "./Form";
import "./form.css";


const Main = ({name,type})=>{

	const [data,setData] = useState("");
	//onChange={(e) => setName(e.target.value)}
		const change = (e) =>{
			console.log(data)
		}

    return(
   
    <div className="main"> 
	<h1 >Enter Details</h1> 	

	<Form name='Name'/>
	<Form name='Class'/>
	<Form name='Sec'/>
	<Form name='Age' type='number'/>
	<Form name='Sex'>
	<select >
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>


	</Form>
	<Form name='Contact' type='number'/>
	<Form name='D.O.B' type='date'
	/>
	<Form name='Address'/>
	<Form name='Email Address' type='email'/>

    <button onClick={change} className="text-white">Submit</button>




	

    
            </div>
            
 )
}
export default Main;