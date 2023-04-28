import React from 'react'
import EventsCard from './EventsCard'
import ActivitiesHeader from './ActivitiesHeader'

const OurEvents = () => {
  return (
    <>
        <div>
            <ActivitiesHeader
              name="our events"
              content="dont miss our events"
              hrStyle={{ backgroundColor: "red" }}
            ></ActivitiesHeader>
          </div>
          <div className="d-flex w-100 gap-3">
            <EventsCard
              img="pic/bg-image-3.jpg"
              days="21"
              date="Jun"
              title="A DAY IN THE PARK"
              styles={{ backgroundColor: "#6fc191" }}
              country="nigeria"
              time="9:00am to 4:00pm"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
              btn="check it"
              btnstyle={{ backgroundColor: "#6AB78A" }}
            ></EventsCard>
            <EventsCard
              img="pic/bg-image-3.jpg"
              days="05"
              date="Jul"
              title="art session"
              styles={{ backgroundColor: "#74CEE4" }}
              country="nigeria"
              time="9:00am to 4:00pm"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
              btn="check it"
              btnstyle={{ backgroundColor: "#6FC4D9" }}
            ></EventsCard>
            <EventsCard
              img="pic/bg-image-5.jpeg"
              days="04"
              date="aug"
              title="sport & exercise day"
              styles={{ backgroundColor: "#edbf47" }}
              country="nigeria"
              time="9:00am to 4:00pm"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
              btn="check it"
              btnstyle={{ backgroundColor: "#E0B84E" }}
            ></EventsCard>
            <EventsCard
              img="pic/bg-image-4.jpg"
              days="20"
              date="aug"
              title="excursion day"
              styles={{ backgroundColor: "#ec774b" }}
              country="nigeria"
              time="9:00am to 4:00pm"
              content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum consequuntur dicta non."
              btn="check it"
              btnstyle={{ backgroundColor: "#DF764E" }}
            ></EventsCard>
          </div>
    </>
  )
}

export default OurEvents