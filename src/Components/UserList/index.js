import React from "react";
import User from "../User";
import "./style.css";

const  UserList  = (props) =>{
    let tableRows = props.users && props.users.data && props.users.data.map((user,index) => {
        return (
            <User key={user.id} userId = {user.id} userNo={index+1} userName={user.first_name + " " + user.last_name}
                avatar={user.avatar} userEmail = {user.email}/>
        )
    })
    return (
        <table className="table table-bordered table-striped table-hover table-sm ">
            <thead>
                <tr className="table-row">
                    <td>Sr No.</td>
                    <td>Avatar</td>
                    <td>User Name</td>
                    <td>Email ID</td>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default UserList;