// import { Button, Modal } from "bootstrap";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";
useTranslation

const LanguageModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    onClose(); 
  };
  return (
    <>
      {/* <Modal show={isOpen} onHide={onClose} animation={true} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title className="text-uppercase">language</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("en")}>
            <span className="my-auto">English</span>
            <img
              src="pic/america.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("es")}>
            <span className="my-auto">Spanish</span>
            <img
              src="pic/spain.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("en")}>
            <span className="my-auto">German</span>
            <img
              src="pic/germany.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("en")}>
            <span className="my-auto">Chinese</span>
            <img
              src="pic/china.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("en")}>
            <span className="my-auto">French</span>
            <img
              src="pic/france.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
        </Modal.Body>
      </Modal> */}


      <Modal show={isOpen} onHide={onClose} animation={true} centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title className="text-uppercase">{t("language.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("en")} style={{cursor: "pointer"}}>
            <span className="my-auto">{t("language.english")}</span>
            <img
              src="pic/america.png"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("es")} style={{cursor: "pointer"}}>
            <span className="my-auto">{t("language.spanish")}</span>
            <img
              src="https://cdn.britannica.com/36/4336-004-6BD81071/Flag-Spain.jpg"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("de")} style={{cursor: "pointer"}}>
            <span className="my-auto">{t("language.german")}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("zh")} style={{cursor: "pointer"}}>
            <span className="my-auto">{t("language.chinese")}</span>
            <img
              src="https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          <p className="d-flex justify-content-between" onClick={() => changeLanguage("fr")} style={{cursor: "pointer"}}>
            <span className="my-auto">{t("language.french")}</span>
            <img
              src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg"
              style={{ width: "30px", height: "30px", borderRadius: "10px" }}
              alt=""
            />
          </p>
          <hr />
          {/* Add more language options in the same format */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LanguageModal;
