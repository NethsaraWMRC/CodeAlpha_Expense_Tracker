import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const URL = "http://localhost:3030/user"


export default function Records(){

    const [record, setRecord] = useState([]);

    useEffect(() => {
        fetchData();
    }, [record]);

    // Function to fetch data from the backend
    const fetchData = () => {
        axios.get(URL)
            .then((res) => {
                setRecord(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`${URL}/${id}`)
            .then(() => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    
    

    return(
        <div className="container" style={{margin:'auto',width:'900px'}}>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                {record.slice().reverse().map((item, index) => (
                        <tr key={index}>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.expensetype}</td>
                            <td>
                            <Link to={`/edit/${item._id}`}> <button className="btn btn-secondary btn-sm" style={{ marginRight: "12px", padding: "4px 20px" }}>Edit</button></Link>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
        
    )
}
