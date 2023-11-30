// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { data } from "./FacultyMember";
// import Card from 'react-bootstrap/Card';
// const Faculty = () => {
//   return (
//     <>
//       <h1 className="text-center">
//         Department of Engineering and Technological Studies
//       </h1>
//       <Container>
//         <Row>
//           <span className="d-block">
//             <p>
//               Department of Engineering &amp; Technological Studies (Formerly
//               University Science InstrumentationCentre or USIC) was established
//               in the year 1978 by the University Grants Commission (UGC).{" "}
//             </p>
//           </span>

//           <p>
//             With an aim at promoting the Centre and to diversify its activity,
//             the UGC subsequently upgraded it to Level-III,
//           </p>
//         </Row>
//        <Col className="text-center">
//        <Card className=" border-0" style={{width:"300px",height:'200px'}}>
//           {data.map((item) => (
//             <Row key={item.id}>
//               <Card>
//                 <Card.Img src={item.image}  alt="hod image"
//                 style={{width:"150px",height:"150px"}}
                
//                 className="mx-auto"
//                 />
//                <Card.Body>
//                <Card.Title>{item.name}</Card.Title>
//                 <Card.Text>{item.department}</Card.Text>
//                 <Card.Text>{item.title}</Card.Text>
//                 <b>
//                   {" "}
//                   <Card.Text>{item.email}</Card.Text>
//                 </b>
//                </Card.Body>
//               </Card>
//             </Row>
//           ))}
//         </Card>
//        </Col>
//       </Container>
//     </>
//   );
// };

// export default Faculty;




import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "./FacultyMember";
import Card from 'react-bootstrap/Card';

const Faculty = () => {
  return (
    <>
      <h1 className="text-center">
        Department of Engineering and Technological Studies
      </h1>
      <Container>
        <Row>
          <span className="d-block">
            <p>
              Department of Engineering & Technological Studies (Formerly
              University Science Instrumentation Centre or USIC) was established
              in the year 1978 by the University Grants Commission (UGC).{" "}
            </p>
          </span>
          <p>
            With an aim at promoting the Centre and to diversify its activity,
            the UGC subsequently upgraded it to Level-III,
          </p>
        </Row>
        <Row className="justify-content-center">
          {data.map((item) => (
            <Col key={item.id} className="mb-4">
              <Card className="border-0" style={{ width: "300px", height: '200px' }}>
                <Card.Img src={item.image} alt="hod image" style={{ width: "150px", height: "150px" }} className="mx-auto" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.department}</Card.Text>
                  <Card.Text>{item.title}</Card.Text>
                  <b>{item.email}</b>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Faculty;
