import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Lottie from "react-lottie";
import code2 from "../animations/icons/code2.json";

function CustomCard({ data, title }) {
  return (
    <MDBCard className="text-center skill-card w-100 flex-wrap">
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          <MDBListGroup>
            {data.map((d) => <MDBListGroupItem>{d}</MDBListGroupItem>)}
          </MDBListGroup>
        </MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <small className="text-muted">

          {<Lottie
            height={50}
            width={50}
            isClickToPauseDisabled={true}
            className="fluid-svg"
            options={{ loop: true, autoplay: true, animationData: code2 }} />}

        </small>
      </MDBCardFooter>
    </MDBCard>
  );
}

export default CustomCard;
