import React from 'react'
import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import TheLibrary from "../assets/img/TheLibrary.jpg";
import TheKnight from "../assets/img/theknight.jpg";
import Film from "../assets/img/Film.jpg";
import LandingPage from "../assets/img/landingpage.jpg";
import colorSharp2 from "../assets/img/Background.png"
import Lariskas from "../assets/img/lariskas.png";
import Asih from "../assets/img/Asih.png";
import Animasi from "../assets/img/Animasi.png";
import idrumah from "../assets/img/idrumah.png";

export const Projects = () => {
    const projects = [
        {
            title: "Web Perpustakaan",
            description: "Web Perpustakaan",
            imgUrl: TheLibrary,
            url: "https://github.com/egisaputra1784/New_Projek_Perpustakaan.git"
        },
        {
            title: "The Knight",
            description: "My Project game",
            imgUrl: TheKnight,
            url : "https://github.com/RIlz27/The-Knight.git"
        },
        {
            title: "Bangkit",
            description: "My Projek short film",
            imgUrl: Film,
            url: "https://bit.ly/Bangkits"
        },
        {
            title: "LandingPage",
            description: "Learn create landing page",
            imgUrl: LandingPage,
            url: "https://github.com/RIlz27/Sablon-Baju.git"
        },
        {
            title: "LarisKas",
            description: "Aplikasi Point of Sale",
            imgUrl: Lariskas,
            url: "https://lariskas.zielabs.id/"
        },
        {
            title: "Asih",
            description: "My Projek short film",
            imgUrl: Asih,
            url: "https://youtu.be/XEUbnkqzyPI?si=5pydTxiIKkIt8qc8"
        },
        {
            title: "Animasi Pajak",
            description: "My Projek Animasi",
            imgUrl: Animasi,
            url: "https://youtube.com/shorts/0NVyFHOZIJU?si=bDkvrB0MvCrRLE4f"
        },
        {
            title: "Id Rumah",
            description: "Projek Praktik Kerja Lapangan",
            imgUrl: idrumah,
            url: "https://github.com/flameblue59/idrumah-marketplace.git"
        },
    ];

    // categorize projects for the three tabs
    const websiteProjects = [projects[0], projects[3], projects[1], projects[7]];
    const uiuxProjects = [projects[4]];
    const filmProjects = [projects[2], projects[5], projects[6]];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are some of the projects I have worked on, showcasing  
                            my skills in UI/UX design, multimedia editing, and game design.
                            Each project reflects my dedication to creativity, functionality, and user experience.
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-ta">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Website & Game</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Film &amp; Video</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {websiteProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {uiuxProjects.length
                                            ? uiuxProjects.map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))
                                            : <p>No UI/UX projects yet.</p>
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {filmProjects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background" />
        </section>
    );
};
