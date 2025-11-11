import headshot from "../assets/saige-headshot.jpg";
import "../assets/default.css";

export default function Introduction() {
  return (
    <main className="wrap">
      <h2>Introduction Page</h2>

      <section className="card" aria-labelledby="about">
        <h3 id="about">About Me</h3>
        <img
          src={headshot}
          alt="Headshot of Saige Hatfield"
          className="headshot"
        />
        <p>
          Hello! My name is Saige, and I’m a third-year student majoring in
          Computer Science with a concentration in Human-Computer Interaction.
          The cross-section between computers and the human mind is a beautiful
          thing, and I hope to delve deeper into how these two interact. My goal
          is to have a career in UI/UX and utilize all the fancy psychology and
          computer science principles I have learned.
        </p>

        <p>
          Personal Background: In the wondrous year of 2005, I was born in
          Greensville, NC, but I’ve lived in a lot of different parts of North
          Carolina. My current hometown is Lewisville, NC, but no one knows
          where that is, so I say Winston-Salem. My dad is a huge computer nerd
          and loves to build computers in his free time, and my brothers and I
          played lots of video games as kids, so I got into the technology nerd
          field quite young. My high school computer science teacher was the
          final push for me to decide to major in Computer Science, so now I’m
          here! I’m a woman of many hobbies, but I enjoy writing poetry, playing
          FPS and farming simulator games, baking, reading, and making
          personalized playlists.
        </p>

        <p>
          Professional Background: I’ve had about 7-8 jobs since I was 16, but
          I’ve enjoyed working in a University setting the most. Since my first
          year here, I’ve been involved in UNC Charlotte’s Housing and Residence
          Life department, and have held positions such as Director of External
          Affairs for RSA, Desk Assistant, Summer Resident Advisor, and now a
          Full Year Resident Advisor. This previous summer, I worked with the
          Office of Undergraduate Research on a Computer Science research
          project called BRIDGES, where I worked with Professor KRS to build
          computer science assignments for introductory high school and college
          computer science courses.
        </p>

        <p>
          Academic Background: I’m a third-year student majoring in Computer
          Science, hoping to graduate in December 2026. My concentration is in
          Human-Computer Interaction, and my minor is in Cognitive Science.
        </p>

        <p>Primary Computer: Custom-built, Windows 10, desktop, dorm</p>

        <p>Courses I’m Taking, & Why:</p>
        <ul>
          <li>
            ITCS 3688 - Computers and Their Impact on Society: Although required,
            I’m interested in the ethics of new and upcoming technology and how
            our society will go about integrating all of it into our day-to-day
            lives.
          </li>
          <li>
            ITSCS 3610 - Computing Leaders Seminar: This course offers a
            service-based leadership opportunity, and it’s a great way to give
            back to your community while also learning new things yourself.
          </li>
          <li>
            STAT 1220 - Elements of Stat I: I may have tamed the beast of
            Calculus 2, but switching to a B.A. means you have to also start over
            your math.
          </li>
          <li>
            ITIS 3135 - Front-End Web Application Development: Required - but I
            need to learn how to make websites, etc., for my UI/UX portfolio!
          </li>
          <li>
            ITIS 3130 - Introduction to Human-Centered Computing: Although
            required, this class talks about pretty much everything I’m
            interested in.
          </li>
        </ul>

        <p>Funny story: I decided to go down the UI/UX path when I decided I hated doing all the math and harder coding.</p>
        <p>Something I'd like to share: never stop following your dreams!</p>
      </section>
    </main>
  );
}
