import linkedinSVG from "../../../../public/svg/linkedin.svg";
import githubSVG from "../../../../public/svg/github.svg";
import gmailSVG from "../../../../public/svg/gmail.svg";

export default function FooterComponent() {
  return (
    <footer className="flex w-auto justify-center items-center border-t-2 border-gray-200 mt-4">
      <section className="flex">
        <a
          href="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
          target="_blank"
          className="m-4"
        >
          <img src={linkedinSVG.src} alt="LinkedIn Icon" />
        </a>
        <a
          href="https://github.com/Sebastian-pz"
          target="_blank"
          className="m-4"
        >
          <img src={githubSVG.src} alt="GitHub Icon" />
        </a>
        <a href="/" className="m-4">
          <img src={gmailSVG.src} alt="Gmail icon" />
        </a>
      </section>
    </footer>
  );
}
