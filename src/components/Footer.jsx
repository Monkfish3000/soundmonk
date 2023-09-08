const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="h-16 border-t py-4 text-center mt-7">
      <p className="text-lg text-custom-raisin-black">{`SoundMonk ${year}`}</p>
    </footer>
  );
};

export default Footer;
