import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { MdUnfoldMore, MdExpandLess, MdExpandMore } from 'react-icons/md';

const UsersList = ({ users, sortUser, load_status, delete_status, deleteUser, order, search_text }) => {
    if (load_status === "loading")
        return (
            <div style={{textAlign : "center"}}>
                <br />
                <Loader 
                    type="Ball-Triangle"
                    color="#00BFFF"
                    height="100"	
                    width="100"
                /> 
            </div>
        )
    if (load_status === "fail")
        return (
            <div style={{textAlign : "center"}}>
                <br />
                <Alert bsstyle="danger">
                    <strong>Opps, Something wrong</strong> Please reload the page
                </Alert>
            </div>
        )
    if (users.length === 0)
        return !search_text ? (
            <div style={{textAlign : "center"}}>
                <br />
                <p style={{color : "#C3B3AF", fontSize : "50px"}}>No User Found</p>
            </div>
        ) : (
            <div style={{textAlign : "center"}}>
                <br />
                <p style={{color : "#C3B3AF", fontSize : "50px"}}>No Satisfied User</p>
            </div>
        )
    return (
        <div>
            <br />
            {delete_status === "fail" ? (<Alert bsstyle="danger">
                    <strong>Opps, Cannot delete</strong> Please try again
                </Alert>) : null}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{textAlign : 'center'}}>Edit</th>
                        <th style={{textAlign : 'center'}}> Delete</th>
                        <th style={{color : "blue", textAlign : 'center'}} onClick={() => sortUser('first_name')}>
                            First Name {!order.first_order ? (<MdUnfoldMore />) : order.first_order === 1 ? (<MdExpandLess />) : (<MdExpandMore />)}
                        </th>
                        <th style={{color : "blue", textAlign : 'center'}} onClick={() => sortUser('last_name')}>
                            Last Name {!order.last_order ? (<MdUnfoldMore />) : order.last_order === 1 ? (<MdExpandLess />) : (<MdExpandMore />)}
                        </th>
                        <th style={{color : "blue", textAlign : 'center'}} onClick={() => sortUser('age')}>
                            Age {!order.age_order ? (<MdUnfoldMore />) : order.age_order === 1 ? (<MdExpandLess />) : (<MdExpandMore />)}
                        </th>
                        <th style={{color : "blue", textAlign : 'center'}} onClick={() => sortUser('sex')}>
                            Sex {!order.sex_order ? (<MdUnfoldMore />) : order.sex_order === 1 ? (<MdExpandLess />) : (<MdExpandMore />)}
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    {users.map(ele => (
                        <tr key={ele._id + 'tr'}>
                            <td key={ele._id + 'edit'}>
                            <Button>
                                <Link style={{ color: 'white' }} to={`/editUser/${ele._id}`}>Edit</Link>
                            </Button>
                            </td>
                            <td key={ele._id + 'delete'}>
                                <Button disabled={delete_status === "deleting" ? true : false} onClick={() => deleteUser(ele._id)}>
                                    {delete_status === "deleting" ? "Deleting" : "Delete"}
                                </Button>
                            </td>
                            <td key={ele._id + 'first' + ele.first_name}>{ele.first_name}</td>
                            <td key={ele._id + 'last' + ele.last_name}>{ele.last_name}</td>
                            <td key={ele._id + ele.age}>{ele.age}</td>
                            <td key={ele._id + ele.sex}>{ele.sex}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )   
};

export default UsersList;