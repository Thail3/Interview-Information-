import React from "react";
import Skill from "../skill-information/Skill";

function Experience() {
  return (
    <>
      <div style={{ marginTop: "10vh" }}>
        <div style={{ width: "35vw", textAlign: "center" }}>
          <h1>EXPERIENCE INFORMATION</h1>
        </div>

        <div style={{ marginLeft: "35vw", marginRight: "35px" }}>
          <button
            style={{
              border: "1px solid #3498DB",
              color: "#3498DB",
              padding: "10px",
              fontWeight: "bold",
              background: "none",
              borderRadius: "20px",
            }}
          >
            ADD EXPERIENCE
          </button>

          <div style={{ display: "flex", position: "relative" }}>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "18px",
                  backgroundColor: " #3498DB",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              ></span>
              <div
                style={{
                  borderLeft: " 1px solid black",
                  paddingTop: "10px",
                  marginLeft: "20px",
                }}
              >
                <p style={{ marginLeft: "45px" }}>YOUR EXPERIENCE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skill />
    </>
  );
}

export default Experience;
