import { Link } from 'react-router-dom';
import { routes } from '../routes';

// topbar navigation functionality
export const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <Link
              to={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all"
            >
              <Icon />
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

