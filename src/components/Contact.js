import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-regular fa-paper-plane"></i> hokeiching.work@gmail.com</p>
                        <p><i className="fa-solid fa-phone-volume"></i> (+65) 96809818</p>
                        <div className="social-icons">
                            <a href="https://github.com/snowcrashcode"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/ho-k-83162a298/"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a href="images/resume.pdf" download className="btn btn2">Download Resume</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Ho Kei Ching.</p><i className="fa-solid fa-heart"></i>
            </div>
        </div>
    );
};

export default Contact;
