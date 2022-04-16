import React from 'react';
import Pagination from "react-js-pagination";
import ContactList  from './ContactList.js';
import { Row } from 'react-bootstrap';
import ContactListService from '../service/ContactListService.js';

class FetchContactList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
      activePage:1,
      totalPages: 0,
      itemsCountPerPage:0,
      totalItemsCount:0,
      articlesDetails:[]
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.fetchURL = this.fetchURL.bind(this);
  }

  fetchURL(page) {
    ContactListService.contactListByPage(page)
      .then( response => {
          this.setState({totalItemsCount: response.data.totalElements})
          this.setState({itemsCountPerPage: response.data.size})
          this.setState({articlesDetails: response.data.content});
        }
      );
    }

  componentDidMount () {
      this.fetchURL(this.state.activePage)
    }

  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber})
    this.fetchURL(pageNumber)
  }

  populateRowsWithData = () => {
    const articleData = <Row xs={1} md={5} className="g-4">
      {this.state.articlesDetails.map((article) => (
          <ContactList key = {article.id}
                  contactName = {article.contactName}
                  contactUrl = {article.contactUrl}/>
      ))}
      </Row>
      return articleData;
    }

  render(){
    return (
      <div >
          <h2 className='text-center'>Contact List</h2>
          <hr/>
         <div className='container d-flex justify-content-center' style={{width:"50%"}}>
            <Pagination
            hideNavigation
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.itemsCountPerPage}
            totalItemsCount={this.state.totalItemsCount}
            pageRangeDisplayed={20}
            itemClass='page-item'
            linkClass='btn btn-light'
            onChange={this.handlePageChange}
            />    
          </div>
          <br/>
            {this.populateRowsWithData()}
          <br/>
      </div>
    );
  }
}

export default FetchContactList;