import React, { useEffect, useState } from "react";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { Textarea } from "@mantine/core";

const ChatModal = ({
  selectedSenderName,
  selectedSenderSubject,
  selectedSenderBody,
  selectedSenderDate,
  selectedSenderTime,
}) => {
  return (
    <>
      <div
        className="modal fade w-100 h-100"
        id="staticBackdrop"
        data-bs-backdrop="false"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog d-flex">
          <div className="modal-content my-auto">
            <div className="modal-header">
              Notification from: {selectedSenderName}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <img
                    src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694532366/ade_ljooff.png"
                    style={{ width: "45px" }}
                    alt=""
                  />
                  <small className="my-auto">
                    Sent on: {selectedSenderDate}
                  </small>
                  <small className="my-auto">{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgray",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                    <div className="d-flex flex-column">
                    <small className="mt-3">The Admissions Team: </small>
                    <strong>Adex International School</strong>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="modal-footer d-flex w-100">
              <BsFillEmojiSmileFill size={20} color="orange" />
              <Textarea
                label=""
                placeholder="Message"
                autosize
                minRows={1}
                maxRows={4}
                style={{ width: "70%", backgroundColor: "" }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                onClick={sendMessage}
                className="btn btn-sm btn-primary"
              >
                Send
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModal;
