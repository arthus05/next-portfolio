import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <section className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebook />
      </div>
      <div>
        <BsTwitter />
      </div>
    </section>
  );
};
