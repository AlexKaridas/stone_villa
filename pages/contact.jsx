import styles from '../components/Contact/Contact.module.scss';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, process.env.NEXT_PUBLIC_EMAILJS_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Success!");
            }, (error) => {
                console.log(error.text);
            });

        const cancelCourse = () => {
            document.getElementById("create-course-form").reset();
        }
        cancelCourse()
    };

    return (
        <div className={styles.container}>
            <h1>Get in touch</h1>
            <div className={styles.contactContainer}>
                <div className={styles.social}>
                    <h2>The Host</h2>
                    <div className={styles.profile}></div>
                    <h2>Panagiotis Besios</h2>
                    <div className={styles.socialComponents}>
                        <a href="https://www.airbnb.com/rooms/51678097?source_impression_id=p3_1670292638_VO7LUykuncm99jdp" target="_blank" rel="noreferrer" id={styles.airbnb}><i className="fa-brands fa-airbnb"></i><p>AirBnb</p></a>
                        <a href="https://www.instagram.com/stonevillamouzaki/" target="_blank" rel="noreferrer" id={styles.insta}><i className="fa-brands fa-instagram"></i>Instagram</a>
                        <a href="https://www.booking.com/hotel/gr/stone-villa-mouzaki-trikala-karditsa-mouzaki.el.html" target="_blank" rel="noreferrer" id={styles.booking}><i className="fa-solid fa-b"></i><p>Booking</p></a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} id="create-course-form">
                    <div className={styles.nameAndEmail}>
                        <div className={styles.name}>
                            <h3>Your name</h3>
                            <input type="text" placeholder='name' name="user_name" id={"user_name"} />
                        </div>
                        <div className={styles.email}>
                            <h3>Your email</h3>
                            <input type="email" placeholder='email' name="user_email" id={"user_email"} />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <h3>Message</h3>
                        <textarea placeholder='message' name="message" id={"message"} />
                    </div>
                    <input id={styles.btn} type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}

export default Contact

