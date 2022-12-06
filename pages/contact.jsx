import styles from '../components/Contact/Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>Get in touch</h1>
            <div className={styles.contactContainer}>
                <div className={styles.social}>
                    <h2>The Host</h2>
                    <div className={styles.profile}></div>
                    <div className={styles.socialComponents}>
                        <a href="https://www.airbnb.com/rooms/51678097?source_impression_id=p3_1670292638_VO7LUykuncm99jdp" target="_blank" rel="noreferrer" id={styles.airbnb}><i className="fa-brands fa-airbnb"></i><p>AirBnb</p></a>
                        <a href="https://www.instagram.com/stonevillamouzaki/" target="_blank" rel="noreferrer" id={styles.insta}><i className="fa-brands fa-instagram"></i>Instagram</a>
                        <a href="https://www.booking.com/hotel/gr/stone-villa-mouzaki-trikala-karditsa-mouzaki.el.html" target="_blank" rel="noreferrer" id={styles.booking}><i className="fa-solid fa-b"></i><p>Booking</p></a>
                    </div>
                </div>
                <form>
                    <div className={styles.nameAndEmail}>
                        <div className={styles.name}>
                            <h3>Your name</h3>
                            <input type="text" placeholder='name' />
                        </div>
                        <div className={styles.email}>
                            <h3>Your email</h3>
                            <input type="email" placeholder='email' />
                        </div>
                    </div>
                    <div className={styles.message}>
                        <h3>Message</h3>
                        <textarea placeholder='message' rows="7" cols="33" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact

