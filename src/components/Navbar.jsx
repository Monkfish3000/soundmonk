const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <img src="./logoWithText.png" alt="SoundMonk logo" />
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Products</li>
            <li>Our Story</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
