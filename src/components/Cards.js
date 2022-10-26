import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards() {
  const datesDetails = [
    {
      name : "Mabroom",
      image : "Mabroom.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptatum nihil, incidunt suscipit tempora ab" 
    },
    {
      name : "Mariam",
      image : "Mariam.webp",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptatum nihil, incidunt suscipit tempora ab" 
    }, 
    {
      name : "mariam1",
      image : "mariam1.jpg",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptatum nihil, incidunt suscipit tempora ab" 
    },
    {
      name : "Mashrook",
      image : "mashrook.webp",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptatum nihil, incidunt suscipit tempora ab" 
    }
  ]

  return (
    <Row xs={1} md={2} className="g-4">
      {datesDetails.map((dates, idx) => (
        <Col key={idx}>
          <a href='#test' className='card-link'>  
          <Card>
            <Card.Img variant="top" src={require(`../images/Dates/${dates.image}`)}/>
            <Card.Body>
              <Card.Title>{dates.name}</Card.Title>
              <Card.Text>
                {dates.text}
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;