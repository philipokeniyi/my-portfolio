import "./work.css";
import Card from "../Work Card/Card";
import musicPlayer from "./music-player.png";
import footballPlayer from "./football-player.png";
import bibleQuiz from "./bible-quiz.png";
import fashionWebsite from "./fashion-website.png";
import realEstate from "./real-estate.png";
import electronicWebsite from "./electronic-website.png";
import softTech from "./soft-tech.png";
import { Helmet } from "react-helmet";

function Work() {
  return (
    <div>
      <Helmet>
        <title>Work | Philip Okeniyi</title>
        <meta
          name="description"
          content="View the professional work and projects completed by Philip Okeniyi."
        />
        <meta property="og:title" content="Work | Philip Okeniyi" />
        <meta
          property="og:description"
          content="Browse a portfolio of impactful projects delivered with passion and precision."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="work-container">
        <div className="all-work">
          <h1>Work</h1>
          <section className="work">
            <Card
              title="Music Player App"
              description="A music player app with a custom audio player."
              stack="HTML, CSS, JavaScript"
              link="https://philipokeniyi.github.io/music-player/"
              image={musicPlayer}
              alt="Music Player"
            />
            <Card
              title="Football Player filter"
              description="A football player filter app."
              stack="HTML, CSS, JavaScript"
              link="https://philipokeniyi.github.io/Arsenal-team-/"
              image={footballPlayer}
              alt="Football Player filter"
            />

            <Card
              title="Bible Quiz App"
              description="A Full Stack Bible Quiz App."
              stack="HTML, CSS, JavaScript, Airtable"
              link="https://philipokeniyi.github.io/mfmyc-quiz/"
              image={bibleQuiz}
              alt="Bible Quiz App"
            />

            <Card
              title="Fashion website"
              description="A fashion website."
              stack="HTML, Bootstrap, JavaScript"
              link="https://philipokeniyi.github.io/Bootstrap-PFashion/"
              image={fashionWebsite}
              alt="Fashion website"
            />

            <Card
              title="Real Estate Agency"
              description="A real estate agency website. "
              stack="HTML, CSS, JavaScript"
              link="https://philipokeniyi.github.io/Real-Estate-Agency/"
              image={realEstate}
              alt="Real Estate Agency"
            />

            <Card
              title="Electronic website"
              description="An electronic website."
              stack="HTML, CSS, JavaScript"
              link="https://philipokeniyi.github.io/electronic-website/"
              image={electronicWebsite}
              alt="Electronic website"
            />

            <Card
              title="Tech mentorship website"
              description="A tech mentorship website"
              stack="HTML, CSS"
              link="https://philipokeniyi.github.io/soft-tech/"
              image={softTech}
              alt="Soft Tech"
            />

            <Card />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Work;
