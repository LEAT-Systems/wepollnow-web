import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SubHeader = ({ data }) => {
  const [isDefault, setIsDefault] = useState('')
  const [isActive, setIsActive] = useState(isDefault);

  const handleClick = (linkText) => {
    setIsActive(linkText);
  };

  useEffect(() => {
    setIsDefault(data[0].linkText)
  }, [data])

  const activeClass =
    'bg-transparent before:absolute pb-[2px] before:bottom-0 before:left-[50%] before:-translate-x-1/2 before:content-[""] before:bg-green-500 before:h-[0.3rem] before:w-[5rem] before:rounded-t-[1rem]';
  return (
    <header className='flex items-center border-b w-full'>
      <ul>
        {data.map(({ id, route, linkText }) => {
          return (
            <li
              className='font-bold text-[#082b0e] inline-block p-4 mr-1 relative'
              key={id}
            >
              <NavLink
                to={route}
                activeClassName={isActive === linkText ? activeClass : "null"}
                onClick={handleClick(linkText)}
              >
                {linkText}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default SubHeader;
