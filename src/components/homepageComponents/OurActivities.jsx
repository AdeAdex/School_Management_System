import React from "react";
import ActivitiesHeader from "../generalComponents/ActivitiesHeader";
import ActivitiesContainer from "../generalComponents/ActivitiesContainer";

const OurActivities = () => {
  return (
    <>
      <div>
        <ActivitiesHeader
          classes="activities activities-color"
          name="our activities"
          content="our best service for your kids"
          hrStyle={{ backgroundColor: "#edbf47" }}
        ></ActivitiesHeader>
        <section className="activities-container mb-5 pb-5 d-flex flex-wrap w-100">
        <ActivitiesContainer
            title="Academic Excellence"
            icon="fas fa-graduation-cap fs-1"
            style={{ color: "#3F51B5" }}
            content="Committed to your child's success, we provide one-on-one tutoring, interactive group study sessions, and personalized learning plans. Our goal is to empower students with essential skills and knowledge, enabling them to surpass academic aspirations and build a brighter future."
          />
          
          <ActivitiesContainer
            title="Diverse Sports Participation."
            icon="fas fa-person-skiing fs-1"
            style={{ color: "#EC774B" }}
            content="Our sports programs offer more than just physical activity. They promote holistic development by teaching teamwork, discipline, and sportsmanship. Your child will engage in various sports, improving physical fitness, building self-confidence, and creating lasting memories on the field or court."
          />
          <ActivitiesContainer
            title="Creative Development"
            icon="fas fa-lightbulb text-primary fs-1"
            content="From captivating theater productions to immersive art classes, we encourage self-expression and artistic growth in your child. Our creative arts programs provide a platform for students to explore their talents, expand their horizons, and develop a deep appreciation for the arts, fostering a lifelong love for creativity."
          />
          <ActivitiesContainer
            title="Free Bus Services"
            icon="fas fa-bus fs-1"
            style={{ color: "#CDDC39" }}
            content="Join us for exhilarating bus-free outdoor expeditions that inspire teamwork, resilience, self-discovery. Students embark on exciting journeys, connecting with nature, bonding with peers, honing leadership skills, creating unforgettable, transformative, life-changing memories."
          />
          <ActivitiesContainer
            title="Community Involvement"
            icon="fas fa-hands-holding-child fs-1"
            style={{ color: "#FFC107" }}
            content="We emphasize giving back and fostering active participation in community service. Through meaningful volunteer work, your child not only develops empathy and social responsibility but also forges a profound connection to the world, shaping their character for life."
          />
          
          <ActivitiesContainer
            title="Excursion And Workshops"
            icon="fas fa-earth-europe fs-1"
            style={{ color: "#FF5722" }}
            content="Our dynamic workshops spanning STEM to the arts ignite curiosity, foster creativity, and promote critical thinking in secondary school students. Complemented by exciting excursions to science centers and museums, we provide a holistic and immersive educational experience."
          />
        </section>
      </div>
    </>
  );
};

export default OurActivities;
