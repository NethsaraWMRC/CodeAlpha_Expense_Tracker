import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function EditRecord() {
    const { id } = useParams(); // Get the id from the URL parameter
    const [record, setRecord] = useState({});
    
    // Function to fetch data from the backend
    const fetchData = () => {
        axios.get(`http://localhost:3030/user/${id}`)
            .then((res) => {
                setRecord(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
         
        fetchData();
    }, [id]);

   

    console.log(record);

    // Function to handle form submission and update the record
    const handleSubmit = () => {
        // Get the updated values from the form fields
        const updatedRecord = {
            price: document.getElementById("price").value,
            description: document.getElementById("description").value,
            expensetype: document.getElementById("type").value,
        };

        // Make a PUT request to update the record
        axios.put(`http://localhost:3030/user/${id}`, updatedRecord)
            .then(() => {
                console.log("Record updated successfully!");
                // Redirect back to the records list page
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleTypeChange = (event) => {
        // Update the selected record's expensetype in the state
        setRecord(prevRecord => ({
            ...prevRecord,
            expensetype: event.target.value
        }));
    };

    return (
        <div className="container">
            <h2 style={{ margin: "50px auto", textAlign: "center" }}>Edit details</h2>
            <table style={{ margin: "50px auto" }}>
                <tbody>
                    <tr style={{ height: "50px" }}>
                        <td>Price:</td>
                        <td><input type="text" className="form-control" id="price" defaultValue={record.price} /></td>
                    </tr>

                    <tr style={{ height: "50px" }}>
                        <td style={{ width: "120px" }}>Description:</td>
                        <td><input type="text" className="form-control" id="description" defaultValue={record.description} /></td>
                    </tr>

                    <tr style={{ height: "50px" }}>
                        <td>Type:</td>
                        <td>
                            <select className="form-select" aria-label="Default select example" id="type" value={record.expensetype} onChange={handleTypeChange}>
                                <option selected>select menu</option>
                                <option value="Income">Income</option>
                                <option value="Outcome">Outcome</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Link to="/">Back</Link>
                        </td>
                        <td style={{ height: "50px", textAlign: "right" }}>
                            <input className="btn btn-primary" type="submit" value="Update" onClick={handleSubmit} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
