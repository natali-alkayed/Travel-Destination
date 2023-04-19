import './Footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div class="social-container">
        <span> Author: Natali Alkayed </span>

          <a href="https://www.youtube.com/watch?v=ExxgXlYy9k0&list=PLjiyR6nPcbxy_nbEQHBj5MwGicZRTRM_w"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>

      <a href="https://ar-ar.facebook.com/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/?lang=ar" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/accounts/login/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>   
    
    )
}
export default Footer;
