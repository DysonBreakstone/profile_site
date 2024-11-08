import headshot from "../../../../assets/AboutPanel/centerCroppedHeadshot2.jpg";
import linkedInLogo from "../../../../assets/AboutPanel/linkedInLogo.webp";
import githubLogo from "../../../../assets/AboutPanel/githubLogoWhite.webp";
import resume from "../../../../assets/AboutPanel/resume.pdf"

export default function Snapshot() {
  return (
    <section id="snapshot" key={"snapshotSubsection"} className="flex w-full h-screen justify-start mt-12 bg-cover" style={{ backgroundImage: `url(${headshot})`}}>
      <section className="flex w-full h-full bg-dark bg-opacity-30 p-8">
        <section id="aboutInfo" className="w-full text-white flex flex-col items-start text-start justify-between h-full">
          <div className="flex w-full justify-between mt-20 h-full">
            <div className="flex flex-col gap-28">
              <div className="flex flex-col gap-8">
                <h2 className="text-white">Contact</h2>
                <div className="flex gap-4 items-center">
                  <h3>Email:</h3>
                  <p style={{ fontSize: '1rem' }}>DysonBreakstone@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <h3>Phone:</h3>
                  <p style={{ fontSize: '1rem' }}>(802) 595-0053</p>
                </div>
                <a href={{resume}} download="breakstoneResume" className="bg-secondary-accent p-2 rounded-full text-white w-max hover:text-dark">Download Resume</a>
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="flex text-hero-text-accent-2">Socials</h2>
                <div className="flex gap-8">
                  <a href="https://www.linkedin.com/in/dysonbreakstone/">
                    <img src={linkedInLogo} className="w-12 h-12"></img>
                  </a>
                  <a href="https://github.com/DysonBreakstone">
                    <img src={githubLogo} className="w-12 h-12"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h1>Dyson Breakstone</h1>
              <h2 className="text-hero-text-accent">Software Engineer</h2>
              <h2 className="text-hero-text-accent">Database Enthusiast</h2>
              <h2 className="text-hero-text-accent">Gadabout</h2>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}