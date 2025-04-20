import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p className="text-slate-500">
          Built by <strong>Thao Truong</strong> • Inspired by Adrian Hajdin
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            link.link.startsWith('http') ? (
              <a 
                key={link.name} 
                href={link.link} 
                target='_blank' 
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-500"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.link}
                className="transition-colors hover:text-blue-500"
              >
                <img
                  src={link.iconUrl}
                  alt={link.name}
                  className='w-6 h-6 object-contain'
                />
              </Link>
            )
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 