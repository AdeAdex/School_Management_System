import React from 'react'
import NavigateTo from './NavigateTo'

const NavigatoContainer = () => {
  return (
    <>
        <section className="d-flex flex-column flex-lg-row justify-content-center w-100 mt-3">
            <NavigateTo
              txt="courses"
              style={{
                backgroundColor: "#74CEE4",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
              }}
            />
            <NavigateTo txt="prices" style={{ backgroundColor: "#edbf47" }} />
            <NavigateTo txt="events" style={{ backgroundColor: "#ec774b" }} />
            <NavigateTo
              txt="teachers"
              style={{
                backgroundColor: "#6fc191",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          </section>
    </>
  )
}

export default NavigatoContainer