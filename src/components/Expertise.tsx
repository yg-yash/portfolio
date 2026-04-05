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
      "NLP",
      "AI Model Deployment",
    ],
    description:
      "I specialize in building production-grade AI systems powered by Large Language Models (LLMs), focusing on real-world automation, agentic workflows, and scalable AI applications. My work includes designing RAG pipelines, multi-agent systems, and conversational AI solutions across web, WhatsApp, and voice platforms. I have hands-on experience with LangChain, LangGraph, and LlamaIndex, building intelligent systems for financial automation, marketplace workflows, and enterprise use cases.",
    icon: <FontAwesomeIcon icon={faPython} size="3x" />,
  },
  {
    name: "Backend Development & System Design",
    type: "",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Java",
      "Django",
      "NestJS",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "OAuth2",
      "JWT",
      "Socket.io",
    ],
    description:
      "I design and build scalable backend systems and microservices architectures using Python and Node.js, with a strong focus on performance, reliability, and clean architecture. I have extensive experience developing LLM-powered APIs and high-performance backend services using FastAPI and modern frameworks, enabling seamless integration with enterprise systems and AI workflows.",
    icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />,
  },
  {
    name: "Frontend Development",
    type: "",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SCSS",
    ],
    description:
      "I develop modern, responsive web applications using React.js and Next.js, focusing on performance, scalability, and seamless user experience. My work includes building AI-powered interfaces and dashboards that integrate complex backend systems and real-time data.",
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
      "I have strong experience building and deploying cloud-native applications using AWS and GCP, with a focus on scalability, reliability, and automation. I work extensively with containerization, orchestration, and serverless architectures to deliver production-ready systems.",
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
      "Vector Databases",
    ],
    description:
      "I have worked extensively with relational, NoSQL, and search systems, enabling efficient data storage, retrieval, and real-time analytics. I also design vector-based retrieval systems for AI applications.",
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
  },
  {
    name: "Mobile Development",
    type: "",
    skills: ["React Native", "Android (Java/Kotlin)"],
    description:
      "I have experience building cross-platform and native mobile applications, integrating backend systems and delivering smooth, scalable user experiences.",
    icon: <FontAwesomeIcon icon={faAndroid} size="3x" />,
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
      "I focus on building scalable, maintainable, and high-performance systems, applying modern software engineering principles and architectural patterns.",
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
