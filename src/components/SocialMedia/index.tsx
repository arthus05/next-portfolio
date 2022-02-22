import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <section className="app__social">
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/arthus-vinicius-dev/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/arthus.vinicius/"
        >
          <FaFacebook />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/arthusvinicius/"
        >
          <BsInstagram />
        </a>
      </div>
    </section>
  );
};
