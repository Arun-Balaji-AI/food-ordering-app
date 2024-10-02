const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/564x/b6/ec/b1/b6ecb1d372b2fb6aee1a8dc17da98bbc.jpg"
          className="logo"
        />
      </div>
      <div className="navigation-container">
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
