import  NavStyle from './Navbar.module.css'


function Navbar(){


    return <>
    <nav className={`${NavStyle.navColor} navbar navbar-expand-lg p-4`}>
  <div className="container">
    <a className="navbar-brand text-light fw-bolder" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light fw-bolder" aria-current="page" href="#">Protfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-light fw-bolder" href="#">About</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active text-light fw-bolder" aria-current="page">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>
}
export default Navbar;