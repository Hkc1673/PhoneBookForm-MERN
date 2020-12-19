import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../Style";

function InformationTable() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get("/api/user/getUser")
            setUser(res.data)
        }
        getUsers();
    }, [])


    const deleteUser = async (id) => {
        await axios.get(`/api/user/deleteUser/${id}`)
            .then(console.log("Deleted"))
            .catch(err => console.log(err));

    }

    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>

                </tr>
                {user.map((item, index) => {
                    return (
                            <tr key={index}>
                                <td style={style.tableCell}>{item.firstName}</td>
                                <td style={style.tableCell}>{item.lastName}</td>
                                <td style={style.tableCell}>{item.phone}</td>
                                <td><button style={style.form.deleteBtn} onClick={(() => deleteUser(item._id))}>Delete</button></td>
                            </tr>
                    );
                })}
            </thead>
        </table>
    );
}

export default InformationTable;