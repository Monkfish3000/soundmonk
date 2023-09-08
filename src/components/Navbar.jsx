import List from './List';

const Navbar = () => {
  return (
    <header className="h-18 sm:h-28 border-b">
      <div className="flex flex-col sm:flex-row items-center justify-between py-2 mx-2">
        <img
          className="w-12 rounded-3xl sm:w-20"
          src="./logoWithText.png"
          alt="SoundMonk logo"
        />
        <nav>
          <List
            style={
              'p-3 text-lg hover:bg-custom-purple-medium hover:cursor-pointer rounded hover:text-custom-green'
            }
            items={['Home', 'Products', 'Our Story']}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
