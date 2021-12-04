import DevAnimation from "../animations/lf30_editor_iaoohpbm.json";
import Lottie from "react-lottie";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow, MDBCol,
  MDBCardImage,
  MDBCardHeader,
  MDBBtn,
  MDBCardFooter,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
  MDBBadge
} from "mdb-react-ui-kit";
import "swiper/css/bundle";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../components/CustomCard";
import data from '../data/data';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import Title from 'react-vanilla-tilt'
import CustomBadge from "../components/CustomBadge";

export default function Home() {

  const defaultOptionsDev = {
    loop: true,
    autoplay: true,
    animationData: DevAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Row>
        <Col className="d-flex flex-column justify-content-center" md={6}>
          <h1 className="text-sky-400">Hi, I am Yash!</h1>
          <h3>What do I do? Glad you asked!</h3>
          <Title className="w-100" options={{ reverse: false, glare: true, "max-glare": 1, "glare-prerender": false }}>
            <MDBCard data-aos-mirror="true"
              data-aos="fade-right" className="custom-card1"
            >
              <MDBCardImage className="img-fluid" src={'/images/yjmcode.png'} waves />
            </MDBCard>
          </Title>

        </Col>
        <Col md={6}>
          <div data-aos="fade-left">
            <Lottie
              isClickToPauseDisabled={true}
              className="fluid-svg"
              options={defaultOptionsDev}
            />
          </div>
        </Col>
      </Row>
      <div className="content">
        <h1 className="text-center">
          <Typist>
            My Tech Stack.
          </Typist>
        </h1>
      </div>

      <div data-aos="fade-up" className="content">

        <MDBContainer>
          <MDBRow>
            <MDBCol size='md'>
              <CustomCard key={"BackEnd"} title={"BackEnd"} data={data.Backend} />
            </MDBCol>
            <MDBCol size='md'>
              <CustomCard key={"FrontEnd"} title={"FrontEnd"} data={data.Frontend} />
            </MDBCol>
            <MDBCol size='md'>
              <CustomCard key={"Database"} title={"Database"} data={data.Db} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

      </div>

      <div className="content">
        <h1 className="text-center">
          <Typist>
            Projects.
          </Typist>
        </h1>

        <div className="content">
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
            <MDBCol>
              <Title className="w-100 m-0">
                <MDBCard className="shadow-none" style={{ maxWidth: '22rem' }}>
                  <MDBCardBody>
                    <MDBCardTitle className="card-title">AdvanceProfileSearch</MDBCardTitle>
                    <MDBCardText>lightweight filter and search app to allow searching through list of profiles and also add custom tags and search by tags.
                    </MDBCardText>
                    <div className="d-flex justify-content-start align-items-center">
                      <MDBBtn target="_blank" className="button-secondary" href='https://github.com/YashJM/AdvanceProfileSearch'>
                        <MDBIcon fab icon='github' />
                      </MDBBtn>
                      <MDBBtn target="_blank" className='m-1 custom-btn-primary' href='https://profilesearchandfilter.netlify.app/'>
                        <MDBIcon fas icon="external-link-alt" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">ReactJs</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">MaterialUI</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">NodeJs</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">MongoDB</MDBBadge>
                    <CustomBadge text={"JavaScript"} />
                  </MDBCardFooter>
                </MDBCard>
              </Title>
            </MDBCol>


            <MDBCol>
              <Title className="w-100 m-0">
                <MDBCard className="shadow-none" style={{ maxWidth: '22rem' }}>
                  <MDBCardBody>
                    <MDBCardTitle className="card-title">Todo List App</MDBCardTitle>
                    <MDBCardText>
                      A simple TODO list App created with React.Js ⚛️ , Node.js and MongoDB which performs some of the basic CRUD operations
                    </MDBCardText>
                    <div className="d-flex justify-content-start align-items-center">
                      <MDBBtn target="_blank" className="button-secondary" href='https://github.com/YashJM/todolistapp-mern'>
                        <MDBIcon fab icon='github' />
                      </MDBBtn>
                      <MDBBtn target="_blank" className='m-1 custom-btn-primary' href='https://todolist-mern-a433cb.netlify.app/'>
                        <MDBIcon fas icon="external-link-alt" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">ReactJs</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">MaterialUI</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">ReactJs</MDBBadge>
                    <CustomBadge text={"JavaScript"} />
                  </MDBCardFooter>
                </MDBCard>
              </Title>
            </MDBCol>

            <MDBCol>
              <Title className="w-100 m-0">
                <MDBCard className="shadow-none" style={{ maxWidth: '22rem' }}>
                  <MDBCardBody>
                    <MDBCardTitle className="card-title">StudentsDummyData-API</MDBCardTitle>
                    <MDBCardText>Node js and MongoDB Rest API to get a list of dummy students data
                    </MDBCardText>
                    <div className="d-flex justify-content-start align-items-center">
                      <MDBBtn target="_blank" className="button-secondary" href='https://github.com/YashJM/StudentsDummyData-API'>
                        <MDBIcon fab icon='github' />
                      </MDBBtn>
                      <MDBBtn target="_blank" className='m-1 custom-btn-primary' href='https://studentsdataapi.herokuapp.com/list'>
                        <MDBIcon fas icon="external-link-alt" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter className='text-muted'>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">NodeJs</MDBBadge>
                    <MDBBadge className='cursor-pointer custom-margin-right' tag="a" color="none">MongoDB</MDBBadge>
                    <CustomBadge text={"JavaScript"} />
                  </MDBCardFooter>
                </MDBCard>
              </Title>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    </>
  );
}
