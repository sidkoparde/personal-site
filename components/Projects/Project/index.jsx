import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Project = props => {
  const { title, description, codeLink, viewLink, imgSrc } = props;
  return (
    <Col md="auto" className="mt-2">
      <Card
        className="shadow-lg rounded"
        style={{
          width: '22rem',
          border: '0px',
          padding: '13px 12px 13px 12px',
          margin: 'auto'
        }}
      >
        <div style={{ border: '1px solid #00000020' }} className="rounded">
          <Card.Img
            variant="top"
            src={imgSrc}
            style={{
              padding: '15px'
            }}
          />

          <Card.Body style={{ backgroundColor: '#9c9c9c08' }}>
            <Card.Title style={{ textAlign: 'center' }}>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>

          <Card.Footer>
            <div style={{ textAlign: 'center' }}>
              <Card.Link href={codeLink}>View Code</Card.Link>
              {viewLink && <Card.Link href={viewLink}>View Site</Card.Link>}
            </div>
          </Card.Footer>
        </div>
      </Card>
    </Col>
  );
};

export default Project;
