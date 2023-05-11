import React from "react";
import NavigateTo from "./NavigateTo";

const NavigatoContainer = () => {
  return (
    <>
      <section className="navigate_to d-flex flex-sm-column flex-md-row  flex-lg-row justify-content-center w-100 mt-3 flex-wrap">
        <NavigateTo
          to_where="/ournews"
          txt="courses"
          style={{
            backgroundColor: "#74CEE4",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <NavigateTo txt="prices" style={{ backgroundColor: "#edbf47" }} />
        <NavigateTo
          to_where="/ourevent"
          txt="events"
          style={{ backgroundColor: "#ec774b" }}
        />
        <NavigateTo
          to_where="/ourteachers"
          txt="teachers"
          style={{
            backgroundColor: "#6fc191",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
          }}
        />
      </section>
    </>
  );
};

export default NavigatoContainer;
