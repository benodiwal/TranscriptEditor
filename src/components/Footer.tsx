const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2024 TranscriptPro. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition duration-300">Terms of Service</a>
            <a 
              href="https://github.com/benodiwal/TranscriptEditor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-300 transition duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="text-white"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.235 1.839 1.235 1.07 1.834 2.809 1.304 3.495.998.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.123-.304-.535-1.526.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.291-1.552 3.297-1.23 3.297-1.23.653 1.65.241 2.872.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.921.43.371.814 1.104.814 2.222 0 1.606-.014 2.896-.014 3.289 0 .322.218.694.825.577 4.765-1.588 8.2-6.085 8.2-11.387 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
