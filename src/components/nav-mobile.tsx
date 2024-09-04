import { routes } from "../routes";
import React from 'react';
import { Link } from 'react-router-dom';

export const NavMobile: React.FC = () => {
  return (
    <ul className="lg:hidden flex flex-col gap-2 text-sm">
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

