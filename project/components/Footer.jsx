const Footer = () => {
  return (
    <footer className="bg-royalBlue py-12">
      <div className="max-w-7xl mx-auto px-2 md:px-12">        
        <div className="text-center text-steelBlue">
          <p>&copy; {new Date().getFullYear()} Datlee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;