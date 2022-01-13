import { Link } from "react-router-dom";

import React from 'react'

function AdminSideMenu() {
    return (
        <>
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {/* <div className="sb-sidenav-menu-heading">Head</div> */}
                        
                        <Link to="/" className="nav-link mt-5">
                            <div className="sb-nav-link-icon">
                                <i className="icon-dashboard2 red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            Dashboard
                        </Link>

                        <div className="sb-sidenav-menu-heading">Master Data</div>

                        <Link to="/product" className="nav-link">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-shopping-basket"></i>
                            </div>
                            Product
                        </Link>

                        <Link to="/category" className="nav-link">
                            <div className="sb-nav-link-icon">
                                <i className="icon-bookmarks red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            Category
                        </Link>

                        <div className="sb-sidenav-menu-heading">Sales Report</div>

                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon">
                            <i className="icon-display red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            POS Transaction
                        </a>

                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon">
                            <i className="icon-coin-dollar red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            Finance Report
                        </a>

                        <div className="sb-sidenav-menu-heading">Configuration</div>

                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon">
                            <i className="icon-cogs red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            Settings
                        </a>

                        <a className="nav-link" href="/">
                            <div className="sb-nav-link-icon">
                            <i className="icon-users2 red cmr-icon-menu fs-icomoon"></i>
                            </div>
                            Users
                        </a>
                        
                        
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default AdminSideMenu
