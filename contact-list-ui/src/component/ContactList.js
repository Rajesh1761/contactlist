import React from 'react';
import { Card, Col } from 'react-bootstrap';
function ContactList (props) {
  let styles = {
    height: '104px',
    width:'120px'
  };
  return (
    <Col>
      <Card  style={{width: "62%",textAlign:"center"}}>
        <Card.Body>
           <img src={props.contactUrl} className="card-img-top" alt="Loading.." style={styles}></img>
           <p className="card-title">{props.contactName}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ContactList;