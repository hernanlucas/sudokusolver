import linkedin from '../img/linkedin.svg'

const Footer = () => (
    <footer>
        <div className="footer-container">
            <p>Made by Lucas Munoz</p>
            <a href="https://www.linkedin.com/in/lucashmunoz/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin icon" />
            </a>
        </div>
    </footer>
)

export default Footer;