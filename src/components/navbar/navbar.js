export default function Navbar(){
    return(
        <>
            <div className="app__header">
                <div className="header__navbar--contact">
                    <ul className="header__navbar-social">
                        <li className="header__navbar-item">
                            <i className="header__navbar-icon fa-solid fa-bell"></i>
                            <a href="/" className="header__navbar-link">Tìm mọi thứ bạn cần tại Healthyroo</a></li>
                        <li className="header__navbar-item">
                            <ul className="header__navbar-contactlist">
                                <li className="header__navbar-contactitem">
                                    <span className="header__navbar-spanproduct">Đơn hàng</span>
                                    <i className="header__navbar-icon-down fa-solid fa-angle-down"></i>
                                </li>
                                <li className="header__navbar-contactitem">Tin tức</li>
                                <li className="header__navbar-contactitem">Liên hệ với chúng tôi</li>
                            </ul>
                        </li>
                        <li className="header__navbar-item">
                            <ul className="header__navbar-contactlist">
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-youtube"></i>
                                    </a>
                                </li>
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-pinterest"></i>
                                    </a>
                                </li>
                                <li className="header__navbar-contactitem">
                                    <a href="/" className="header__navbar-contactlink">
                                        <i className="header__navbar-icon fa-brands fa-tiktok"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="header__navbar--gadget">
                    logo + search box +  gadget
                </div>
                <div className="header__navbar--navigation">
                    <ul className="header__navbar-menu">
                        <li className="header__navbar-item">Trang chủ</li>
                        <li className="header__navbar-item">Cửa hàng</li>
                        <li className="header__navbar-item">Thực Phẩm
                            <i className="header__navbar-icon fa-solid fa-angle-down"></i>
                        </li>
                        <li className="header__navbar-item">Sắc đẹp
                            <i className="header__navbar-icon fa-solid fa-angle-down"></i>
                        </li>
                        <li className="header__navbar-item">Sức Khỏe
                            <i className="header__navbar-icon fa-solid fa-angle-down"></i>
                        </li>
                        <li className="header__navbar-item">Mẹ & bé
                            <i className="header__navbar-icon fa-solid fa-angle-down"></i>
                        </li>
                        <li className="header__navbar-item">Tin tức</li>
                        <li className="header__navbar-item">Liên hệ</li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}