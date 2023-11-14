/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/fyi.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Airline Management System",
    description:
      "The Airlines Management System is a Java application built using MySQL for data storage and AWT/Swing for the user interface.",
    url: "https://github.com/parulchaddha/AirlineManagementSystem",
  },
  {
    title: "People Counter using YOLO",
    description:
      "This project utilizes the YOLO object detection model to count the number of people moving in two directions within a video stream.",
    url: "https://github.com/parulchaddha/People-Counter",
  },
  {
    title: "Car Counter using YOLO",
    description:
      "Empower Your Future: Get Certified through the Microsoft Cloud Skill Challenge",
    url: "https://github.com/parulchaddha/Car_Counter",
  },
  {
    title: "PustakKosh",
    description:
      "AI Learns from the data that you input, but sometimes it doesn't need your data to make any decision.",
    url: "https://github.com/parulchaddha/PustakKosh",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
