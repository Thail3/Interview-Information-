import React from "react";
import ProfileImg from "../profileimage/ProfileImg";

function Bgprofile() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <img
            src={
              "https://res.cloudinary.com/dk7xxtqnj/image/upload/v1647083628/qpctyw8dczej4omopi4z.jpg"
            }
            alt=""
            style={{ height: "20vw", width: "100vw", objectFit: "cover" }}
          />

          <button
            style={{
              marginTop: "-40px",
              marginRight: "5px",
              padding: "5px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <i className="bi bi-camera-fill" style={{ marginRight: "5px" }}></i>
            EDIT COVER PHOTO
          </button>
        </div>
      </div>
      <ProfileImg />
      {/* <CtInformation /> */}
    </>
  );
}

export default Bgprofile;
