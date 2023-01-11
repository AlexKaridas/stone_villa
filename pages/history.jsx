import React from 'react'
import styles from '../components/History/history.module.scss'
import { useState } from 'react';

const History = () => {

    const [image, setImage] = useState(1);
    const nextImg = () => {
        if (image < 7) {
            setImage(image + 3)
        }
        else {
            setImage(1)
        }
    }
    const prevImg = () => {
        if (image > 1) {
            setImage(image - 3)
        } else {
            setImage(9)
        }
    }

    return (
        <div className={styles.mainContainer}>
            <article>
                <div className={styles.intro}>
                    <article className={styles.text}>
                        <h1><i className="fa-sharp fa-solid fa-landmark"></i>Ιστορία</h1>
                        <i className="fa-sharp fa-solid fa-quote-left"></i>
                        <p>Η κατασκευή της γνωστής πλέον «πέτρινης βίλας στο Μουζάκι» ξεκίνησε το 1890 και οικοδομήθηκε από αρχιτέκτονες της περιοχής. Αποτελούσε αρχικά την κύρια κατοικία του Ιατρού όλης της ευρύτερης περιοχής του Μουζακίου, Ευστάθιου Γκίκα ο οποίος είχε  το προσωπικό του ιατρείο στο αρχοντικό. Το 1920 ολοκληρώθηκε η κατασκευή του Αρχοντικού αφού οικοδομήθηκε και ο πάνω όροφος.</p>
                        <i className="fa-sharp fa-solid fa-quote-right" id={styles.right_quote}></i>
                    </article>
                    <div className={styles.intro_image}>
                        <img src="history/h1.jpg"></img>
                    </div>
                </div>
                <div className={styles.imgText}>
                    <img src="history/olokaytoma.jpg"></img>
                    <p>Στις 8/6/1943 το ιστορικό Μουζάκι γνώρισε τη σκληρότητα των Ιταλών κατακτητών. Τα ιταλικά ασκέρια ξεκίνησαν από τα Τρίκαλα και την Καρδίτσα, προκειμένου να χτυπήσουν κάθε επαναστατική αντάρτικη αντίσταση του ΕΛΑΣ στα ορεινά της Δ.Θεσσαλίας και να σκορπίσουν τη φωτιά και τον όλεθρο στο πέρασμα τους. Η είδηση αυτή αναστάτωσε τον άμαχο πληθυσμό του Μουζακίου. Όλοι τότε φεύγουν για τα βουνά και κρύβονται στα δάση του Μουζακίου, εγκαταλείποντας στη διάθεση των κατακτητών ό,τι με κόπο και ιδρώτα είχαν δημιουργήσει στα χρόνια της ειρήνης. Το Μουζάκι, παρά την αντίσταση και την άμυνα λίγων ανταρτών, κάηκε ολοσχερώς  μαζί με το αρχοντικό Γκίκα, «Φεγγοβολούσε στον κάμπο το λαμπάδιασμα του Μουζακιού» γράφει ο Βασίλης Πάσχος στο βιβλίο του «Αξέχαστη Αντίσταση». Αργότερα, μετά την απελευθέρωση, μια μικρή βοήθεια και του κράτους και με την εργατικότητα των Μουζακιωτών άρχισε η ανοικοδόμηση του Μουζακίου και της γύρω περιοχής, που αναγεννήθηκε μέσα από τα ερείπια της και μαζί και το αρχοντικό μας…</p>
                </div>
                <div className={styles.imgText}>
                    <div className={styles.houseImage} id={styles.house}>
                    </div>
                    <p>Μετά τον θάνατο του ο διάδοχος γιος του Θωμάς Γκικας και αυτός ιατρός στο επάγγελμα συνέχισε ως ιατρός της περιοχής. Έπειτα από Χρόνια χρησιμοποίησης του αρχοντικού ως θερινής και εξοχικής κατοικίας από τον απόγονο Ευασταθιο Γκίκα ΙΙ  έφτασε η εποχή οπου το αρχοντικό ριζικά θα ανακαινιστεί σύμφωνα με τον παραδοσιακό αρχιτεκτονικό τρόπο</p>
                </div>
                <h2 id={styles.subtitle}>Παρακάτω βλέπετε τις εικόνες της ανακαίνισης</h2>
                <div className={styles.carouselContainer} id={styles.carouselC}>
                    <button className={styles.previous} type="button" onClick={() => { prevImg() }}><a href={'#' + image}><i className="fa-solid fa-arrow-left-long"></i></a></button>
                    <div className={styles.carousel}>
                        <img id="1" src="history/1.JPG"></img>
                        <img id="2" src="history/2.JPG"></img>
                        <img id="3" src="history/3.JPG"></img>
                        <img id="4" src="history/4.JPG"></img>
                        <img id="5" src="history/5.JPG"></img>
                        <img id="6" src="history/6.JPG"></img>
                        <img id="7" src="history/7.JPG"></img>
                    </div>
                    <button className={styles.next} type="button" onClick={() => { nextImg() }}><a href={'#' + image}><i className="fa-solid fa-arrow-right-long"></i></a></button>
                </div>
            </article>
        </div>
    )
}

export default History