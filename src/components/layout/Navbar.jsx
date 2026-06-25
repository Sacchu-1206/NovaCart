const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">NovaCart</h1>

        <ul className="flex gap-8">
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;