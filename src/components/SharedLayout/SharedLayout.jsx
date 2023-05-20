import { NavLink } from 'react-router-dom';

export const Container = ({ children }) => (
  <div className="  min-h-screen min-w-[480px]  bg-[#766A92]">
    <div className="container max-w-7xl   my-0 mx-auto py-0 px-4 pb-16 ">
      {children}
    </div>
  </div>
);

export const Header = ({ children }) => (
  <header
    className="flex items-center justify-between
                 gap-4 px-0 py-4 mb-4 border-b 
                 border-black border-solid "
  >
    <nav className="flex gap-4"> {children} </nav>
  </header>
);

export const Link = ({ to, state, children }) => (
  <NavLink
    to={to}
    state={state}
    className="block w-full px-2 rounded-md hover:bg-sky-100"
  >
    {children}
  </NavLink>
);

export const MenuLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          '--isActive': isActive ? '#5CD3A8' : '#EBD8FF',
        };
      }}
      className="p-2 w-[120px] h-[40px] bg-[var(--isActive)] rounded-xl text-center
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]   hover:shadow-mm hover:shadow-[#373737] hover:scale-[1.01]"
    >
      {children}
    </NavLink>
  );
};

export const ButtonLink = ({ link, children }) => {
  return (
    <button
      onClick={() => link()}
      className="flex items-center justify-evenly mb-9 mt-9 pr-4 w-[196px] h-[50px] rounded-xl
      font-['MontserratSemiBold'] font-semibold uppercase text-lg/[22px] text-[#373737]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-[250]   hover:shadow-mm
       hover:shadow-[#373737] hover:scale-[1.01] hover:bg-[#5CD3A8] bg-[#EBD8FF]"
    >
      {children}
    </button>
  );
};
