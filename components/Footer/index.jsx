import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../Layout';

const Footer = () => (
  <Layout>
    <footer style={{ height: '15vh', paddingTop: '50px' }}>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <p style={{ textAlign: 'center' }}>
            This site was made using React and Bootstrap.
            <p>
              <a href="https://github.com/sidkoparde/personal-site">View Code</a>
            </p>
          </p>
        </Col>
      </Row>
    </footer>
  </Layout>
);

export default Footer;
