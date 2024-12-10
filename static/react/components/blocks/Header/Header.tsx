import React, { FC } from "react";

const CoffeeLogo = "/images/30x22.png"

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const {} = props;

  return (
    <header data-cy="header" className="header-component">
      <img src={CoffeeLogo} alt="coffee logo" />
      <h1>Coffee Shop</h1>
    </header>
  );
};

export default Header;
