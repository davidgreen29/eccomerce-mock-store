import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left-section">
                    <h1>Instruments</h1>
                    <span>Strings</span>
                    <span>Percussion</span>
                    <span>keyboard</span>
                   
                </div>

                <div className="footer-right-section">
                        <div className="footer-about">
                            <h1>About</h1>
                            <span>
                                loerem ipsum adipiscing tristique risus nec feugiat 
                                in fermentum posuere urna nec tincidunt praesent 
                                semper feugiat nibh sed pulvinar proin gravida 
                            </span>
                        </div>

                        <div className="footer-contact">
                            <h1>Contact</h1>
                            <span>
                                loerem ipsum adipiscing 
                                tristique risus nec feugiat 
                                in fermentum posuere urna nec tincidunt praesent 
                                semper feugiat nibh sed pulvinar proin gravida
                            </span>
                        </div>

                </div>
            </div>
            <div className="copyright-and-socials-container">
                    <div className="copy-right">
                        <CopyrightIcon/> DavidGreen 2022
                    </div>
                    <div className="social-links-container">
                        <div className="social-links-insta"><InstagramIcon/></div>
                        <div className="social-links-youtube"><YouTubeIcon/></div>
                        <div className="social-links-facebook"><FacebookIcon/></div>
                    </div>
            </div>
        </div>
    )
}
export default Footer;