import './footer.css'

import {FaFacebookF , FaTelegramPlane} from 'react-icons/fa'
import { BsTwitter , BsInstagram , BsTelephoneFill , BsMap}  from 'react-icons/bs'


function Footer(){
    return (
        <div className="footercontainer">
            <div className='footer_toppart'>

                <div>
                    <div className='footer_icons'>
                        <h1>Connect With Us</h1>
                        <div><FaFacebookF></FaFacebookF></div>
                        <div><BsInstagram></BsInstagram></div>
                        <div><BsTwitter></BsTwitter></div>
                    </div>
                    <div>
                        <h1>Who Are We</h1>
                            <p>About Us</p> 
                            <p>Join us</p>          
                    </div>
                </div>

                <div className='contactdiv'>

                    <h1>Address</h1>
                    <div>
                        <BsMap></BsMap>
                        <p>Ireland</p>
                    </div>
                    <div>
                        <BsTelephoneFill></BsTelephoneFill>
                        <p>X-XXX-XXX-XXXX</p>
                    </div>
                    <div>
                        <FaTelegramPlane></FaTelegramPlane>
                        <p>FoodHUB@test.com</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer