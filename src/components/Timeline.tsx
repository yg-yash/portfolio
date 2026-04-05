import React from "react";
import "@fortawesome/free-regular-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const timelineData = [
  {
    date: "2025 - Present",
    title: "Sleek Pte Ltd, Singapore",
    subTitle: "Senior AI Engineer / Full-Stack Developer",
    description: `Architecting and deploying end-to-end AI solutions for Sleek’s corporate, accounting, and fintech automation systems, improving process speed and accuracy across 15,000+ global clients.
    Built scalable full-stack applications using React and Python (FastAPI) integrated with LLM-powered services.
    Developed Python-based LLM services using LangChain and LlamaIndex to automate financial document processing.
    Implemented RAG pipelines using embeddings and vector search for contextual financial document analysis.`,
  },
  {
    date: "2022 - 2025",
    title: "CarXstream, Hyderabad",
    subTitle: "Co Founder & CTO",
    description: `Co-founded CarXstream, an AI-driven marketplace for the pre-owned car industry, achieving 50K+ app downloads and 5 million platform hits.
    Built WhatsApp, SMS, and voice AI automation workflows using LangChain, LangGraph, OpenAI, and Gemini.
    Engineered an Elasticsearch-powered search feature that reduced response time by 20% and increased customer satisfaction by 25%.
    Designed ML pipelines for dynamic pricing and fraud detection, and deployed scalable AWS microservices to handle traffic growth while achieving 99.9% uptime.`,
  },
  {
    date: "2021 - 2022",
    title: "Alumnus Software Ltd, Kolkata",
    subTitle: "Software Engineer",
    description: `Developed an AI-powered native Android application leveraging Large Language Models (LLMs) to deliver intelligent user interactions and task automation.
    Implemented advanced NLP capabilities to enhance responsiveness and streamline complex workflows.
    Developed a Bluetooth-integrated native application for a smartwatch-based health monitoring system, leveraging IoT capabilities.
    Contributed as a full-stack developer to build and optimize the GCP-based backend for enhanced app performance, scalability, and secure data transmission.`,
  },
  {
    date: "2020 - 2021",
    title: "DoTech Technologies, Noida",
    subTitle: "Software Engineer",
    description: `Engineered a secure full-stack product for storing user credentials with robust encryption mechanisms.
    Developed several applications, including ERP software, E-commerce apps, and Ed-tech platforms, ensuring seamless functionality and robust security.
    Led the design and implementation of scalable backend systems, integrated payment gateways for e-commerce solutions.
    Collaborated with cross-functional teams to deliver high-quality solutions, ensuring performance, scalability, and security in all projects.`,
  },
];

function Timeline() {
  const elementRefs = React.useRef(
    timelineData.map(() => React.createRef<HTMLDivElement>()),
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
