import React, {useState} from "react";
import {Row, Col, Card,ProgressBar, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Groupstudy from "../img/Groupstudy.jpg";



function EducationPost( ) {
  const [post, setPost] = useState([
    {
    Schoolname: 'Holy Innocent',
     supportType:"Support for Furniture",
     image : "img src ={Groupstudy}",
     description:  "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
     amount: "Ghc6000",
     },
     {
    Schoolname: 'Holy Innocent',
     supportType:"Support for Furniture",
     image : "img src={Groupstudy}",
     description:  "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
     amount: "Ghc6000",
     },
     {
    Schoolname: 'Holy Innocent',
    supportType:"Support for Furniture",
    image : "img src={Groupstudy}",
    description:  "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
    amount: "Ghc6000",
    },
     
   ])

  return (
    <div className="container-fluid">
      <div className ="title justify-content text-center">
        <h3>Happening Now</h3>
      </div>
      
      <Row xs={12} md={12} className="">
        <div id="inam" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  {/* <div className="col-sm-12 col-lg-4"> */}
                  {Array.from({ length: 3 }).map((_, idx) => (
          // {post.map((post, index)=>(
            <Col>
            <Card>
              <Card.Img variant="top" className="cardImage" src={Groupstudy} />
              <Card.Body>
                  <div className ="title">
                    <h3><Link to ="/EduDetails"> Holy Innocent Anglican </Link></h3>
                    <h5> Support for Furniture </h5>
                </div>
                <Card.Text>
                <p> Help by donating chairs to our school. </p>
                 
                </Card.Text>
                <div className="progress">
                    <ProgressBar now={60} />
                </div>
                <div className="amount">
                    <p><strong> Ghc1300 raised</strong> Ghc60000 </p>
                </div>
                <Button> Donate</Button>
              </Card.Body>
            </Card>
          </Col>
          // )) }
          
    
         ))} 

                  {/* </div> */}
                </div>
              </div>

            </div>
          </div>
          <Link to="#inam" className="carousel-control-prev" data-slide="prev">
            <span className=" carousel-control-prev-icon"></span>
          </Link>
          <Link to="#inam" className="carousel-control-next" data-slide="next">
            <span className=" carousel-control-next-icon"></span>
          </Link>
        </div>
     
      </Row>
    </div>
  );
}

export default EducationPost;
