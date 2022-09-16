import { Link } from "react-router-dom";
const Navbar = (prop) => {
    return ( 
      <div className="navbar">
        <Link to="/" className="title">Nirmitee.io</Link>
        <div className="nav">
          <Link to="" className="waves-effect" >About</Link>
          <Link to="" className="waves-effect" ><i className="material-icons">person</i></Link>
          <Link to="" className="waves-effect "><i className="material-icons ">more_vert</i></Link>
        </div>
      </div> 
    );
}
export default Navbar;