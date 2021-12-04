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
        <small className="text-muted">Last updated 3 mins ago</small>
      </MDBCardFooter>
    </MDBCard>
  );
}

export default CustomCard;
