import React from "react";
import Education from "../educational/Education";

function CtInformation() {
  return (
    <>
      <div style={{ marginTop: "10vh" }}>
        <div style={{ width: "35vw", textAlign: "center" }}>
          <h1>CONTACT INFORMATION</h1>
        </div>

        <div style={{ marginLeft: "35vw", marginRight: "35px" }}>
          <form>
            <div className="addressInformation" style={{}}>
              <label htmlFor="inputaddress" className="form-label">
                ADDRESS
              </label>
              <input
                type="address"
                className="form-control"
                id="inputaddress"
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                gap: "10px",
              }}
            >
              <div className="subdistrictinformation" style={{}}>
                <label htmlFor="subdistrict" className="form-label">
                  SUB DISTRICT
                </label>
                <input
                  type="subdistrict"
                  className="form-control"
                  id="subdistrict"
                />
              </div>
              <div className="addressInformation" style={{}}>
                <label htmlFor="district" className="form-label">
                  DISTRICT
                </label>
                <input type="district" className="form-control" id="district" />
              </div>
              <div className="addressInformation" style={{}}>
                <label htmlFor="province" className="form-label">
                  PROVINCE
                </label>
                <input type="province" className="form-control" id="province" />
              </div>
              <div className="addressInformation" style={{}}>
                <label htmlFor="postalcode" className="form-label">
                  POSTAL CODE
                </label>
                <input
                  type="postalcode"
                  className="form-control"
                  id="postalcode"
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                gap: "40px",
              }}
            >
              <div className="addressInformation" style={{ flexGrow: "1" }}>
                <label htmlFor="facebook" className="form-label">
                  FACEBOOK
                </label>
                <input type="facebook" className="form-control" id="facebook" />
              </div>
              <div className="addressInformation" style={{ flexGrow: "1" }}>
                <label htmlFor="line" className="form-label">
                  LINE ID
                </label>
                <input type="line" className="form-control" id="line" />
              </div>
              <div className="addressInformation" style={{ flexGrow: "1" }}>
                <label htmlFor="instagram" className="form-label">
                  INSTAGRAM
                </label>
                <input
                  type="instagram"
                  className="form-control"
                  id="instagram"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Education />
    </>
  );
}

export default CtInformation;
