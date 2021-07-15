import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";


import chatify from "../../Assets/Projects/wallpaperheaven.png";
import vyapar from "../../Assets/Projects/vyapar.png";
import sudokusolver from "../../Assets/Projects/sudokusolver.png";
import nytimes from "../../Assets/Projects/nytimes.jpg";
import hinge from "../../Assets/Projects/hinge.jfif";
import nykaa from "../../Assets/Projects/nykaa.png";
import bookparking from "../../Assets/Projects/bookparking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Wallpaper Heaven"
              description="WallpaperHeaven is a wallpaper app which is build using jetpack compose and uses wallhaven.cc api."
              link="https://github.com/SpiderGod607/WallpaperHeaven"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vyapar}
              isBlog={false}
              title="Vyapar Clone"
              description="This is an android project which follows MVVM architecture. It uses the new kid in town Jetpack Compose for some of the UI and also uses Hilt for dependency injection. All the data in the app is managed using Room. The app allows business owners to manage their inventory."
              link="https://github.com/chaithanyagollapalli/vyapar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sudokusolver}
              isBlog={false}
              title="Sudoku Solver"
              description="This app follows MVVM Architecture. The app allows you to solve any valid sudoku problem in less than a second. The app uses a custom view to show the board and the board is solved using a backtracking algorithm. "
              link="https://github.com/SpiderGod607/SudokuSolver"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nytimes}
              isBlog={false}
              title="NYTimes clone"
              description="This app is a clone of Nytimes it follows MVVM architecture and the caching in the app is done using room database, it is a collaborative project and I was responsible for search function with pagination, home screen, share card, article view, bookmark and caching."
              link="https://github.com/SpartanHarshad/NYTimes-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hinge}
              isBlog={false}
              title="Hinge clone"
              description="This app is a clone of hinge UI element."
              link="https://github.com/diya31656/Hinge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nykaa}
              isBlog={false}
              title="Nykaa clone"
              description="This app is a clone of Nykaa fashion the app showcases nested recycler view with multiple views and the data is retrieved by downloading the Nykaa fashion website and extracting JSON code from it."
              link="https://github.com/soubiakulsum/Nykaa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookparking}
              isBlog={false}
              title="Book Parking"
              description="Book Parking is a demo application based on MVVM architecture. The app allows users to booking parking slots, the app uses firebase for the backend."
              link="https://github.com/nero002/Smart-Parking"
            />
          </Col>

        </Row>
         
      </Container>
    </Container>
  );
}

export default Projects;
