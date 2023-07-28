import React, { useEffect, useState } from "react";
import { FaUserTie} from "react-icons/fa";
import { Textarea } from "@mantine/core";

const ChatModal = ({selectedSenderName, selectedSenderSubject, selectedSenderBody, selectedSenderDate, selectedSenderTime, socket}) => {
  useEffect(() => {
    if (socket.current) {
      socket.current.on("brodcastMsg", (receivedMessage) => {
        console.log(receivedMessage);
      });
    }
  }, []);

  const [message, setMessage] = useState("");
  const [allmessages, setAllmessages] = useState([]);

  const sendMessage = () => {
    socket.current.emit("sentMsg", message);
    setAllmessages([...allmessages, message]);
  };
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
              {/* <div className="modal-title d-flex" id="staticBackdropLabel">
                <img src="/pic/avatar.png" style={{ width: "50px" }} alt="" />
                <div className="my-auto d-flex flex-column">
                  <small>{selectedSenderName}</small>
                  <small>Active 2h ago</small>
                </div>
              </div> */}
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
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div>
              {/* <div className="mb-4">
                <div className="d-flex mb-4 gap-2 w-100 justify-content-center">
                  <small>{selectedSenderDate}</small>
                  <small>{selectedSenderTime}</small>
                </div>
                <div className="d-flex gap-2">
                  <img src="/pic/avatar.png" style={{ width: "45px" }} alt="" />
                  <div
                    className="my-auto p-2"
                    style={{
                      backgroundColor: "lightgreen",
                      borderRadius: "10px",
                    }}
                  >
                    {selectedSenderBody}
                  </div>
                </div>
              </div> */}
            </div>
            <div>
              {allmessages.map((msg, index) => (
                <div key={index}>{msg}</div>
              ))}
            </div>

            <div className="modal-footer d-flex w-100">
              <FaUserTie size={20} color="gray" />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModal;
