
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gmbrhp from "../../assets/images/gambarFooter/iconhp.png";
import Gmbremail from "../../assets/images/gambarFooter/iconemail.png";
import Gmbrtiktok from "../../assets/images/gambarFooter/icontiktok.png";
import Gmbrfb from "../../assets/images/gambarFooter/iconfb.png";
import Gmbrig from "../../assets/images/gambarFooter/iconig.png";
import Gmbrtwiter from "../../assets/images/gambarFooter/icontwiter.png";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer ">
        <Container>
          <Row>
            <Col md={2}>
              <div>
                <h3 className="mt-3 fw-bold">NDORO ARUM</h3>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h5 className="fw-bold">Tentang Kami</h5>
                <p>
                  Kami ingin para wisatawan yang ingin berkunjung di Sindoro via Banaran mendapatkan pengalaman berwisata yang menyenangkan dan
                  tidak terlupakan
                </p>
              </div>
              <div>
                <h5 className="fw-bold">Kontak Kami</h5>
                <div className="kontak">
                  <div className="d-flex gap-2">
                    <a href="">
                      <img src={Gmbrhp} alt="" />
                    </a>
                    <p>0210-1234567</p>
                  </div>
                  <div className="d-flex gap-2">
                    <a href="">
                      <img src={Gmbremail} alt="" />
                    </a>
                    <p>tourtech880@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="informasi lh-sm">
                <h5 className="fw-bold">Informasi</h5>

                <Link to="/artikel">
                  <p>Artikel</p>
                </Link>
                <Link to="/home">
                  <p>Tentang kami</p>
                </Link>
              </div>
              <div>
                <h5 className="fw-bold">Ikuti Kami</h5>
                <div className="ikutikami">
                  <Link to="http://www.tiktok.com/@tech.titans30">
                    <img src={Gmbrtiktok} alt="Ndoro Arum" srcset="" />
                  </Link>
                  <Link to="https://www.facebook.com/profile.php?id=61552141313707&mibextid=ZbWKwL">
                    <img src={Gmbrfb} alt="" srcset="" />
                  </Link>
                  <Link to="https://instagram.com/titans4741?igshid=MzRlODBiNWFlZA==">
                    <img src={Gmbrig} alt="Ndoro Arum" srcset="" />
                  </Link>
                  <Link to="">
                    <img src={Gmbrtwiter} alt="Ndoro Arum" srcset="" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <h5 className="fw-bold">Pertanyaan</h5>
              <input type="text" placeholder="kirim email anda " />
              <button className="mt-3 rounded-1 btn-footer ">Kirim</button>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-4 ">
          Copyright &copy; 2023 Ventech Dazzlers.{" "}
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;