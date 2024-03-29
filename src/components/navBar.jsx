//java script react project
//<button>This is a Test</button> removed from div from under h5
//create component to show product, with img, title h2, price label, total label, and 'add' button within a container with div tag
//https://getbootstrap.com/docs/5.1/components/navbar/


import"./navBar.css";
import {Link} from "react-router-dom";
import {useContext} from "react";
import storeContext from "../context/storeContext";

const NavBar = () => {
  const cart = useContext(storeContext).cart; //the cart from the storeContext
    return (
        <div classNameName="navbar">
            <h5><nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/#">ORGANICO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="catalog" to="/#">Catalog</Link>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button> */}
        <Link className= "btn btn-outline btn-outline-light" to = "/cart">
          <span className = "badge bg-primary">{cart.length}</span> {/* spans 3 elements, also have option fr btn-outline-info in the previous, &nbsp below is one blank space for each*/}
          &nbsp; &nbsp; View Cart 
        </Link>
     </form>  
     {/* replacing the form with a go to cart button */}
    </div>
  </div>
</nav></h5>
        </div>
    );
}
//use somewhere else
export default NavBar;