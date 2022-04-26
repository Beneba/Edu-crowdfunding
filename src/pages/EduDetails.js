import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
} from "react-bootstrap";
import Layout from "../component/Layout";
import Groupstudy from "../img/Groupstudy.jpg";

function EduDetails() {
  // const [post, setPost] =useState([
  //  {
  //     Schoolname: 'Holy Innocent',
  //   supportType:"Support for Furniture",
  //   image : "img src ={Groupstudy}",
  //   description:  "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
  //   amount: "Ghc6000",
  //   },
  //   {
  //     Schoolname: 'Holy Innocent',
  //   supportType:"Support for Furniture",
  //   image : "img src={Groupstudy}",
  //   description:  "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
  //   amount: "Ghc6000",
  //   },
    
  // ])

  return (
    <Layout>
      
      <Container className="containerDetails">
        <Row>
          <Col xs={12} md={8}>
            <div className="holder">
              <div className="title">
                <p>Holy Innocent Anglican</p>
              </div>
              <div className="educImage">
                <img src={Groupstudy} />
              </div>
              <div className="username">
                <p>Beneba foundation</p>
              </div>
              <hr />
              <div className="dateTime">
                <p>created: 2nd April, 2022</p>
              </div>
              <hr />
              <div className="description">
                <p>
                  My brother Scott Brower was killed in a tragic accident on
                  March 20th. He was 42 years old and has left behind his wife,
                  Mary Elizabeth, and his 21-month old daughter Anna. Many of
                  you have asked how you can help our family during this
                  terrible time. If you would like to help fund Anna's
                  education, please make a contribution here. Thank you! ***
                  Scott Brower was the beloved husband of Mary Elizabeth Brower
                  and father of Anna Grace Brower (21 months), son of Alan and
                  Michele Brower, brother of Carleigh Brower Murphy, and
                  brother-in-law of Scott “Murph” Murphy. He is also survived by
                  his father-in-law Robert
                </p>
              </div>
              <div className="actionBtn">
                <div className="donate">
                  <Button> DONATE</Button>
                </div>
                <div className="share">
                  <Button> SHARE</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col xs="12" md="4">
            <Card className="card">
              <div className="donation-amt">
                <p>
                  <strong>Ghc1357</strong> raised of Ghc6000 goal
                </p>
                <div className="progress">
                  <ProgressBar now={60} />
                </div>
              </div>
              <div className="btn">
                <div className="donate_1">
                  <Button> DONATE</Button>
                </div>
                <div className="share_1">
                  <Button> SHARE</Button>
                </div>
              </div>
            </Card>
          </Col>
          {/* <Col xs lg="2">
            3 of 3
          </Col> */}
        </Row>
      </Container>
    </Layout>
  );
}

export default EduDetails;
