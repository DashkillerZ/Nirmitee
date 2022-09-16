import { FaTwitter,FaLinkedin,FaFacebook,FaGithub,FaDribbble} from 'react-icons/fa';
const Footer = () => {
    return (  
        <>
        <hr className='footer-hr' />
        <div className="footer">
            <div className="footer-nav">
                <FaTwitter/>    
                <FaLinkedin/>
                <FaFacebook/>
                <FaGithub/>
                <FaDribbble/>
            </div>
            <div className='footer-title'>
                Nirmitee.io
            </div>
            <div className="copyright">
                &#169;2022NirmiteeAllRightsReserved
            </div>
        </div>
        </>
    );
}
 
export default Footer;