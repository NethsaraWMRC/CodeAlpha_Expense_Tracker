import React, {useState} from "react";
import axios from 'axios';

export default function AddRecord(){

    let [price,setPrice] = useState("");
    let [description,setdescription] = useState("");
    let [expensetype,setType] = useState("");
    


    function sendData(e){

        const newRecord = {
            price,
            description,
            expensetype,
           
        }

        axios.post("https://expensetracker-sa5w.onrender.com",newRecord).then(()=>{
            alert("Record added successfully!");
            document.getElementById("price").value="";
            document.getElementById("description").value="";
            document.getElementById("type").value="select menu";
           
        }).catch((err)=>{
            console.log(err);
        })

        
    }

    

    return(
        <div className="container" >
            <table style={{margin:"50px auto"}}>
                <tbody>
                    <tr style={{height:"50px"}}>
                        <td >Price:</td>
                        
                        <td><input type="text" className="form-control" id="price" onChange={(e)=>{
                            setPrice(e.target.value);
                        }}/></td>
                    </tr>

                    <tr style={{height:"50px"}}>
                        <td style={{width:"120px"}}>Description:</td>
                        <td><input type="text" className="form-control" id="description" onChange={(e)=>{
                            setdescription(e.target.value);
                        }}/></td>
                    </tr>

                    <tr style={{height:"50px"}}>
                        <td>Type:</td>
                        <td>
                            <select className="form-select" aria-label="Default select example" id="type" onChange={(e)=>{
                            setType(e.target.value);
                        }}>
                                <option selected>select menu</option>
                                <option value="Income">Income</option>
                                <option value="Outcome">Outcome</option>
                                
                            </select>
                        </td>
                    </tr>

                    <tr style={{height:"50px",textAlign:"right"}}>
                        <td></td>
                        <td>
                            <input className="btn btn-primary" type="submit" value="Add transaction" onClick={sendData}/>
                        </td>
                        
                    </tr>
                    
                    </tbody>
                </table>
        </div>
        
    )
}
