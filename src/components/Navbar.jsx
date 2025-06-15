const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600"></h1>
      <ul className="flex gap-6 text-gray-600 text-sm font-medium">
        <li><a href="#" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#" className="hover:text-indigo-600">About</a></li>
        <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
