import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {  addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        };
        dispatch(addContact(new_contact));
        history.push("/");
        // console.log(name, phone, email)
    };
    return (
        <div className="card border-0 shadow">
        <div className="card-header">Add a Contact</div>
            <div className="card-body">
                    <form onSubmit={(e) => createContact(e)}>
                        <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>     
                        <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Enter Your E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Create Contact </button>              
                    </form>             
            </div>
        </div>
    );
};

export default AddContact;
