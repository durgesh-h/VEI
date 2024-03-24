function Footer() {
    return (
      <footer className="text-white body-font bg-blue-500">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">Vaibhav Electricals & Infra</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Vaibhav Electricals & Infra —
            <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@vaibhavelectricals</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                {/* SVG icons for social media */}
              </svg>
            </a>
            {/* More social icons */}
          </span>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  