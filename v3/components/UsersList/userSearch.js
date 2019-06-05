import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

class UserSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
        this.props.searchUser(e.target.value);
    }

    render() {
        return (
            <Form inline>
                <FormGroup controlId="formInlineName">
                    <FormLabel>Search: </FormLabel>
                    <FormControl
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.text}
                    />
                </FormGroup>
            </Form>
        )
    }
};

export default UserSearch;