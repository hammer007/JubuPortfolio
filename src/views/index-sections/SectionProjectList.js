/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Button } from 'reactstrap';

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
function SectionNavigation() {
  return (
    <>
      <div className="section section-navigation">
        <Container className="tim-container">
          <div className="title text-center">
            <h3 className="alert-link">Browse Projects</h3>
          </div>
        </Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-success alert-link">
                  <CardTitle>Project 1</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Masters Thesis</CardSubtitle>
                  <CardText className="text-left"> 
                  </CardText>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>Time Period: June 2019 -- April 2020
                      </li>  
                      <li>
                        This study presents a machine learning-based approach for classifying
                        the role-stereotype of classes in UML class diagrams. We have established a ground truth by manually 
                        labelling 391+ classes from 15 open source projects (using various programming languages). We analyze 
                        the performance of the machine learning approach with the manually established ground truth. Besides, 
                        we show a comparison between our approach and another machine learning approach from an earlier case 
                        study which is based on source code.
                      </li> 
                    </ul>
                  </details>  
                  <CardLink
                      data-placement="bottom"
                      href="https://github.com/hammer007/umlRoleIdentifier"
                      target="_blank"
                      title="My repo on GitHub"
                    >
                      <i className="fa fa-github" />
                      <p className="d-lg-none">GitHub</p>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-warning alert-link">
                  <CardTitle>Project 2</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Swisslog Warehouse Management system.</CardSubtitle>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>
                        Time Period: September 2018 -- November 2019
                      </li>
                      <li>
                        Platform: Windows, Language: Java SE & EE (Spring, Hibernate, JBoss), sql, jpql, 
                        json and xhtml. Application Software: Eclipse
                      </li>  
                      <li>
                        We worked on a base product (SynQ) for automating the logistics of a warehouse. We developed
                        different functionalities based on the customer requirements. In Swisslog, we have followed
                        agile approach and used agile practices for completing different projects. There, I worked
                        mostly as a back-end developer, where I needed to write code in JAVA. Besides, I needed to
                        write unit test, system test and integration test. Moreover, I worked with front end development
                        if needed, where I needed to use xhtml.
                      </li> 
                    </ul>
                  </details>                  
                  <CardLink
                      data-placement="bottom"
                      href="https://www.swisslog.com/en-us/products-systems-solutions/software-inventory-management/synq-warehouse-management-system-wms-mfcs"
                      target="_blank"
                      title="Swisslog Product"
                    >
                      <i className="fa fa-minus-circle" />
                      <p className="d-lg-none">SynQ</p>
                  </CardLink>
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-info alert-link">
                  <CardTitle>Project 3</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Print Book</CardSubtitle>
                  <CardText className="text-left"> 
                  </CardText>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>
                        Time Period: September 2017 -- November 2017
                      </li>
                      <li>
                        Platform: Windows, Language: Java, PHP. Application Software: Android Studio
                      </li>  
                      <li>
                        An android Application. Our team consisted of 5 members. We have followed an agile approach. For
                        solving most of the tasks, we did pair programming. This application was created to use with a 
                        3D printer. I have worked with the database handling, merging functionalities from another application,
                        authorization etc. Sometime I played the role of scrum master in our team.
                      </li> 
                    </ul>
                  </details>
                  <CardLink
                      data-placement="bottom"
                      href="https://github.com/hammer007/2017Group5"
                      target="_blank"
                      title="My repo on GitHub"
                    >
                      <i className="fa fa-github" />
                      <p className="d-lg-none">GitHub</p>
                  </CardLink>                     
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-success alert-link">
                  <CardTitle>Project 4</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Aviato</CardSubtitle>                   
                  <CardText className="text-left"> 
                  </CardText>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>
                        Time Period: March 2017 -- May 2017
                      </li>
                      <li>
                        Platform: Windows, Language: Java. Application Software: Android Studio
                      </li>  
                      <li>
                        An android application; Which gives the user notifications, updates about his/her subscribed
                        flights. Our team consists of 7 members. I was responsible for creating filters for airlines,
                        time-interval filter, collecting data from an external API and displaying that information
                      </li> 
                    </ul>
                  </details>
                  <CardLink
                      data-placement="bottom"
                      href="https://github.com/"
                      target="_blank"
                      title="No repo on GitHub"
                    >
                      <i className="fa fa-minus-circle" />
                      <p className="d-lg-none">GitHub</p>
                  </CardLink>  
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-warning alert-link">
                  <CardTitle>Project 5</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Dagen Lunch</CardSubtitle>
                  <CardText className="text-left"> 
                  </CardText>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>
                        Time Period: January 2017 -- March 2017
                      </li>
                      <li>
                        Platform: Windows, Language: Java. Application Software: Android Studio
                      </li>  
                      <li>
                        This android application is useful for people who are seeking lunch restaurant around Gothenburg.
                        There were 5 members in our team. I was responsible for creating location based search,
                        adding API for mapping, displaying current user location, distance and time based on different
                        restaurants etc.
                      </li> 
                    </ul>
                  </details>
                  <CardLink
                      data-placement="bottom"
                      href="https://github.com"
                      target="_blank"
                      title="No repo on GitHub"
                    >
                      <i className="fa fa-minus-circle" />
                      <p className="d-lg-none">GitHub</p>
                  </CardLink>  
                </CardBody>
              </Card>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="4">
              <Card style={{width: '20rem'}}>
                <CardBody className="bg-info alert-link">
                  <CardTitle>Project 6</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Bachelor's Thesis/Project</CardSubtitle>
                  <CardText className="text-left"> 
                  </CardText>
                  <details class="details-example text-left">
                    <summary>Project Description</summary>
                    <ul>
                      <li>
                        Time Period: July 2014 -- December 2014
                      </li>
                      <li>
                        Platform: Windows. Language: MATLAB script. Application software: MATLAB.
                      </li>  
                      <li>
                        We were 4 members in our team. As our problem was weeds classification, we were 
                        trying to identify the weeds comparing to the crops. We have collected images
                        of weeds and then analyzed them using MATLAB. We have used digital image processing 
                        technique to do that. 
                      </li> 
                    </ul>
                  </details>
                  <CardLink
                      data-placement="bottom"
                      href="https://github.com"
                      target="_blank"
                      title="My repo on GitHub"
                    >
                      <i className="fa fa-minus-circle" />
                      <p className="d-lg-none">GitHub</p>
                  </CardLink>  
                </CardBody>
              </Card>
            </Col>
          </Row>                              
      </div>{" "}
    </>
  );
}

export default SectionNavigation;
