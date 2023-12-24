

import { Container, Row, Col } from "react-bootstrap";
import Bgimage from "../assets/images/bgsuit.jpg";
import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/fragments/NavbarComponent";
import {artikelnew} from "../data/index"

const HomePages = () => {
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  const handleScroll = () => {
    const element6 = document.querySelector(".animate-in-6");
    const element7 = document.querySelector(".animate-in-7");
    const element8 = document.querySelector(".animate-in-8");

    if (element6) {
      const elementTop6 = element6.getBoundingClientRect().top;
      setIsVisible6(elementTop6 < window.innerHeight - 100);
    }
    if (element7) {
      const elementTop7 = element7.getBoundingClientRect().top;
      setIsVisible7(elementTop7 < window.innerHeight - 100);
    }
    if (element8) {
      const elementTop8 = element8.getBoundingClientRect().top;
      setIsVisible8(elementTop8 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div div className="Home">
      <div className="header">
        <div className="h-vh-100">
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${Bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
            }}
          >
            <NavbarComponent />
             <div className="justify-content-center " style={{paddingTop:"300px" }}>
              <h1 className=" text-center text-white fs-2 fw-bold ">Ideas</h1>
              <p className=" text-center text-white text-white mb-0" 
              style={{ fontSize: "20px" }}>
                Where all our great things begin
              </p>
            </div>
        </div>
          

          <div className=" h-vh-100">
            <div
              className="bg-image"
              style={{
                backgroundSize: "cover",
                backgroundColor:"white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                height: "100vh",
              }}
            >
              {/* <div className="artikel w-100 min-vh-100"> */}
                <Container className="artikel justify-content-center w-100 min-vh-100">
                  <Row>
                    <Col>
                    <h1 className="text-center fw-bold">Artikel Terbaru</h1>
                    <p className="text-center">Halo</p>
                    </Col>
                  </Row>
                  <Row>
                    {artikelnew.map((artikel) =>{
                      return <Col key={artikel.id}  className="rounded">
                        <img src={artikel.image} alt="gambar artikel" className="mb-4 rounded-top"/>
                        <p className="justify-content-center text-start px-3">{artikel.date}</p>
                        <h5 className="judul justify-content-center text-start  fw-bold px-3">{artikel.title}</h5>
                       
                      
                      </Col>
                    })}
                    
                  </Row>
                  <div className="container-fluid">
               <div className=" d-flex align-items-center text-center justify-content-center">
                    <nav aria-label="Page-navigation" className=" align-self-center  mx-auto">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                    </div>
                    </div>
                </Container>
            </div>
          </div>
          </div>

        </div>
     
      </div>

  );
};

export default HomePages;

