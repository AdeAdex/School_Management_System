import React from "react";
import NavigateTo from "./NavigateTo";

const NavigatoContainer = () => {
  const Prices = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "This page is currently not available at the moment. Please try again later.",
    });
  }
  return (
    <>
      <section className="navigate_to d-flex flex-sm-column flex-md-row  flex-lg-row justify-content-center w-100 mt-3 flex-wrap">
        <NavigateTo
          to_where="/our_courses"
          txt="courses"
          style={{
            backgroundColor: "#74CEE4",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
          }}
        />
        <NavigateTo onClick={Prices} txt="prices" style={{ backgroundColor: "#edbf47" }} />
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
