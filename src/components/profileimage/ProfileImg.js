import React from "react";
import CtInformation from "../contact-information/CtInformation";

function ProfileImg() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", position: "relative" }}>
          <img
            src={
              "https://res.cloudinary.com/dk7xxtqnj/image/upload/v1646204155/p5u2fd5fl3ano9imjx8l.jpg"
            }
            alt=""
            style={{
              width: "20vw",
              height: "20vw",
              border: "5px solid white",
              borderRadius: "50%",
              marginTop: "-40%",
              marginLeft: "50px",
              objectFit: "cover",
            }}
          />
          <button
            style={{
              width: "50px",
              height: "50px",
              // marginTop: "20px",
              // marginLeft: "-35px",
              border: "none",
              borderRadius: "50%",
              position: "absolute",
              left: "90%",
              top: "10%",
            }}
            type="button"
          >
            <i className="bi bi-camera-fill" style={{ fontSize: "30px" }}></i>
          </button>
        </div>

        <div
          style={{
            marginLeft: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <form
            style={
              {
                // display: "flex",
                // justifyContent: "space-between",
                // flexDirection: "column",
                // width: "15%",
              }
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputusername" className="form-label">
                  USERNAME
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputusername"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputnickname" className="form-label">
                  NICKNAME
                </label>
                <input
                  type="nickname"
                  className="form-control"
                  id="inputnickname"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputfirstname" className="form-label">
                  FIRSTNAME
                </label>
                <input
                  type="firstname"
                  className="form-control"
                  id="inputfirstname"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputlastname" className="form-label">
                  LASTNAME
                </label>
                <input
                  type="lastname"
                  className="form-control"
                  id="inputlastname"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputposition" className="form-label">
                  POSITION
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputposition"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputusername" className="form-label">
                  NATIONNALITY
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputusername"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputusername" className="form-label">
                  TELEPHONE NUMBER
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputusername"
                />
              </div>
              <div style={{ width: "30vw", marginTop: "30px" }}>
                <label htmlFor="inputusername" className="form-label">
                  STARTING DATE
                </label>
                <input
                  type="username"
                  className="form-control"
                  id="inputusername"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <CtInformation />
    </>
  );
}

export default ProfileImg;
