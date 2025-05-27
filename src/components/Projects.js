import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import TheLibrary from "../assets/img/TheLibrary.jpg";
import TheKnight from "../assets/img/theknight.jpg";
import Film from "../assets/img/Film.jpg";
import LandingPage from "../assets/img/landingpage.jpg";
import colorSharp2 from "../assets/img/Background.png"
import Lariskas from "../assets/img/lariskas.jpg";

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
            url: "https://github.com/RIlz27/Sablon-Baju.git"
        },
    ];

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
                            <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-ta">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};
