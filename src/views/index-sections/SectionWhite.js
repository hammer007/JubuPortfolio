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

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="12">
              <blockquote className="blockquote">
                <p className="mb-0 alert-link">I am always doing that which I cannot do, in order that I may learn how to do it.</p>
                <footer className="blockquote-footer alert-link">Pablo Picasso</footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
