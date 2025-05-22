import { clsx } from 'clsx';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className={clsx(
        'max-w-7xl mx-auto px-4 py-4',
        'flex justify-between items-center'
      )}>
        <h1 className="text-xl font-bold text-gray-800">난나영</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-600 hover:text-black">About</a>
          <a href="#projects" className="text-gray-600 hover:text-black">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-black">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;