import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        var elems = document.querySelectorAll(".sidenav");
        var instances = M.Sidenav.init(elems);
    });

    return (
        <div>
            <nav
                className="white z-depth-0"
                style={{ borderBottom: "1px solid #dfe0e6" }}
            >
                <div className="centered">
                    <div className="nav-wrapper">
                        <a
                            href="#"
                            data-target="mobile-demo"
                            className="sidenav-trigger"
                        >
                            <i className="material-icons black-text">menu</i>
                        </a>

                        <ul className="hide-on-med-and-down">
                            <li>
                                <a className="black-text" href="#/orders">
                                    Orders
                                </a>
                            </li>
                            <li>
                                <a className="black-text" href="#/products">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a className="black-text" href="#/sections">
                                    Sections
                                </a>
                            </li>
                            <li>
                                <a className="black-text" href="#/utils">
                                    Utils
                                </a>
                            </li>

                            <li>
                                <a className="black-text" href="#/edit-socials">
                                    Edit Socials
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li>
                    <a className="black-text" href="#/orders">
                        Orders
                    </a>
                </li>
                <li>
                    <a className="black-text" href="#/products">
                        Products
                    </a>
                </li>
                <li>
                    <a className="black-text" href="#/sections">
                        Sections
                    </a>
                </li>
                <li>
                    <a className="black-text" href="#/utils">
                        Utils
                    </a>
                </li>

                <li>
                    <a className="black-text" href="#/edit-socials">
                        Edit Socials
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
