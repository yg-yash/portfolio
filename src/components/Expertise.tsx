import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faNodeJs,
  faSearchengin,
  faAngellist,
  faAndroid,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const expertise = [
  {
    name: "AI & Generative AI Systems",
    type: "",
    skills: [
      "LLMs",
      "Generative AI",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "RAG",
      "AI Agents",
      "Agentic Workflows",
      "Prompt Engineering",
      "Conversational AI",
      "Vector Databases",
      "AI Model Deployment",
    ],
    description:
      "Building production-grade AI systems, retrieval pipelines, and agentic workflows for real-world automation use cases. Experienced in designing conversational AI solutions, multi-agent orchestration, and AI-powered systems across fintech, marketplace, and enterprise workflows.",
    icon: <FontAwesomeIcon icon={faPython} size="3x" />,
  },
  {
 name: "Backend Development & System Design",
    type: "",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "OAuth2",
      "JWT",
      "Socket.io",
    ],
    description:
      "Designing scalable backend systems, APIs, and microservices with a strong focus on performance, reliability, and clean architecture. Experienced in building production services that support workflow automation, integrations, and AI-powered application logic.",
    icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />,
  },
  {
name: "Frontend Development",
    type: "",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SCSS",
    ],
    description:
      "Developing responsive web and mobile interfaces using modern frontend frameworks with a strong focus on user experience, scalability, and maintainability. Experienced in building dashboards, workflow interfaces, and AI-integrated product experiences.",
    icon: <FontAwesomeIcon icon={faReact} size="3x" />,
  },
  {
        name: "Cloud & DevOps",
     type: "",
    skills: [
      "AWS",
      "GCP",
      "Firebase",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS Lambda",
      "AWS SAM",
      "Google Cloud Functions",
      "CI/CD",
      "CloudFormation",
    ],
    description:
      "Building and deploying cloud-native applications using AWS and GCP with a focus on scalability, automation, and production readiness. Experienced in containerization, serverless systems, deployment pipelines, and infrastructure configuration.",
    icon: <FontAwesomeIcon icon={faAws} size="3x" />,
  },
  {
 name: "Databases & Search Systems",
    type: "",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase Realtime Database",
      "Elasticsearch",
      "DynamoDB",
      "Supabase",
      "Vector Databases",
    ],
    description:
      "Working with relational, NoSQL, and search systems to support transactional platforms, data retrieval, and AI applications. Experienced in designing data models, optimizing queries, and building vector-based retrieval systems.",

    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
  },
  {
   name: "Mobile Development",
    type: "",
    skills: [
      "React Native",
      "Android (Java/Kotlin)",
      "Cross-Platform Development",
      "Native App Development",
      "Bluetooth Integration",
      "IoT Application Development",
      "Mobile UI/UX",
    ],
    description:
      "Building mobile applications that integrate cleanly with backend systems and deliver smooth user experiences. Experienced in React Native and Android-based development for product, health-tech, and workflow-driven applications.",
  },
  {
 name: "Architecture & Engineering Practices",
    type: "",
    skills: [
      "System Design",
      "Microservices Architecture",
      "Event-Driven Systems",
      "Distributed Systems",
      "Cloud-Native Development",
      "Performance Optimization",
      "Clean Architecture",
      "SOLID Principles",
    ],
    description:
      "Applying scalable engineering principles and architectural patterns to build maintainable, high-performance systems. Focused on reliability, modularity, observability, and long-term system evolution across backend, cloud, and AI platforms.",
    icon: <FontAwesomeIcon icon={faDocker} size="3x" />,
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {expertise.map((item, index) => (
            <div className="skill" key={index}>
              {item.icon}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {item.skills.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
