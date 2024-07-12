import React from "react";
import { useState } from "react";
import "./form.css";
// const Form = ()=>{
    // return <>
    // <h2>ID MAKER</h2>
    //  <form>
    //   <table>
    //   <tr>
    //     <th>Name:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Class:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>  

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   <tr>
    //     <th>Sec:</th>
    //     <td>
    //      <input></input>
    //     </td>
    //   </tr>

    //   </table>  
    //  </form>
    // </>
// }


const Form = ({name,type})=>{

    const [data,setData] = useState("");
//onChange={(e) => setName(e.target.value)}
    const change = (e) =>{
        console.log(data)
    }
    return(
   
    <div>  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
       
			<div className="login">
            <div class="form">
				<div className="form">
		
					<input class="input" type={type} placeholder={name} onChange={(e) => setData(e.target.value)}/>
				</div>
			</div>
            </div>
            </div>
            
 )
}
export default Form;