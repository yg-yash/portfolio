import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const timelineData = [
  {
    date: "2022 - Present",
    title: "CarXstream, Hyderabad",
    subTitle: "Co Founder & CTO",
    description: `Co-founded CarXstream, an AI-driven marketplace for the pre-owned car industry, achieving 50K+ app downloads and 5 million platform hits.
    Led the development of an AI-powered platform, integrating machine learning for:
    Pricing optimization
    Car inspection recommendations
    User personalization
    Designed and implemented a microservices architecture to enhance system scalability, performance, and reliability, supporting millions of interactions.
    Directed cross-functional teams in product development, cloud infrastructure, and AI integration, ensuring technical strategy aligned with business goals.
    Spearheaded the adoption of AWS and Google Cloud for optimized system architecture, improving uptime and reducing operational costs.`,
  },
  {
    date: "2021 - 2022",
    title: "Alumnus Software Ltd, Kolkata",
    subTitle: "Software Engineer",
    description: `Developed an AI-powered native Android application leveraging Large Language Models (LLMs) to deliver intelligent user interactions and task automation.
    Implemented advanced NLP capabilities to enhance responsiveness and streamline complex workflows.
    Developed a Bluetooth-integrated native application for a smartwatch-based health monitoring system, leveraging IoT capabilities to:
    Seamlessly sync vital data (e.g., heart rate, activity, sleep patterns) with the app.
    Enable real-time data visualization and analysis, enhancing user experience and engagement.
    Contributed as a full-stack developer to build and optimize the GCP-based backend for enhanced app performance, scalability, and secure data transmission.
    Implemented robust APIs and data encryption mechanisms to ensure seamless integration and user trust.`,
  },
  {
    date: "2020 - 2021",
    title: "DoTech Technologies, Noida",
    subTitle: "Software Engineer",
    description: `Engineered a secure full-stack product for storing user credentials with robust encryption mechanisms.
    Developed several applications, including:
    ERP software
    E-commerce apps
    Ed-tech platforms
    ensuring seamless functionality and robust security.
    Led the design and implementation of scalable backend systems, integrated payment gateways for e-commerce solutions, and optimized user experience across mobile and web platforms.
    Collaborated with cross-functional teams to deliver high-quality solutions, ensuring performance, scalability, and security in all projects.`,
  },
];

function Timeline() {
  const elementRefs = React.useRef(
    timelineData.map(() => React.createRef<HTMLDivElement>())
  );
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              ref={elementRefs.current[index]}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={item.date}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h5 className="vertical-timeline-element-sub-title">
                {item.subTitle}
              </h5>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
