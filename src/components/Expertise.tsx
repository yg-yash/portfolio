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
    name: "Frontend Development",
    type: "",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "PWA",
      "RESTful APIs",
      "GraphQL",
      "Tailwind CSS",
      "Sass",
      "Bootstrap",
      "jQuery",
      "Webpack",
      "Babel",
      "Parcel",
    ],
    description:
      "I have extensive experience building dynamic and responsive user interfaces using modern frontend frameworks and libraries. My work includes developing web applications with React.js and Next.js, ensuring performance and scalability, and optimizing the user experience. I am proficient in creating Progressive Web Apps (PWA) and integrating APIs, such as RESTful and GraphQL, for seamless data communication.",
    icon: <FontAwesomeIcon icon={faReact} size="3x" />,
  },
  {
    name: "Backend Development",
    type: "",
    skills: [
      "Node.js",
      "Java",
      "Python",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "FastAPI",
      "GraphQL",
      "RESTful APIs",
      "Microservices Architecture",
      "Socket.io",
    ],
    description:
      "With a strong background in backend development, I have built RESTful APIs and microservices-based systems using technologies such as Node.js, Express.js, and Java. I am experienced with Python frameworks such as Flask and FastAPI, and I leverage NestJS and Spring Boot to build scalable server-side applications. I have also worked with WebSocket for real-time communication and GraphQL for efficient data fetching.",
    icon: <FontAwesomeIcon icon={faNodeJs} size="3x" />,
  },
  {
    name: "AI & Machine Learning",
    type: "",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "NLP",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Computer Vision",
      "AI Model Deployment",
      "Prompt Engineering",
      "Sentiment Analysis",
      "Time Series Forecasting",
      "Feature Engineering",
    ],
    description:
      "I have a deep understanding of AI and machine learning concepts, having worked on a variety of projects in deep learning, reinforcement learning, and NLP. I have experience in developing AI-driven solutions with tools like TensorFlow, PyTorch, and OpenCV. My expertise extends to deploying AI models, working with pretrained models, and applying machine learning algorithms for real-world applications such as recommendation systems, sentiment analysis, and computer vision.",
    icon: <FontAwesomeIcon icon={faPython} size="3x" />,
  },
  {
    name: "Databases",
    type: "",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase Realtime Database",
      "DynamoDB",
      "Athena",
      "Oracle",
    ],
    description:
      "I have worked extensively with relational and NoSQL databases, including MySQL, PostgreSQL, and MongoDB. I am skilled in setting up and managing Firebase Realtime Database and DynamoDB, along with leveraging Athena and Oracle for data analytics and storage. My database expertise also extends to cloud-based databases like DynamoDB and Firebase.",
    icon: <FontAwesomeIcon icon={faDatabase} size="3x" />,
  },
  {
    name: "Mobile Development",
    type: "",
    skills: ["React Native", "Android (Java/Kotlin)"],
    description:
      "I have developed mobile applications using React Native, and I am proficient in native Android development with Java and Kotlin. My experience includes building cross-platform apps with seamless user interfaces and integrating backend services for smooth data interaction.",
    icon: <FontAwesomeIcon icon={faAndroid} size="3x" />,
  },
  {
    name: "Cloud Platforms",
    type: "",
    skills: ["AWS", "Firebase", "AWS SAM"],
    description:
      "I have hands-on experience deploying applications and services on AWS and Firebase, utilizing AWS SAM for serverless architecture. I am also skilled in managing cloud infrastructure and resources, ensuring scalability and high availability.",
    icon: <FontAwesomeIcon icon={faAws} size="3x" />,
  },
  {
    name: "DevOps & Virtualization",
    type: "",
    skills: [
      "Git",
      "Atlassian Suite (Jira, Confluence, Bitbucket)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AWS CloudFormation",
    ],
    description:
      "I have a solid understanding of DevOps practices, including version control with Git and CI/CD pipelines using tools like GitHub Actions. I am proficient in containerization and orchestration with Docker and Kubernetes, and I am familiar with Terraform and AWS CloudFormation for infrastructure as code and automation.",
    icon: <FontAwesomeIcon icon={faDocker} size="3x" />,
  },
  {
    name: "Search Technologies",
    type: "",
    skills: ["Elasticsearch", "Kibana", "Logstash"],
    description:
      "I have worked with Elasticsearch, Kibana, and Logstash to implement powerful search and log aggregation systems. I have experience in building scalable search solutions and integrating them into web applications for efficient querying and data analysis.",
    icon: <FontAwesomeIcon icon={faSearchengin} size="3x" />,
  },
  {
    name: "Other Skills",
    type: "",
    skills: [
      "Unit Testing",
      "Test-Driven Development (TDD)",
      "Agile Project Management Tools",
      "Jira",
      "Trello",
      "Asana",
    ],
    description:
      "In addition to my core technical skills, I am experienced with unit testing and Test-Driven Development (TDD) to ensure software reliability. I also have expertise in Agile methodologies and use project management tools like Jira, Trello, and Asana to manage workflows and deliverables.",
    icon: <FontAwesomeIcon icon={faAngellist} size="3x" />,
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
