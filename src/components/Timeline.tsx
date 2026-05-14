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
    description: `Architecting backend workflow automation and AI-powered document processing systems for corporate compliance and accounting operations using Node.js, Python, PostgreSQL, Supabase, AWS, and OCR/LLM-based extraction pipelines. Built scalable full-stack applications using React and Next.js, integrating APIs, workflow automation, and internal operational tooling across finance and compliance systems. Developed retrieval and orchestration workflows using LangChain, LangGraph, embeddings, and vector search to improve contextual document analysis and operational efficiency for 15,000+ global clients.`,
  },
  {
    date: "2022 - 2025",
    title: "CarXstream, Hyderabad",
    subTitle: "Co Founder & CTO",
    description: `Co-founded and scaled a cloud-native used-car marketplace platform across web, mobile, backend, search, and conversational systems. Led architecture and engineering for marketplace workflows involving inventory management, bidding, lead handling, dealer operations, payments, and customer engagement systems. Built event-driven backend services using AWS Lambda, API Gateway, SNS/SQS, DynamoDB Streams, Docker, and CI/CD workflows, while developing AI-assisted conversational and retrieval systems using Python, FastAPI, LangChain, LangGraph, Elasticsearch, and vector search technologies.`,
  },
  {
    date: "2021 - 2022",
    title: "Alumnus Software Ltd, Kolkata",
    subTitle: "Software Engineer",
    description: `Developed full-stack web and mobile applications across health-tech, enterprise dashboards, and video-streaming platforms using React Native, React, Angular, Node.js, and Python-based backend systems. Built smartwatch-integrated health monitoring applications with real-time visualization and native Android integrations, and contributed to conversational AI and retrieval-based systems for contextual troubleshooting workflows. Worked across frontend engineering, backend APIs, cloud integrations, and product delivery for enterprise and client-facing applications.`,
  },
  {
    date: "2020 - 2021",
    title: "DoTech Technologies, Noida",
    subTitle: "Software Engineer",
    description: `Built scalable full-stack applications and backend systems for startup and business clients using MERN stack technologies, React Native, and cloud-based deployment workflows. Worked on ERP-style platforms, e-commerce systems, internal business applications, and API integrations while contributing across frontend development, backend engineering, debugging, deployment support, and production issue resolution. Collaborated closely with cross-functional teams to deliver secure, maintainable, and performance-focused applications.`,
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
