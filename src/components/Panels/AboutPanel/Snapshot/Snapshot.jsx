import headshot from "../../../../assets/AboutPanel/centerCroppedHeadshot2.jpg";
import mobileHeadshot from "../../../../assets/AboutPanel/uncroppedHeadshot.jpg";
import linkedInLogo from "../../../../assets/AboutPanel/linkedInLogo.webp";
import githubLogo from "../../../../assets/AboutPanel/githubLogoWhite.webp";
import resume from "../../../../assets/AboutPanel/resume.pdf"
import pushDown from "../../../../assets/AboutPanel/Snapshot/pushDown.svg";

export default function Snapshot() {

  const isMobile = window.innerWidth < 768;
  const headshotImage = isMobile ? mobileHeadshot : headshot

  const onButtonClick = () => {   
    fetch(resume).then((response) => {
        response.blob().then((blob) => {
        
            const fileURL =
              window.URL.createObjectURL(blob);
                
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "breakstoneResume.pdf";
            alink.click();
        });
    });
};

  return (
    <section id="snapshot" key={"snapshotSubsection"} className="flex md:w-full w-auto h-screen justify-start bg-cover" style={{ backgroundImage: `url(${headshotImage})` }}>
      <section className="flex w-full h-full bg-dark bg-opacity-30 p-8">
        <section id="aboutInfo" className="w-full text-white flex flex-col items-start text-start justify-between h-full">
          <div className="flex flex-col md:flex-row w-full md:justify-between md:mt-20 h-full">
            <div className="flex flex-col justify-between md:justify-start gap-12 md:gap-28">
              <div className="flex flex-col gap-2 md:gap-8">
                <h1>Dyson Breakstone</h1>
                <h2 className="text-hero-text-accent">Software Engineer</h2>
                <h2 className="text-hero-text-accent">Data Enthusiast</h2>
                <h2 className="text-hero-text-accent">Lifelong Learner</h2>
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
            <div className="flex flex-col gap-12 md:gap-28 mt-10 md:mt-0">
              <div className="flex flex-col gap-2 md:gap-8">
                <h2 className="text-white">Contact</h2>
                <div className="flex gap-4 items-center">
                  <h3>Email:</h3>
                  <p style={{ fontSize: '1rem' }}>DysonBreakstone@gmail.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  <h3>Phone:</h3>
                  <p style={{ fontSize: '1rem' }}>{import.meta.env.VITE_PHONE_NUMBER || process.env.VITE_PHONE_NUMBER}</p>
                </div>
                <button onClick={onButtonClick} className="bg-secondary-accent p-2 rounded-full text-white w-max hover:text-dark">Download Resume</button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}