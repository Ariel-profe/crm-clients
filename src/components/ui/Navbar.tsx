import {NavLink, useLocation} from 'react-router-dom';
import { navlinks, INavlink } from '../../utils/navlinks';

export const Navbar = () => {

  return (
    <nav className='mt-10'>
    {
      navlinks.map( ({href, id, text}:INavlink) => (
        <NavLink
          className={(({isActive}) => isActive ? 'text-blue-300 text-2xl block mt-2 hover:text-blue-300 capitalize' : 'text-white text-2xl block mt-2 hover:text-blue-300 capitalize' )}
          key={id}
          to={href}
        >
          {text}
        </NavLink>
      ) )
    }
    </nav>
  )
}
