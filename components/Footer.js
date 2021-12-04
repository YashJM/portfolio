import React from "react";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="background-primary text-center text-white content2">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/yash.jm/"
            role="button"
            target={"_blank"}
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/yashjmistry/"
            role="button"
            target={"_blank"}
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/YashJM"
            role="button"
            target={"_blank"}
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        ©<a className="text-white"> Yash Mistry</a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
