function Header() {
  return (
    <header className="header-main bg-black">
      <div className="container">
        <div className="header-inner-main py-4 px-4 flex align-middle justify-between">
          <div className="logo">
            <img src="/logo.png" />
          </div>
          <nav>
            <ul className="flex space-x-10">
              <li className="text-white">Home</li>
              <li className="text-white">About Us</li>
              <li className="text-white">Servies</li>
              <li className="text-white">Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
