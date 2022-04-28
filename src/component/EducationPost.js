import React, { useState } from "react";
import { Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Groupstudy from "../img/Groupstudy.jpg";
import studentComputer from "../img/studentComputer.jpg";

import madam from "../img/madam.jpg";
import Writing from "../img/Writing.jpg";
import DonatePage from "../pages/DonatePage";

function EducationPost() {
  const [posts, setPosts] = useState([]);
  const post = [
    {
      schoolname: "Holy Innocent",
      supportType: "Support for Furniture",
      image: Groupstudy,
      description: " We  need your help to provide teaching support ",
      amount: "Ghc6000",
      id: "123245ydf",
    },
    {
      schoolname: "Nsakina M/A Basic School",
      supportType: "Support for Text Books",
      image: Writing,
      description: " We kindly seek   your support with textbooks ",
      amount: "Ghc3000",
      id: "35yhjyer4",
    },
    {
      schoolname: "St. Joseph R/C JHS ",
      supportType: "Support for Teaching & Learning Materials",
      image: madam,
      description:
        " We  need your help to provide teaching support ",
      amount: "Ghc4000",
      id: "0978je",
    },
    // {
    //   schoolname: "Kojo Ashong M/A Basic",
    //   supportType: "Support for Text Books",
    //   image: "img src={Groupstudy}",
    //   description:
    //     "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
    //   amount: "Ghc6000",
    //   id: "35yhjyer4",
    // },
    // {
    //   schoolname: "AMASAMAN Basic school ",
    //   supportType: "Support for Teaching & Learning Materials",
    //   image: "img src={Groupstudy}",
    //   description:
    //     "My brother Scott Brower was killed in a tragic accident on March 20th. He was 42 years old and has left behind his wife. Mary Elizabeth, and his 21-month old daughter Anna.",
    //   amount: "Ghc6000",
    //   id: "0978je",
    // },
  ];


    let navigate = useNavigate();
    const donatePage =()=>{
      let path = `/DonatePage`;
      navigate(path)
    }
  return (
    <div className="container-fluid">
      <div
        className="title justify-content text-center"
        style={{ color: "#fff" }}
      >
        <h3>Happening Now</h3>
      </div>

      <Row xs={12} md={12} className="g-4">
        <div id="inam" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  {/* <div className="col-sm-12 col-lg-4"> */}
                  {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
                  {post.map((post, index) => (
                    <Col>
                      <Card>
                        <Card.Img className="cardImage" img src={post.image} />
                        <Card.Body>
                          <div className="title">
                            <h3>
                              <Link to="/EduDetails"> {post.schoolname} </Link>
                            </h3>
                            <h5> {post.supportType} </h5>
                          </div>
                          <Card.Text>
                            <p> {post.description} </p>
                          </Card.Text>
                          <div className="progress">
                            <ProgressBar now={60} />
                          </div>
                          <div className="amount">
                            <p>
                              <strong> Ghc1300 raised</strong> {post.amount}
                            </p>
                          </div>
                          <Button onClick={donatePage} > Donate</Button>
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
