const Nav = ()=>{
 return (
      <nav className="container">
        <div className="logo">
          <img className = "nike" src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button>login</button> 
        
      </nav>
      );
}

export default Nav;
