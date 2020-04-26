import '../styles/FooterStyle.css';
const Footer = () => {
    return (
        <div>
            <div id="footer_bar">
                <div className="links special">
                    <div id="bigtext"> 
                        kylie cosmetics
                    </div>
                    <div id="smalltext">
                        by kylie jenner
                    </div>
                </div>
                <div className="links">
                    home
                </div>
                <div className="links">
                    abouts
                </div>
                <div className="links">
                    faqs
                </div>
                <div className="links">
                    shipping
                </div>
                <div className="links">
                    privacy
                </div>
                <div className="links">
                    terms
                </div>
                <div className="links">
                    cookie policy
                </div>
                <div className="links">
                    contact us
                </div>
                <div className="links">
                    gift cards
                </div>
                <div className="links">
                    accessibility
                </div>
                <div className="links">
                    kylie skin
                </div>
            </div>
            <div id="social">
                <a href="">
                    <img className = "social_icons" src="../static/facebook.webp" />
                </a>
                <a href="">
                    <img className = "social_icons" src="../static/twitter.webp" />
                </a>
                <a href="">
                    <img className = "social_icons" src="../static/instagram.webp" />
                </a>
            </div>
            <div id="brand">
                <a href="">
                    <img className = "brand_icons" src="../static/" />
                </a>
                <a href="">
                    <img className = "brand_icons" src="../static/" />
                </a>
                <a href="">
                    <img className = "brand_icons" src="../static/" />
                </a>
            </div>
            <div id="copyright">
              copyright &copy; 2018 kylie cosmetic by kylie jenner  
            </div>
        </div>
    );
}

export default Footer;