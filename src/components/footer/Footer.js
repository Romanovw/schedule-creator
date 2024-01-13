import "./footer.css"
import logo from  "./assets/logo.svg"

function Footer() {
    return (
        <footer className="footer">
              <img className="footer-logo" src={logo} alt="logo-romanov.vw" />
              <div className="info">Email: romanov.vw@gmail.com</div>
          <div className="copyright">Volodymyr Romanov, 2023</div>
        </footer>
      );
}

export default Footer;