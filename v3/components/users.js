import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UsersList from './UsersList/usersList';
import PageChange from './UsersList/pageChange';
import UserSearch from './UsersList/userSearch';
import { Button, Badge} from 'react-bootstrap';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../store.js';

class Users extends Component{
    componentDidMount() {
        this.props.updateCreateStatue();
        this.props.updateEditStatue();
        this.props.loadusers({limit : this.props.limit, offset : this.props.offset, sort : this.props.sort_obj});
    }

    searchUser = input => {
        this.props.changePage(0);
        this.props.setSearch(input);
        this.props.loadusers({limit : this.props.limit, offset : 0, search : input, sort : this.props.sort_obj});
    }

    sortUser = input => {
        let sort = {};
        Object.keys(this.props.order).forEach(ele => {
            if (ele === input.split('_').shift() + '_order'){
                this.props.order[ele] === 1 ? sort[input] = -1 : sort[input] = 1;
            }
        })
        this.props.loadusers({limit : this.props.limit, offset : 0, search : this.props.search_text, sort});
        this.props.sortUser(input, sort);
        this.props.changePage(0);
    }

    deleteUser = id => {
        this.props.users.length === 1 &&  this.props.offset !== 0 ? 
            this.props.deleteUser({id, offset: this.props.offset - this.props.limit}) : this.props.deleteUser({id, offset: this.props.offset});
    }

    changePage = offset => {
        this.props.loadusers({limit : this.props.limit, offset, search: this.props.search_text, sort : this.props.sort_obj});
        this.props.changePage(offset);
    }

    render(){
        return(
            <div style={{textAlign : "center" }}>
                <Badge style={{color : "orange", fontSize : "50px"}}>Users List</Badge>
                <div style={{float : "left"}}>
                    <UserSearch searchUser={this.searchUser} />
                </div>
                <div style={{float : "right"}}>
                    <Button bsstyle="success"><Link style={{ color: '#FFF' }} to="/createUser">Create New User</Link></Button>
                </div>
                <UsersList 
                    users={this.props.users} 
                    sortUser={this.sortUser} 
                    load_status={this.props.load_status}
                    delete_status={this.props.delete_status}
                    deleteUser={this.deleteUser}
                    order={this.props.order}
                    search_text={this.props.search_text}
                />
                {this.props.users.length === 0 ? null : (
                    <p>{this.props.users.length === 1 ? this.props.offset + 1 : (this.props.offset + 1) + ' - ' + (this.props.offset + this.props.users.length)} of {this.props.count}</p>
                )}
                {/* {textAlign : "center" , verticalAlign: "middle"} */}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <PageChange
                    limit={this.props.limit} 
                    offset={this.props.offset} 
                    changePage={this.changePage}
                    count={this.props.count}
                />
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        users         : state.users,
        load_status   : state.load_status,
        delete_status : state.delete_status,
        limit         : state.limit,
        offset        : state.offset,
        count         : state.count,
        search_text   : state.search_text,
        sort_obj      : state.sort_obj,
        order         : {
            first_order   : state.first_order,
            last_order    : state.last_order,
            sex_order     : state.sex_order,
            age_order     : state.age_order
        }
    }
  };
  
const mapDispatchToProps = dispatch => {
    return({
        loadusers    : (range) => {
            dispatch(getUsers(range));
        },
        setSearch    : (value) => {
            dispatch({
                type : 'SET_SEARCH',
                value 
            });
        },
        updateCreateStatue : () => {
            dispatch({
                type   : 'ADD_USER_STATUS',
                status : 'initial'
            });
        },
        updateEditStatue : () => {
            dispatch({
                type   : 'EDIT_USER_STATUS',
                status : 'initial'
            });
        },
        sortUser     : (key, sort) => {
            dispatch({
                type   : 'SORT_USER',
                column : key,
                sort
            });
        },
        deleteUser     : (obj) => {
            dispatch(deleteUser(obj));
        },
        changePage     : (offset) => {
            dispatch({
                type   : 'CHANGE_PAGE',
                offset
            });
        }
    })
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Users);