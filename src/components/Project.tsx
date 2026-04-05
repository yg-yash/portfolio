import React from "react";
import proj1 from "../assets/images/projects/1.png";
import proj2 from "../assets/images/projects/2.png";
import proj3 from "../assets/images/projects/3.png";
import proj4 from "../assets/images/projects/4.png";
import proj5 from "../assets/images/projects/5.png";
import proj6 from "../assets/images/projects/6.png";
import proj7 from "../assets/images/projects/7.png";
import proj8 from "../assets/images/projects/8.png";
import proj9 from "../assets/images/projects/9.png";
import proj10 from "../assets/images/projects/10.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj1} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI-Powered Medication Intelligence & Adherence System</h2>
          </a>
          <p>
            An AI-driven healthcare system that analyzes medication side effects and generates personalized medicine schedules based on user health patterns. Uses LLMs and RAG pipelines to provide contextual insights and conversational assistance, improving medication adherence and awareness.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj2} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI CFO Assistant (Fintech AI Agent)</h2>
          </a>
          <p>
            An AI-powered financial assistant that processes invoices, calculates taxes, and provides real-time financial insights. Built using LLMs and RAG pipelines to automate accounting workflows and enable intelligent financial decision-making.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj3} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Multi-Agent Marketplace Simulator</h2>
          </a>
          <p>
            A multi-agent AI system where buyers and sellers autonomously negotiate, bid, and transact. Built using LangGraph to simulate real-world marketplace dynamics and demonstrate agent orchestration.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj4} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>WhatsApp AI Automation SaaS</h2>
          </a>
          <p>
            A SaaS platform enabling businesses to automate customer interactions via WhatsApp, SMS, and chat using AI agents. Includes lead management, automated responses, and workflow automation.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj5} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI Resume Analyzer & Interview Coach</h2>
          </a>
          <p>
            An AI system that analyzes resumes, provides actionable feedback, and conducts mock interviews using conversational and voice-based AI. Helps users improve job readiness and interview performance.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj6} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Autonomous Research AI Agent</h2>
          </a>
          <p>
            An autonomous AI agent capable of researching topics, gathering data from multiple sources, and generating structured insights using RAG and tool integrations.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj7} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI Code Debugging Assistant</h2>
          </a>
          <p>
            An AI-powered debugging assistant that analyzes code, detects issues, and suggests fixes. Supports automated refactoring and optimization using LLM-based reasoning.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj8} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>Vector Search Knowledge Engine</h2>
          </a>
          <p>
            A document intelligence platform that enables users to upload and query documents using semantic search powered by embeddings and RAG pipelines.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj9} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI Voice Commerce Assistant</h2>
          </a>
          <p>
            A voice-enabled AI assistant that allows users to search, filter, and purchase products using natural language, combining speech recognition with LLM reasoning.
          </p>
        </div>
        <div className="project">
          <a href="#" target="_blank" rel="noreferrer">
            <img src={proj10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <h2>AI Workflow Builder (Zapier + AI)</h2>
          </a>
          <p>
            A no-code platform for building AI-powered workflows using drag-and-drop interfaces. Enables automation across services using agents, APIs, and event-driven logic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
