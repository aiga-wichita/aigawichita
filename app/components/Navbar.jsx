
export const Navbar = ({ 
    boops = '', 
    ...props 
}) => 
{
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
