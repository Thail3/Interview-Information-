import React from "react";
import Interrest from "../interests-information/Interrest";

function Skill() {
  return (
    <>
      <div style={{ marginTop: "10vh" }}>
        <div style={{ width: "35vw", textAlign: "center" }}>
          <h1>SKILL INFORMATION</h1>
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
            ADD SKILL
          </button>

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{}}>PYTHON</p>

            <p style={{ margin: "0 20%" }}>3</p>

            <div className="progress" style={{ width: "15vw" }}>
              <div
                style={{ width: "30%" }}
                className="progress-bar"
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                30%
              </div>
            </div>
          </div>
        </div>
      </div>
      <Interrest />
    </>
  );
}

export default Skill;
