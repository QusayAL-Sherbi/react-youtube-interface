
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <i class="bi bi-list sidebar-toggler"></i>
          <h2>YouTube</h2>
        </div>
        <div className="search">
          <input type="text" name="search-bar" id="search-bar" className="search-bar" />
          <i class="bi bi-search search-btn"></i>
        </div>
        <div className="actions">
          <ul className="actions-list list-unstyled">
            <li className="search-icon">
              <a href=""><i class="bi bi-search search-btn"></i></a>
            </li>
            <li><a href="">User Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;