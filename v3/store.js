import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const InitState = {
    users         : [],
    first_order   : 0,
    last_order    : 0,
    sex_order     : 0,
    age_order     : 0,
    offset        : 0,
    limit         : 5,
    count         : 0,
    search_text   : undefined,
    sort_obj      : {},
    load_status   : 'initial',
    add_status    : 'initial',
    delete_status : 'initial',
    edit_status   : 'initial'
}

export function getUsers(range) {
    return (dispatch) => {
        dispatch({
            type   : 'LOAD_USER_STATUS',
            status : 'loading'
        });
        axios.get('http://localhost:8080/getall', { params : {
            limit  : range.limit,
            offset : range.offset,
            search : range.search,
            sort   : range.sort
        }})
            .then((response) => {
                dispatch({
                    type: 'USERS_COMPLETE',
                    users: response.data.users,
                    count  : response.data.count
                });
            })
            .catch(err => {
                dispatch({
                    type   : 'LOAD_USER_STATUS',
                    status : 'fail'
                })
            });
    }
}

export function addUser(user) {
    return (dispatch) => {
        dispatch({
            type   : 'ADD_USER_STATUS',
            status : 'uploading'
        });
        axios.post('http://localhost:8080/adduser', user)
            .then((response) => {
                dispatch({
                    type   : 'ADD_USER_STATUS',
                    status : 'success'
                })
            })
            .catch(err => {
                dispatch({
                    type   : 'ADD_USER_STATUS',
                    status : 'fail'
                })
            });
    }
}

export function deleteUser(obj) {
    return (dispatch, getState) => {
        dispatch({
            type   : 'DELETE_USER_STATUS',
            status : 'deleting'
        });
        axios.delete('http://localhost:8080/deleteuser', { params : {
            id     : obj.id,
            limit  : getState().limit, 
            offset : obj.offset,
            search : getState().search_text,
            sort   : getState().sort_obj
        }})
            .then((response) => {
                dispatch({
                    type   : 'DELETE_USER_COMPLETE',
                    status : 'success',
                    users  : response.data,
                    count  : getState().count - 1,
                    offset : obj.offset
                })
            })
            .catch(err => {
                dispatch({
                    type   : 'DELETE_USER_STATUS',
                    status : 'fail'
                })
            });
    }
}

export function editUsers(user) {
    return (dispatch) => {
        dispatch({
            type   : 'EDIT_USER_STATUS',
            status : 'uploading'
        });
        axios.post('http://localhost:8080/edituser', user)
            .then((response) => {
                dispatch({
                    type   : 'EDIT_USER_STATUS',
                    status : 'success'
                })
            })
            .catch(err => {
                dispatch({
                    type   : 'EDIT_USER_STATUS',
                    status : 'fail'
                })
            });
    }
}

// export function searchUser(text) {
//     return (dispatch) => {
//         if (text)
//             dispatch({
//                 type   : 'SEARCH_USER', 
//                 filter : text
//             })
//         else
//             dispatch({
//                 type: 'RESET_SEARCH'
//             })
//     }
// }

const myReducer = (state = InitState, action) => {
    switch (action.type) {
        case 'LOAD_USER_STATUS':
            return {...state, load_status: action.status};
        case 'USERS_COMPLETE':
            return {...state, load_status: 'success', users: action.users, count: action.count};
        case 'DELETE_USER_COMPLETE':
            return {...state, delete_status: 'success', users: action.users, count: action.count, offset: action.offset};
        // case 'SEARCH_USER':
        //     return {...state, users: state.users.map(ele => {
        //         return (ele.first_name + ' ' + ele.last_name).startsWith(action.filter) || ele.sex.startsWith(action.filter) || ('' + ele.age).startsWith(action.filter) ? {...ele, selected: true} : {...ele, selected: false }
        //     })}
        case 'SET_SEARCH':
            return {...state, search_text: action.value}
        case 'ADD_USER_STATUS':
            return {...state, add_status: action.status};
        case 'EDIT_USER_STATUS':
            return {...state, edit_status: action.status};
        case 'DELETE_USER_STATUS':
            return {...state, delete_status: action.status};
        case 'SORT_USER':
            return {
                ...state, first_order : action.column !== 'first_name' ? 0 : state.first_order === 1 ? -1 : 1,
                    last_order        : action.column !== 'last_name'  ? 0 : state.last_order  === 1 ? -1 : 1,
                    sex_order         : action.column !== 'sex'        ? 0 : state.sex_order   === 1 ? -1 : 1,
                    age_order         : action.column !== 'age'        ? 0 : state.age_order   === 1 ? -1 : 1,
                    sort_obj          : action.sort
            }
        case 'CHANGE_PAGE':
            return {...state, offset: action.offset}
        default:
          return state;
      }
  };

  const store = createStore(myReducer, InitState, applyMiddleware(thunk));
  export default store;