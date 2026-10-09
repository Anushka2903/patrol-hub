
import { useState } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store/Slice/userSlice";
import { useNavigate } from "react-router-dom";
export function NavigationBar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const isLoggedin = useSelector((state) => state.user.isLoggedin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  }
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        PatrolHub
      </a>
      <ul className={active}>
        <LinkContainer to="/">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
        </LinkContainer>
        <LinkContainer to="/department">
          <li className="nav__item">
            <a href="#" className="nav__link">
              City
            </a>
          </li>
        </LinkContainer>
        <LinkContainer to="/mycomplaints">
          <li className="nav__item">
            <a href="#" className="nav__link">
              MyComplaints
            </a>
          </li>
        </LinkContainer>

        <LinkContainer to="/news">
          <li className="nav__item">
            <a href="#" className="nav__link">
              News
            </a>
          </li>
        </LinkContainer>

        <LinkContainer to="/contact">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
        </LinkContainer>

        <li className="nav__item">
          {/* <Button className="btn btn-danger">
          <LinkContainer to="/login">
             <h4 className="text-center pt-1">login</h4>
          </LinkContainer>
          </Button> */}
          {
            isLoggedin ? (
              <LinkContainer to="/signup">

                <Button className="ms-3 btn  btn-danger" onClick={handleLogOut}>Logout</Button>

              </LinkContainer>
            ) : (
              <LinkContainer to="/login">

                <Button className="ms-3 btn  btn-primary">Login</Button>

              </LinkContainer>
            )
          }
        </li>


      </ul>
      <div onClick={() => {
        if (active === "nav__menu") {
          setActive("nav__menu nav__active");
        } else setActive("nav__menu");


        if (icon === "nav__toggler") {
          setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
      }} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
