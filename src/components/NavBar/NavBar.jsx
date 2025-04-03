import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>

            <Navbar bg="light" expand="lg" className="navbar-custom w-100">
                <Container fluid className="d-flex justify-content-between align-items-center w-100">

                   
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            src="https://www.fnp.com/icons/fnp-gift.svg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                       
                        <div className="d-flex align-items-center ms-3">
                            <img
                                src="https://www.fnp.com/icons/location-Icon.svg"
                                width="30"
                                height="30"
                                alt="Location"
                            />
                            <Nav.Link href="#" className="ms-2 text-start location-text">
                                <span className="location-state d-block">Andhra Pradesh</span>
                                <span className="location-district d-block">West-Godavari, 534211</span>
                            </Nav.Link>
                        </div>


                    </Navbar.Brand>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search gifts..."
                            className="search-bar me-2"
                        />
                    </Form>



                    <Nav className="d-flex align-items-center">
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/same-day-desktop.svg" alt="Same Day" />
                            <span>SameDay</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/currency-icons/inr.svg" alt="INR" />
                            <span>INR</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/corporate-gift.svg" alt="Corporate" />
                            <span>Corporate</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/cart.svg" alt="Cart" />
                            <span>Cart</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/user-square-desktop.svg" alt="Hi Guest" />
                            <span>HiGuest</span>
                        </div>
                        <div className="icon-wrapper">
                            <img src="https://www.fnp.com/icons/more-square.svg" alt="More" />
                            <span>More</span>
                        </div>
                    </Nav>
                </Container>
            </Navbar>


            <Container fluid className="category-container bg-light py-3 d-flex justify-content-center">
                <span className="category-item mx-3 d-flex align-items-center">Birthday <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Occasions <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Anniversary <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Cakes <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Flowers <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Personalised <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Plants <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Chocolates <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Combos <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Lifestyle <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">Global <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
                <span className="category-item mx-3 d-flex align-items-center">On Trend <img src="https://www.fnp.com/icons/navigation-chevron.svg" alt="Arrow" className="ms-1" /></span>
            </Container>
        </>
    );
};

export default NavBar;