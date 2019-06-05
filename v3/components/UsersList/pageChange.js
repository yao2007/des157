import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class PageChange extends Component {
 
    changePage = page => {
        this.props.changePage(this.props.limit * (page - 1));
    }

    firstPage = () => {
        this.props.changePage(0);
    }

    lastPage = () => {
        this.props.changePage(this.props.limit * (Math.ceil(this.props.count / this.props.limit) - 1));
    }

    nextPage = () => {
        this.props.changePage(this.props.offset + this.props.limit);
    }

    prePage = () => {
        this.props.changePage(this.props.offset - this.props.limit);
    }

    render () {
        let total_pages = Math.ceil(this.props.count / this.props.limit);
        let cur_page    = Math.floor(this.props.offset / this.props.limit) + 1;
        let page_arr = () => {
            switch(true) {
                case (total_pages >= 5 && (cur_page === 1 || cur_page === 2)):
                    return Array.from({length: 5}, (v, i) => i + 1).map(ele => {
                        return ele === cur_page ? {value : ele, active : true} : {value : ele, active : false}
                    });
                case (total_pages >= 5 && (cur_page === total_pages || cur_page === total_pages - 1)):
                    return Array.from({length: 5}, (v, i) => total_pages - (4 - i)).map(ele => {
                        return ele === cur_page ? {value : ele, active : true} : {value : ele, active : false}
                    });
                case (total_pages < 5):
                    return Array.from({length: total_pages}, (v, i) => i + 1).map(ele => {
                        return ele === cur_page ? {value : ele, active : true} : {value : ele, active : false}
                    });
                default :
                    return Array.from({length: 5}, (v, i) => cur_page - 2 + i).map(ele => {
                        return ele === cur_page ? {value : ele, active : true} : {value : ele, active : false}
                    });
            }
        }
        return (
            total_pages === 0 ? null :
            (<Pagination>
                {cur_page === 1 ? null : (<Pagination.First onClick={() => this.firstPage()} />)}
                {cur_page === 1 ? null : (<Pagination.Prev onClick={() => this.prePage()} />)}
                {page_arr().map(ele => (
                    <Pagination.Item active={ele.active} key={ele.value} onClick={() => this.changePage(ele.value)}>
                        {ele.value}
                    </Pagination.Item>
                ))}
                {cur_page === total_pages ? null : (<Pagination.Next onClick={() => this.nextPage()} />)}
                {cur_page === total_pages ? null : (<Pagination.Last onClick={() => this.lastPage()} />)}
            </Pagination>)
        )
    }
};

export default PageChange;