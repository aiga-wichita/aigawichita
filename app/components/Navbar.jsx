import { AigaLogo } from './AigaLogo.jsx';

export const Navbar = ({ 
    boops = '', 
    ...props 
}) => 
{
  return (
    <nav className=" flex items-center justify-between flex-row">
        <AigaLogo bgColor="bg-blue-500" txtColor="text-white" />
      <ul className="display flex flex-row gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
