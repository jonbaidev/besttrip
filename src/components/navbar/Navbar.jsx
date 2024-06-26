import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">Besttrip</span>
            <div className="navItems">
                <button className="navButton">Login</button>
                <button className="navButton">Registro</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar