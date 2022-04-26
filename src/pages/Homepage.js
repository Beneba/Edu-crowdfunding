import React from "react";
import Layout from "../component/Layout";
import { Carousel } from "react-bootstrap";
import { MdOutlineCastForEducation, MdOutlineSupport } from 'react-icons/md';
import { FaHandsHelping } from "react-icons/fa";
import EducationPost from "../component/EducationPost";

import blackchild from "../img/black child.png";
import Learning from "../img/Learning.png";
import students from "../img/students.png";
import kids from "../img/kids.png";


function Homepage() {
  return (
    <Layout>
      
      <div className="app">
        <Carousel>
          <Carousel.Item>
            <header className="header">
              <div className="container">
                <div>
                  <h1>Fundmy Education</h1>
                  <p>
                    {" "}
                    Help others by donating to their fundraiser, or start one
                    for someone you care about.
                  </p>
                </div>
                <img className="Image" src={students} alt="black child" />
              </div>
            </header>
          </Carousel.Item>
          <Carousel.Item>
            <header className="header">
              <div className="container">
                <div>
                  <h1>We Need Your Help </h1>
                  <p>
                    {" "}
                    Help others by donating to their fundraiser, or start one
                    for someone you care about.
                  </p>
                </div>
                <img className="Image" src={kids} alt="student" />
              </div>
            </header>
          </Carousel.Item>
          <Carousel.Item>
            <header className="header">
              <div className="container">
                <div>
                  <h1>Fundmy Education</h1>
                  <p>
                    {" "}
                    Help others by donating to their fundraiser, or start one
                    for someone you care about.
                  </p>
                </div>
                <img className="Image" src={Learning} alt="black child" />
              </div>
            </header>
          </Carousel.Item>
        </Carousel>

        <section className="boxes">
          <div className="container">
            <div className="box">
            <div className="box-content text-center">

            <h3>
                {" "}
                <MdOutlineSupport  width="50px" /> <br/> Our Mission
              </h3>
              <p>
                Our Mission is to brigde the gap of poverty in education among
                children in afican.
              </p>
            </div>
              
            </div>
            <div className="box">
              <div className="box-content text-center">
              <h3>
                {" "}
                < MdOutlineCastForEducation width="50px"  /><br/> Our Support
              </h3>
              <p>
                The little you give impact much on this children. We appreciate your help you reaching out
              </p>
              </div>
              
            </div>
            <div className="box">
            <div className="box-content text-center">
            <h3>
                {" "}
                <FaHandsHelping  /> <br/> Our Sponsers
              </h3>
              <p>
                We would be excited to seek your sponsorship to help brigde the gap in education
              </p>

            </div>
              
            </div>
          </div>
        </section>

        <EducationPost />

        <Carousel fade>
          <Carousel.Item>
            <testimony className="testimony">
              <div className="container">
                <div>
                  <h2>FundEducation Stories</h2>
                  <h6>
                    <strong>Meet Chris & Marry</strong>
                  </h6>
                  <p>
                    {" "}
                    Its mush exiting to get support from our cherished loved
                    ones and to help us inspire the life of the young ones.
                  </p>
                </div>
                <img className="Image" src={students} alt="black child" />
              </div>
            </testimony>
          </Carousel.Item>
          <Carousel.Item>
            <testimony className="testimony">
              <div className="container">
                <div>
                  <h2>FundEducation Stories</h2>
                  <h6>
                    <strong>Meet Isaac & Elikem</strong>
                  </h6>

                  <p>
                    {" "}
                    Help others by donating to their fundraiser, or start one
                    for someone you care about.
                  </p>
                </div>
                <img className="Image" src={students} alt="black child" />
              </div>
            </testimony>
          </Carousel.Item>
          <Carousel.Item>
            <testimony className="testimony">
              <div className="container">
                <div>
                  <h2>Testimonies</h2>
                  <h6>
                    <strong>Meet Benjamin</strong>
                  </h6>

                  <p>
                    {" "}
                    Help others by donating to their fundraiser, or start one
                    for someone you care about.
                  </p>
                </div>
                <img className="Image" src={students} alt="black child" />
              </div>
            </testimony>
          </Carousel.Item>
        </Carousel>
      </div>
      
    </Layout>
  );
}

export default Homepage;
