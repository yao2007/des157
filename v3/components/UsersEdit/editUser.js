import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, FormLabel, FormControl, ToggleButtonGroup, ToggleButton, Button, Alert } from 'react-bootstrap';
import { editUsers } from '../../store.js';
import { connect } from 'react-redux';

class editUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userinfo : {
                first    : this.props.users.length === 0 ? '' : this.props.users.find(ele => {return ele._id === this.props.match.params.id}).first_name,
                last     : this.props.users.length === 0 ? '' : this.props.users.find(ele => {return ele._id === this.props.match.params.id}).last_name,
                sex      : this.props.users.length === 0 ? '' : this.props.users.find(ele => {return ele._id === this.props.match.params.id}).sex,
                age      : this.props.users.length === 0 ? '' : this.props.users.find(ele => {return ele._id === this.props.match.params.id}).age,
                password : '',
                repeat   : ''
            },
            info_valid : {
                first_valid    : true,
                last_valid     : true,
                sex_valid      : true,
                age_valid      : true,
                password_valid : true,
                repeat_valid   : true
            },
            match : true,
            password_check : true
        };
    }

    handleFirstChange = e => {
        this.setState({ 
            userinfo   : {...this.state.userinfo, first : e.target.value},
            info_valid : {...this.state.info_valid, first_valid: true }
        });
    } 

    handleLastChange = e => {
        this.setState({ 
            userinfo   : {...this.state.userinfo, last : e.target.value},
            info_valid : {...this.state.info_valid, last_valid: true }
        });
    }

    handleAgeChange = e => {
        this.setState({ 
            userinfo   : {...this.state.userinfo, age: e.target.value},
            info_valid : {...this.state.info_valid, age_valid: true }
        });
    }

    handleSexChange = input => {
        this.setState({ 
            userinfo   : {...this.state.userinfo, sex : input},
            info_valid : {...this.state.info_valid, sex_valid: true }
        });
    }

    handlePasswordChange = e => {
        this.setState({ 
            match          : true,
            password_check : true,
            userinfo       : {...this.state.userinfo, password : e.target.value},
            info_valid     : {...this.state.info_valid, password_valid: true, repeat_valid: true }
        });
    }

    handleRepeatChange = e => {
        this.setState({ 
            match          : true,
            password_check : true,
            userinfo       : {...this.state.userinfo, repeat : e.target.value},
            info_valid     : {...this.state.info_valid, repeat_valid: true, password_valid: true }
        });
    }

    submitChange = () => {
        if (this.state.userinfo.first.trim() === ''){
            this.setState({ 
                userinfo   : {...this.state.userinfo, first : ''},
                info_valid : {...this.state.info_valid, first_valid : false }
            });
            return;
        }
        if (this.state.userinfo.last.trim() === ''){
            this.setState({
                userinfo   : {...this.state.userinfo, last : ''}, 
                info_valid : {...this.state.info_valid, last_valid : false }
            });
            return;
        }
        if (this.state.userinfo.sex === ''){
            this.setState({ 
                info_valid : {...this.state.info_valid, sex_valid : false }
            });
            return;
        }
        let ages = parseInt(this.state.userinfo.age);
        if (!ages || ages < 0 || ages > 120){
            this.setState({
                userinfo   : {...this.state.userinfo, age : ''}, 
                info_valid : {...this.state.info_valid, age_valid : false }
            });
            return;
        }
        if (this.state.userinfo.password.trim() === ''){
            this.setState({
                userinfo   : {...this.state.userinfo, password : ''},
                info_valid : {...this.state.info_valid, password_valid : false }
            });
            return;
        }
        if (this.state.userinfo.repeat.trim() === ''){
            this.setState({
                userinfo   : {...this.state.userinfo, repeat : ''},
                info_valid : {...this.state.info_valid, repeat_valid : false }
            });
            return;
        }
        if (this.state.userinfo.repeat !== this.state.userinfo.password){
            this.setState({
                match      : false,
                userinfo   : {...this.state.userinfo, repeat : '', password : ''},
                info_valid : {...this.state.info_valid, repeat_valid : false, password_valid : false}
            });
            return;
        }
        if (this.props.users.find(ele => {return ele._id === this.props.match.params.id}).password !== this.state.userinfo.password){
            this.setState({
                password_check : false,
                userinfo       : {...this.state.userinfo, repeat : '', password : ''}
            });
            return;
        }
        this.props.editUsers({
            id         : this.props.match.params.id,
            first_name : this.state.userinfo.first,
            last_name  : this.state.userinfo.last,
            age        : ages,
            sex        : this.state.userinfo.sex,
            password   : this.state.userinfo.password
        });
    }

    render() {
        if (this.props.status === "success"){
            return <Redirect to='/' />
        }
        return (
            <div style={{width : '500px'}}>
                <h1>Edit User:</h1>
                {this.props.status === "fail" ? (<Alert bsstyle="danger">
                    <strong>Opps, Something wrong!</strong> Please upload again!
                </Alert>) : null}
                <Form>
                    <FormGroup validationState={this.state.info_valid.first_valid ? null : "error"}>
                        <FormLabel>First Name: </FormLabel>
                        <FormControl
                            type="text" 
                            onChange={this.handleFirstChange} 
                            value={this.state.userinfo.first}
                        />
                        {this.state.info_valid.first_valid ? null : (<Form.Control.Feedback>Please Enter Valid First Name</Form.Control.Feedback>)}
                    </FormGroup>
                    <FormGroup validationState={this.state.info_valid.last_valid ? null : "error"}>
                        <FormLabel>Last Name: </FormLabel>
                        <FormControl
                            type="text" 
                            onChange={this.handleLastChange} 
                            value={this.state.userinfo.last}
                        />
                        {this.state.info_valid.last_valid ? null : (<Form.Control.Feedback>Please Enter Valid Last Name</Form.Control.Feedback>)}
                    </FormGroup>
                    <FormGroup validationState={this.state.info_valid.sex_valid ? null : "error"}>
                        <FormLabel>Sex: </FormLabel><br />
                        <ToggleButtonGroup 
                            type="radio" 
                            name="sex" 
                            defaultValue={this.props.users.length === 0 ? 'unselected' : this.props.users.find(ele => {return ele._id === this.props.match.params.id}).sex} 
                            onChange={this.handleSexChange}
                        >
                            <ToggleButton value='Male'>Male</ToggleButton>
                            <ToggleButton value='Female'>Female</ToggleButton>
                        </ToggleButtonGroup><br />
                        {this.state.info_valid.sex_valid ? null : (<Form.Control.Feedback>Please Select Gender</Form.Control.Feedback>)}
                    </FormGroup>
                    <FormGroup validationState={this.state.info_valid.age_valid ? null : "error"}>
                        <FormLabel>Age: </FormLabel>
                        <FormControl
                            type="text" 
                            onChange={this.handleAgeChange} 
                            value={this.state.userinfo.age}
                        />
                        {this.state.info_valid.age_valid ? null : (<Form.Control.Feedback>Please Enter Valid Age</Form.Control.Feedback>)}
                    </FormGroup>
                    <FormGroup validationState={this.state.info_valid.password_valid && this.state.password_check ? null : "error"}>
                        <FormLabel>Password: </FormLabel>
                        <FormControl
                            type="password" 
                            onChange={this.handlePasswordChange} 
                            value={this.state.userinfo.password}
                            placeholder="Enter Password"
                        />
                        {this.state.info_valid.password_valid ? null : (<Form.Control.Feedback>Please Enter Valid Password</Form.Control.Feedback>)}
                    </FormGroup>
                    <FormGroup validationState={this.state.info_valid.repeat_valid && this.state.password_check ? null : "error"}>
                        <FormLabel>Repeat: </FormLabel>
                        <FormControl
                            type="password" 
                            onChange={this.handleRepeatChange} 
                            value={this.state.userinfo.repeat}
                            placeholder="Repeat Password"
                        />
                        {this.state.info_valid.repeat_valid ? null : (<Form.Control.Feedback>Please Enter Password Again</Form.Control.Feedback>)}
                        <br />
                    </FormGroup>
                    {this.state.match ? null : (<Alert bsstyle="danger">
                        <strong>Password Doesn't Match</strong>
                    </Alert>)}
                    {this.state.password_check ? null : (<Alert bsstyle="danger">
                        <strong>Invalid Password</strong> Please enter again
                    </Alert>)}
                    <Button bsstyle="success" onClick={this.submitChange} disabled={this.props.status === 'uploading' ? true : false}>
                        {this.props.status === 'uploading' ? "Saving Changes" : "Save Changes"}
                    </Button>
                </Form>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        users  : state.users,
        status : state.edit_status
    }
  };
  
const mapDispatchToProps = dispatch => {
    return({
        editUsers      : (user) => {
            dispatch(editUsers(user));
        }
    })
}
  
export default connect(mapStateToProps, mapDispatchToProps)(editUser);