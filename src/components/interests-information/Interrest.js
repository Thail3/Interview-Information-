import React from "react";
import Guild from "../guild-information/Guild";

function Interrest() {
  return (
    <>
      <div style={{ marginTop: "10vh" }}>
        <div style={{ width: "35vw", textAlign: "center" }}>
          <h1>INTERESTS INFORMATION</h1>
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
            ADD INTERESTS
          </button>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div
              style={{
                width: "100px",
                marginTop: "10px",
                marginRight: "15px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#32D6E5",
              }}
            >
              <div style={{ padding: "5px" }}>
                <span style={{ color: "white", marginLeft: "10px" }}>SONG</span>
                <i
                  type="button"
                  className="bi bi-x-circle"
                  style={{ color: "white", marginLeft: "10px" }}
                ></i>
              </div>
            </div>

            <div
              style={{
                width: "100px",
                marginTop: "10px",
                marginRight: "15px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "#32D6E5",
              }}
            >
              <div style={{ padding: "5px" }}>
                <span style={{ color: "white", marginLeft: "10px" }}>
                  TRAVEL
                </span>
                <i
                  type="button"
                  className="bi bi-x-circle"
                  style={{ color: "white", marginLeft: "10px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Guild />
    </>
  );
}

export default Interrest;
