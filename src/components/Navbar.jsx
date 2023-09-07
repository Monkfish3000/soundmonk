import List from './List';

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <img src="./logoWithText.png" alt="SoundMonk logo" />
        <nav>
          <List />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
