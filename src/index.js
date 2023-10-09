import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
function Card(props) {
  return (
    <>
      <div className="col-md-4 h">
        <div className="card text-danger mb-3">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      {/* Carousel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active bg-danger">
            {
              <img
                src="https://goonj.org/wp-content/uploads/2023/04/DD-homepage-slider-2.jpg"
                className="d-block w-100"
                alt="..."
              />
            }
          </div>
          <div className="carousel-item ">
            {
              <img
                src="https://goonj.org/wp-content/uploads/2023/07/Rahat-Website-HomePg.jpg"
                className="d-block w-100"
                alt="..."
              />
            }
          </div>
          <div className="carousel-item ">
            {
              <img
                src="https://goonj.org/wp-content/uploads/2022/11/GARRD-slider.jpg"
                className="d-block w-100"
                alt="..."
              />
            }
          </div>
        </div>
        {/* Add more carousel items here */}
      </div>
      <button
        className="carousel-control-prev pr"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <div className="container ho">
        <div className="card  mb-3 k">
          <div className="card-header">
            <h4>Our Aim</h4>
          </div>
          <div className="card-body">
            <p className="card-text">
              <Card
                img="https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/education.jpg"
                text="Promote Education"
              ></Card>
              <Card
                img="https://goonj.org/wp-content/uploads/2021/05/rahat-covid.jpg"
                text="Disaster Management"
              ></Card>
              <Card
                img="https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/environment.png"
                text="Environment Conseration"
              ></Card>
              <Card
                img="https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/sanitation.png"
                text="Sanitation Facility"
              ></Card>
              <Card
                img="https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/health.png"
                text="Provide Healthcare"
              ></Card>
              <Card
                img="https://goonj.org/wp-content/themes/charity-ngo-child/img/8tabs/livelihood.png"
                text="Provide Livelihood"
              ></Card>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="card  mb-3 ok">
        <div className="card-header">
          <h4>Our Mission</h4>
        </div>
        <div className="card-body">
          <p className="card-text t">
            Our mission is to create a better world by collaborating with
            communities and stakeholders to provide sustainable solutions to
            some of society's most pressing issues.Our ngo focuses on
            sustainable development of mankind with removing of various social
            evils from the society.
          </p>
        </div>
      </div>
      <div className="card  mb-3 a">
        <div className="card-header">
          <h4>History</h4>
        </div>
        <div className="card-body">
          <p className="card-text">
            [NGO Name] is a non-profit organization dedicated to making a
            positive impact on society. Founded in 1992, by Raghav Yadav ,we
            have been working tirelessly to address various social and
            environmental challenges.
          </p>
        </div>
      </div>
      <div className="container li">
        <div className="card l" style={{ width: "18rem" }}>
          <div className="card-header">Our Values</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Integrity</li>
            <li className="list-group-item">Compassion</li>
            <li className="list-group-item">Collaboration</li>
            <li className="list-group-item">Innvocation</li>
            <li className="list-group-item">Sustainablity</li>
          </ul>
        </div>
        <div className="card l" style={{ width: "18rem" }}>
          <div className="card-header">Our Team</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Mr Shrinil Laddha</li>
            <li className="list-group-item">Mr Rudra Yadav</li>
            <li className="list-group-item">Mr Aditya Deshmukh</li>
            <li className="list-group-item">Mr Vedh Bhattad</li>
            <li className="list-group-item">Mr Sanath Kamath</li>
          </ul>
        </div>
      </div>
    </>
  );
}
function Present() {
  return (
    <>
      <h3 style={{ color: "crimson", textAlign: "center" }}>
        Some Important Projects done by the Ngo in Present
      </h3>
      <div className="li">
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text" style={{ marginLeft: "15px" }}>
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="li">
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function Past() {
  return (
    <>
      <h3 style={{ color: "crimson", textAlign: "center" }}>
        Some Important Projects done by the Ngo in Past
      </h3>
      <div className="li">
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "palevioletred" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2018/06/cfw-pic.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h3
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Cloth for Work
            </h3>
            <p className="card-text">
              Worldwide when we think of resources for any kind of development
              work, we think of money. Goonj works on turning old material as a
              resource for hundreds of rural development activities. Communities
              have built huge bamboo bridges, dug up wells, have done bunding of
              acres of land, developed small irrigation canals, have built
              drainage systems, built village schools and have taken up massive
              exercises of repairing roads, developing water harvesting systems
              to cleaning up water bodies. All these works are done but by
              making people understand their own community power and giving old
              usable old material as a reward.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function Involved() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Volunteer Opporunities
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Join us in our mission to bring about positive change. We have a
              variety of volunteer opportunities available. Whether you can
              spare a few hours or want to commit more time, we welcome your
              support
            </div>

            <button className="btn btn-outline-danger ji">Join now</button>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Donate
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Your contributions can make a significant difference in the lives
              of those we serve. Every donation, big or small, helps us continue
              our vital work
            </div>
            <button className="btn btn-outline-danger ji">Donate</button>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Partner with Us
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Are you an organization or business looking to collaborate on
              projects that align with our mission? Let's work together to
              create a better future
            </div>
            <button className="btn btn-outline-danger ji">
              Become a Partner
            </button>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Subscribe To Our Newsletter
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Stay updated with our latest news, projects, and success stories
                by subscribing to our newsletter. Together, we can make a
                difference
              </div>
              <button className="btn btn-outline-danger ji">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Events() {
  return (
    <>
      <h4 style={{ color: "crimson", textAlign: "center" }}>
        Here are some upcoming events of the Goonj
      </h4>
      <div className="li">
        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2023/05/MHD-2nd-time_white-scaled.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h5
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Lets Break the Silence:Menstrual Hygiene Day,
            </h5>
            <p className="card-text e">
              Goonj wants everyone to be concerned about menstruation, and to
              use their voices to Break the Silence around this issue How to
              participate: Organize a Chuppi Todo Baithak (CTB) this May 28, The
              Menstrual Hygiene Day, onwards by using the Goonj CTB Toolkit with
              people whom you know (and people you do not know that well) to
              break the myths, taboos and stigma around menstruation. Share the
              experience of your Chuppi Todo Baithak with the world. Tell us
              about what you said, heard and felt, and the challenges you faced,
              and something new you learned.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>

        <div className="card mb-3">
          <img
            src="https://goonj.org/wp-content/uploads/2022/12/SDG-icons-scaled.jpg"
            className="card-img-top pi"
            alt="..."
          />
          <div className="card-body pi">
            <h5
              className="card-title"
              style={{ marginRight: "15px", color: "crimson" }}
            >
              Goonj Alliance for Rapid Response on Disasters (GARRD)
            </h5>
            <p className="card-text">
              GARRD is an alliance initiated by Goonj to set up a formal
              cross-sectoral alliance of entities with pre-committed resources
              to positively impact the disaster response ecosystem and
              understanding. This solution is unique and first-of-its-kind
              globally, to bring together diverse entities involved, and those
              who must be involved, to create a transformative impact. Through
              this alliance, we hope to achieve a more comprehensive,
              coordinated, and collaborative bottoms-up approach to rapid and
              sustained disaster mitigation, relief, and rehabilitation.
            </p>
            <p className="card-text">
              <small className="text-body-danger">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <>
      <h4 style={{ color: "crimson", textAlign: "center" }}>
        Reach out to us through our contact form. We value your feedback and
        inquiries
      </h4>
      <div className="container lic">
        <div className="card l" style={{ width: "18rem" }}>
          <div className="card-header">Our Contact Details </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email:mail@goonj.org</li>
            <li className="list-group-item">Call Us:011-26972351, 41401216</li>
            <li className="list-group-item">
              Head Office Address:J-93, Sarita Vihar, New Delhi-110076
            </li>
          </ul>
        </div>

        <footer className="footer">
          <div className="container f">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p>&copy; 2023 Your Website Name</p>
              </div>
              <div class="col-lg-6 col-md-12">
                <a href="#" className="social-icon">
                  <i className="fab fa-instagram ic"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook ic"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter ic"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-youtube ic"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
function App() {
  const [page, setPage] = useState(<Home></Home>);
  const home = () => {
    setPage(<Home></Home>);
  };
  const about = () => {
    setPage(<About></About>);
  };
  const present = () => {
    setPage(<Present></Present>);
  };
  const past = () => {
    setPage(<Past></Past>);
  };
  const involved = () => {
    setPage(<Involved></Involved>);
  };
  const events = () => {
    setPage(<Events></Events>);
  };
  const contact = () => {
    setPage(<Contact></Contact>);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    home();
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    about();
                  }}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    present();
                  }}
                >
                  Present Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    past();
                  }}
                >
                  Past Project
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    involved();
                  }}
                >
                  Get Involved
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    events();
                  }}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    contact();
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {page}
    </>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));
