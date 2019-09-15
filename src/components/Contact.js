import React from 'react';
import mail from "../img/mail.png"
import "../styles/Contact.css"
import phone from "../img/phone.png"
import facebook from "../img/facebook.png"
import linkedin from "../img/linkedid.png"
import github from "../img/github.png"
import photo from "../img/photo1.png"




const Contact = (props) => {

    const description23 = props.isEnglish ? <h2 className="contact">Get in touch with me</h2> : <h2 className="contact">Skontaktuj się ze mną</h2>
    const description24 = props.isEnglish ? <p className="find-me">You can find me on:</p> : <p className="find-me">Możesz znaleźć mnie na:</p>

    return (
        <div className="paper color">
            <div className="photo">
                <img src={photo} alt="" />
            </div>


            <div className="border-contact">
                {description23}
            </div>

            <div className="contact-first">



                <div className="email">
                    <img src={mail} alt="" />
                    <p>marcin.lasecki99@gmail.com</p>
                </div>
                <div className="phone">
                    <img src={phone} alt="" />
                    <p>500 397 727</p>
                </div>

            </div>

            {description24}

            <div className="contact-second">
                <a href="https://www.facebook.com/marcin.lasecki.5">
                    <div className="facebook">
                        <img src={facebook} alt="" />

                    </div>
                </a>

                <a href="https://www.linkedin.com/in/marcin-lasecki-a4730b185/">
                    <div className="linkedin">
                        <img src={linkedin} alt="" />

                    </div>
                </a>

                <a href="https://github.com/Lasecki99">
                    <div className="github">
                        <img src={github} alt="" />

                    </div>
                </a>
            </div>



        </div>
    );
}

export default Contact;