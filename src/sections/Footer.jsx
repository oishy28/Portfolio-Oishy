import { socialImgs } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
       <div className="socials flex gap-4">
        {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon bg-[rgb(141,39,155)] rounded-full p-2 hover:scale-110 transition-transform">
            <a href={socialImg.url} target="_blank" rel="noopener noreferrer" aria-label={socialImg.name}>
                <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} className="w-6 h-6" />
            </a>
            </div>
        ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Oishy Akhand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;