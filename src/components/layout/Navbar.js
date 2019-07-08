import React from 'react'

const Navbar = props => {
  const { whatever, iconClass, title } = props;
  return (
    <nav className={whatever}>
      <h1>
        <i className={iconClass} /> {title}
      </h1>
    </nav>

  );
}

export default Navbar;
