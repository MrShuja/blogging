import React, { useState } from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import style from './Home.css'
import AddNewBlog from '../adminControl/AddNewBlog';
import BlogManagement from '../blogMangement/BlogManagement';

const Home = () => {
    const [selectedFolder, setSelectedFolder] = useState(null);

    const handleLinkClick = (folderName) => {
      setSelectedFolder(folderName);
    };
  return (
    <Container fluid>
      <Row>
        {/* Left Section */}
        <Col xs={3} className="left-section">
          <ListGroup>
            <ListGroup.Item className="admin d-flex text-center ">
                Admin
            </ListGroup.Item>
          <ListGroup.Item action onClick={() => handleLinkClick(<AddNewBlog />)}>
              Add new Blog
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick(<BlogManagement />)}>
              Bolgs Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('Content Management')}>
              Content Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('Analytics and Reporting')}>
              Analytics and Reporting
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('Media Management')}>
              Media Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('Comments Management')}>
              Comments Management
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('User Feedback')}>
              User Feedback
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => handleLinkClick('Notifications')}>
              Notifications
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Right Section */}
        <Col xs={9} className="right-section">
          {selectedFolder && (
            <>
              <h1>{selectedFolder}</h1>
              {/* {selectedFolder === 'User Management' && <UserManagement />} */}
              {/* Add other folder components as needed */}
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
