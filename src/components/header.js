import '../stylesheets/adminlte.css'


export const Menu = () =>


<nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">

  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fa fa-bars"></i></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>


  <form className="form-inline ml-3">
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  </form>
  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#"><i
            className="fa fa-th-large"></i></a>
      </li>
</ul>
  </nav>
