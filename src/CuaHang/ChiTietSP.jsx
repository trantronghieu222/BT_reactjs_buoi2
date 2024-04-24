import React from "react";

const ChiTietSP = (props) => {
  const {chiTietSP} = props;
  return (
    <div>
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Chi tiết sản phẩm
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img
                  style={{ width: "50%", margin: "auto" }}
                  src={chiTietSP.image}
                />
                <div className="card-body">
                  <h3>{chiTietSP.name}</h3>
                  <p>{chiTietSP.price} $</p>
                  <p>{chiTietSP.description}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                {/* <button type="button" className="btn btn-primary">
                  Save
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    </div>
  );
};

export default ChiTietSP;
