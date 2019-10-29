import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';

import Layout from '../Layout';

const Projects = () => (
  <Layout>
    <Row className="justify-content-md-center" style={{ padding: '10px' }}>
      <Col md="auto">
        <h3 style={{ margin: 'auto', textAlign: 'center' }}>Projects</h3>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Project
        title="Python Flask API"
        description="A JSON API made using Flask, Python, and SQLite"
        imgSrc="static/images/python-flask.png"
        codeLink="https://github.com/sidkoparde/python-flask-api"
      />
      <Project
        title="React GitHub Dashboard"
        description="A Dashboard made with React and Bootstrap that can query GitHub repositories. 
          You can then add repos to a list of favourites."
        imgSrc="static/images/github-dashboard.png"
        codeLink="https://github.com/sidkoparde/react-github-dashboard"
        viewLink="https://react-github-dashboard.herokuapp.com/"
      />
      <Project
        title="NodeJS API"
        description="A JSON API made with NodeJS and Docker. I use PostgreSQL for the database and 
        JSON Web Tokens for authentication. I've written tests using Chai and 
        Mocha."
        imgSrc="static/images/nodejs-docker.png"
        codeLink="https://github.com/sidkoparde/NodeJS-Docker-API"
      />
    </Row>
  </Layout>
);

export default Projects;
