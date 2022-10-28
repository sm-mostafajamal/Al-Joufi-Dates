import Card from 'react-bootstrap/Card';

function AboutUs() {
  const cover = require('../images/Cover/cover.webp')
  return (
    <>
      <Card className='cover' >
        <Card.Img className='coverImg' variant="top" src={cover} />
        <Card.Body>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Error perferendis, quibusdam quo vitae tempora at quae qui ipsa fuga minima delectus omnis aperiam ex
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, at, ad possimus autem asperiores harum, magnam minus laborum esse ratione quam dolorem sapiente. Qui quidem id modi at obcaecati atque.
            <h6>Export countries/clients: United kingdom,  United States of America, Turkey, Dubai, India, Bangladesh, Pakistan.</h6>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default AboutUs;