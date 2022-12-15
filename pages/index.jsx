import styles from '../components/Index/Index.module.scss';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isClicked, setIsClicked] = useState('Karaiskakis');
  const [isPhotoMounted, setPhotoMounted] = useState(false);
  const [photoNum, setPhotoNum] = useState('');

  useEffect(() => {
    AOS.init();
  }, []);

  const Aphoto = () => {
    setPhotoMounted(true);
    return (
      <div className={styles.photo}>
        <div className={styles.photoTile}></div>
        <img src={photoNum + '.jpg'}></img>
        <button type="button" id={styles.close} onClick={() => {
          setPhotoMounted(false);
        }}>
          X
        </button>
        <button type="button" id={styles.left} onClick={() => {
          if (photoNum > 1) {
            setPhotoNum(photoNum - 1);
          }
        }}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button type="button" id={styles.right} onClick={() => {
          if (photoNum < 18) {
            setPhotoNum(photoNum + 1);
          }
        }}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    )
  }

  // //useEffect
  // useEffect(() => {
  //   if (isPhotoMounted) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [isPhotoMounted]);

  const Amenities = ({ image, title }) => {
    return (
      <div className={styles.amenitiesIcons}>
        <img src={image} alt="amenity-1" />
        <p>{title}</p>
      </div>
    );
  };

  const Landmarks = ({ landmarkPicture, landmarkTitle, landmarkLink, mapdata }) => {
    return (
      <div className={styles.sideIcon}>
        <div className={styles.image}>
          <img src={landmarkPicture} alt="landmark picture"></img>
        </div>
        <div className={styles.imgTitle}>
          <p id={styles.landmarkTitle}>{landmarkTitle}</p>
        </div>
        <div className={styles.map} id={styles.landmarkMap}>
          <Link href={landmarkLink} target="blank">
            <Image src={mapdata} width={500} height={600} alt={"map"} />
          </Link>
        </div>
      </div>
    );
  }

  const ChangeImage = () => {
    switch (isClicked) {
      case 'Karaiskakis':
        return <Landmarks landmarkPicture="https://happytraveller.gr/wp-content/uploads/2018/04/spilia-karaiskaki-mouzaki-limni-plastira-happy-traveller-6.jpg" landmarkTitle="Karaiskakis birth cave" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/%CE%A3%CF%80%CE%AE%CE%BB%CE%B1%CE%B9%CE%BF+%CE%B3%CE%AD%CE%BD%CE%BD%CE%B7%CF%83%CE%B7%CF%82+%CF%84%CE%BF%CF%85+%CE%93%CE%B5%CF%89%CF%81%CE%B3%CE%AF%CE%BF%CF%85+%CE%9A%CE%B1%CF%81%CE%B1%CF%8A%CF%83%CE%BA%CE%AC%CE%BA%CE%B7,+%CE%9C%CE%BF%CF%85%CE%B6%CE%AC%CE%BA%CE%B9+430+60/@39.4224201,21.6707672,15.1z/data=!4m9!4m8!1m0!1m5!1m1!1s0x135924c3215fc201:0x8015d1bbd6fb92be!2m2!1d21.6865732!2d39.4161302!3e0" mapdata="/karaiskakis_cave.png" />
      case 'Arched bridge Paleokarya':
        return <Landmarks landmarkPicture="https://st3.depositphotos.com/6887034/17457/i/450/depositphotos_174577830-stock-photo-paleokarya-old-stone-arched-bridge.jpg" landmarkTitle="Arched bridge Paleokarya" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/%CE%9A%CE%B1%CF%84%CE%B1%CF%81%CF%81%CE%AC%CE%BA%CF%84%CE%B7%CF%82+-+%CE%A4%CE%BF%CE%BE%CE%BF%CF%84%CE%AE+%CE%B3%CE%AD%CF%86%CF%85%CF%81%CE%B1+%CE%A0%CE%B1%CE%BB%CE%B1%CE%B9%CE%BF%CE%BA%CE%B1%CF%81%CF%85%CE%AC%CF%82,+%CE%95%CF%80%CE%B1%CF%81%CF%87,+%CE%95%CF%80%CE%B1%CF%81.%CE%9F%CE%B4.+%CE%A0%CE%B1%CE%BB%CE%B1%CE%B9%CE%BF%CE%BA%CE%B1%CF%81%CF%85%CE%AC%CF%82-%CE%A1%CE%BF%CF%80%CF%89%CF%84%CE%BF%CF%8D,+%CE%A0%CF%8D%CE%BB%CE%B7+420+32/@39.443754,21.573519,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x135939ac0a966d41:0x6d2d79aa951ed778!2m2!1d21.527552!2d39.4311874!3e0" mapdata="/Arched bridge Paleokarya.png" />
      case 'Elf Mill':
        return <Landmarks landmarkPicture="https://www.newsit.gr/wp-content/uploads/2021/12/mylos-xioni.jpg" landmarkTitle=" Trikala - Elf Mill" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/%CE%9F+%CE%9C%CF%8D%CE%BB%CE%BF%CF%82+%CF%84%CF%89%CE%BD+%CE%9E%CF%89%CF%84%CE%B9%CE%BA%CF%8E%CE%BD,+%CE%A4%CF%81%CE%AF%CE%BA%CE%B1%CE%BB%CE%B1/@39.4966608,21.6875178,12.6z/data=!4m9!4m8!1m0!1m5!1m1!1s0x135918d4feb76967:0xb8328243997289d5!2m2!1d21.7588138!2d39.546263!3e0" mapdata="/trikala-elf-mill.png" />
      case 'Karditsa':
        return <Landmarks landmarkPicture="https://i.ytimg.com/vi/sjrWQemZ9u8/maxresdefault.jpg" landmarkTitle="Karditsa" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/Karditsa/@39.4105822,21.7496772,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1358d90f2ecd1d7b:0x5e3be538443e1f7e!2m2!1d21.9214049!2d39.3640258!3e0" mapdata="/karditsa.png" />
      case 'Elati':
        return <Landmarks landmarkPicture="https://patakistravel.gr/wp-content/uploads/2018/10/metsovo.jpg" landmarkTitle="Elati" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/Elati/@39.4692765,21.5640989,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x13593eefe49f522f:0x500bd2ce2bb3200!2m2!1d21.5351193!2d39.504302!3e0" mapdata="/elati.png" />
      case 'Kalabaka':
        return <Landmarks landmarkPicture="https://www.kathimerini.gr/wp-content/uploads/2020/07/meteora-768x480.jpg" landmarkTitle="Kalabaka" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/Kalambaka/@39.5791336,21.6341765,11.55z/data=!4m9!4m8!1m0!1m5!1m1!1s0x13590fcfb5752c79:0xc0a360035a1f5ffa!2m2!1d21.6288728!2d39.706618!3e0" mapdata="/kalabaka.png" />
      case 'Pertouli':
        return <Landmarks landmarkPicture="https://www.in.gr/wp-content/uploads/2021/02/pertouli.26-1.jpg" landmarkTitle="Pertouli" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/%CE%A0%CE%B5%CF%81%CF%84%CE%BF%CF%8D%CE%BB%CE%B9/@39.4979785,21.5153856,12.46z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1359407181fd2d61:0xdbeef81be397d9bc!2m2!1d21.4658253!2d39.5410804!3e0" mapdata="/pertouli.png" />
      case 'Plastira':
        return <Landmarks landmarkPicture="https://www.iefimerida.gr/sites/default/files/styles/in_article/public/article-images/2021-11/plastira-lake.jpg?itok=k9SC1R30" landmarkTitle="Lake Plastira" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/Lake+Plastiras/@39.3744122,21.6533176,12.52z/data=!4m9!4m8!1m0!1m5!1m1!1s0x13592eee096bd889:0x756dd1eef5d4c71!2m2!1d21.7376178!2d39.2963316!3e0" mapdata="/lakePlastira.png" />
      default:
        return <Landmarks landmarkPicture="https://happytraveller.gr/wp-content/uploads/2018/04/spilia-karaiskaki-mouzaki-limni-plastira-happy-traveller-6.jpg" landmarkTitle="Karaiskakis birth cave" landmarkLink="https://www.google.com/maps/dir/39.4331761,21.6626941/%CE%A3%CF%80%CE%AE%CE%BB%CE%B1%CE%B9%CE%BF+%CE%B3%CE%AD%CE%BD%CE%BD%CE%B7%CF%83%CE%B7%CF%82+%CF%84%CE%BF%CF%85+%CE%93%CE%B5%CF%89%CF%81%CE%B3%CE%AF%CE%BF%CF%85+%CE%9A%CE%B1%CF%81%CE%B1%CF%8A%CF%83%CE%BA%CE%AC%CE%BA%CE%B7,+%CE%9C%CE%BF%CF%85%CE%B6%CE%AC%CE%BA%CE%B9+430+60/@39.4224201,21.6707672,15.1z/data=!4m9!4m8!1m0!1m5!1m1!1s0x135924c3215fc201:0x8015d1bbd6fb92be!2m2!1d21.6865732!2d39.4161302!3e0" mapdata="/karaiskakis_cave.png" />
    }
  }

  return (
    <div className={styles.main}>
      <section className={styles.landing}>
        <img src="/quote.png" id={styles.quote} data-aos="fade-right" data-aos-duration="1000" alt="quote icon"></img>
        <div className={styles.landingText} data-aos="fade-right" data-aos-duration="1000">
          <div className={styles.title}>
            <h1 className={styles.title} data-aos="fade-right" data-aos-duration="1000">
              <div className={styles.lineText} data-aos="fade-right" data-aos-duration="1000"></div>
              Welcome to Stone Villa Mouzaki!</h1>
          </div>
          <p data-aos="fade-right" data-aos-duration="1000">Αυτή η πέτρινη βίλα μουζακίου βρίσκεται στο Μουζάκι, σε απόσταση σαραντα έξι χιλιόμετρα από τα Μετέωρα, και προσφέρει κήπο, δωρεάν wifi και εικοσιτετράωρη ρεσεψιόν. Το κατάλυμα προσφέρει μπαλκόνι και θέα στον κήπο.</p>
        </div>
        <Link href="/contact" id={styles.bookButton} data-aos="fade-right" data-aos-duration="1000"><p>Book Your Stay</p></Link>
        <img src="/arrow.png" alt="arrow icon" id={styles.arrow} data-aos="fade-right" data-aos-duration="1000"></img>
        <div className={styles.landing_image} data-aos="fade-up" data-aos-duration="1000">
        </div>
      </section>

      <hr id={styles.lineBreak} data-aos="fade-right" />

      <section className={styles.description}>
        <p id={styles.titleD}>The Host&apos;s choice..</p>
        <div className={styles.imagesAndText}>
          <div className={styles.descriptionText} data-aos="fade-up">
            <p>Απολαύστε τις διακοπές σας!
              Το αρχοντικό είναι ιδανικό για οικογένειες, παρέες φίλων ή ζευγάρια που αναζητούν πιο αποκλειστικό και ιδιωτικό μέρος για να περάσουν τις διακοπές τους.
              Η stonevilla θα σας προσφέρει όλα όσα χρειάζεστε για να έχετε μια ευχάριστη διαμονή και να εξερευνήσετε όλη την ευρύτερη περιοχή καθώς θα σας ενημερώσω κατάλληλα και για όλα τα μέρη που αξίζει να επισκεφτείτε
              (Μετέωρα, Μύλος των ξωτικών, Ελάτη, Περτούλι, λίμνη Πλαστήρα, Τρίκαλα ..κτλπ)</p>
          </div>

          <div className={styles.gallery} id={styles.gallery}>
            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(1) }}>
                <img className={styles.image} src="1.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(2) }}>
                <img className={styles.image} src="2.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(3) }}>
                <img className={styles.image} src="3.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>

            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(4) }}>
                <img className={styles.image} src="4.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(5) }}>
                <img className={styles.image} src="5.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(6) }}>
                <img className={styles.image} src="6.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>

            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(7) }}>
                <img className={styles.image} src="7.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(8) }}>
                <img className={styles.image} src="8.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(9) }}>
                <img className={styles.image} src="9.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>
          </div>

          <div className={styles.gallery}>
            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(10) }}>
                <img className={styles.image} src="10.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(11) }}>
                <img className={styles.image} src="11.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(12) }}>
                <img className={styles.image} src="12.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>

            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(13) }}>
                <img className={styles.image} src="13.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(14) }}>
                <img className={styles.image} src="14.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(15) }}>
                <img className={styles.image} src="15.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>

            <div className={styles.galleryCollumn} data-aos="fade-up">
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(16) }}>
                <img className={styles.image} src="16.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(17) }}>
                <img className={styles.image} src="17.jpg" alt="stone_villa_interior_image"></img>
              </a>
              <a href="#gallery" onClick={() => { Aphoto(); setPhotoNum(18) }}>
                <img className={styles.image} src="18.jpg" alt="stone_villa_interior_image"></img>
              </a>
            </div>
          </div>
          {isPhotoMounted ? <Aphoto /> : null}
        </div >
      </section >
      <hr id={styles.lineBreak} data-aos="fade-right" />
      <div className={styles.amenitiesTitle}>
        <p>Ανέσεις</p>
      </div>
      <section className={styles.amenities}>
        <div className={styles.amenitiesIconsContainer} data-aos="fade-right" data-aos-duration="1000">
          <Amenities image="https://cdn-icons-png.flaticon.com/512/1769/1769039.png" title="8 Guests" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/159/159599.png" title="Free Wifi" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/301/301811.png" title="Dedicated Workspace" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/3159/3159513.png" title="32' TV" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/1606/1606657.png" title="Kitchen" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/706/706401.png" title="Parking" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/2502/2502273.png" title="Air Condition" data-aos="fade-right" data-aos-duration="1000" />
          <Amenities image="https://cdn-icons-png.flaticon.com/512/289/289759.png" title="Heating" data-aos="fade-right" data-aos-duration="1000" />
        </div>
        <div className={styles.amenitiesText} data-aos="fade-up">
          <div id={styles.spaceTitle}><h3>Ο χώρος</h3></div>
          <article>
            <p>
              Πρόκειται για ένα παραδοσιακό και ζεστό αρχοντικό,
              ιδανικό για απόδραση και ξεκούραση. Οι ανέσεις και
              ο εξοπλισμός του αποτελούν εγγύηση για μια άνετη και
              ευχάριστη διαμονή.</p>
            <div id={styles.spaceTitle}>
              <h3 id={styles.spaceTitle}>Ο εξωτερικός χώρος</h3>
            </div>
            <p>
              Ο κήπος προσφέρεται για στιγμές χαλάρωσης, υπό τους ήχους
              των πουλιών και την θεα του βουνού..! Είναι εξοπλισμένο με
              τραπεζαρία, μεγάλο καθιστικό για χαλάρωση καθως και
              τραπέζι και καρέκλες εξωτερικού χωρου εαν επιθυμείτε να απολαύσετε
              το φαγητό σας απευθείας μετά από το εξωτερικό σπιτάκι που είναι
              αποκλειστικά ψησταριά για μπάρμπεκιου (όλα τα απαραίτητα εξαρτήματα
              φυσικά ειναι διαθέσιμα).
              Το καθιστικό διαθέτει 3 θεσιο καναπέ 6 πολυθρόνες, μικρά σκαμπό αλλα και τηλεόραση smart 32 ιντσών.
              Ανοίγοντας τα παράθυρα της κρεβατοκάμαρας μπορείτε να απολαύσετε τη θέα των βουνών στο βάθος καθώς είναι εύκολα διακριτά ανάμεσα από τις σκαλισμένες
              καρδιές επάνω στα ξύλινα παραδοσιακά παραθυρόφυλα.
            </p>
            <div id={styles.spaceTitle}>
              <h3>Η κουζίνα</h3>
            </div>
            <p>Είναι εξοπλισμένη με ψυγείο, ηλεκτρική κουζίνα, ηλεκτρικό βραστήρα, τοστιέρα, καφετιέρα φίλτρου (γαλλικό),
              καμινέτο υγραερίου και διαθέτει πάγκο με καρέκλες!</p>
            <div id={styles.spaceTitle}>
              <h3>Το καθιστικό</h3>
            </div>
            <p>
              Το καθιστικό διαθέτει 3 θεσιο καναπέ 6 πολυθρόνες, μικρά σκαμπό αλλα και τηλεόραση smart 32 ιντσών.
            </p>
            <div id={styles.spaceTitle}>
              <h3>Επιπλέον..</h3>
            </div>
            <p>Ασύρματη σύνδεση ίντερνετ παρέχεται σε όλους τους χώρους.
              Το πάρκινγκ είναι εύκολο και δωρεάν, δίπλα από το αρχοντικό και η θέρμανση είναι αυτόνομη (πετρέλαιο).
            </p>
            <div className={styles.importantContainer}>
              <img src="https://cdn-icons-png.flaticon.com/512/80/80795.png" alt="exclamation mark icon"></img>
              <p id={styles.important}>Σε περίπτωση λιγότερων ατόμων επικοινωνήστε με τον οικοδεσπότη για τροποποίηση τιμής.</p>
            </div>
          </article>
        </div>
      </section>
      <hr id={styles.lineBreak} data-aos="fade-right" />
      <section className={styles.GuestAccess}>
        <div className={styles.amenitiesTitle}>
          <p>Αξιοθέατα</p>
        </div>
        <div className={styles.subtitleContainer}>
          <p>Απόσταση από αξιοθέατα</p>
          <p>Επιλέξτε τοποθεσία</p>
        </div>
        <div className={styles.GuestAccessContainer}>
          <div className={styles.roadmapContainer} data-aos="fade-right" data-aos-duration="1000">
            <div className={styles.roadmap}>
              <div className={styles.roadmapItem}>
                <p id={styles.time}>12 λεπτά</p>
                <div className={styles.destination}></div>
                <p id={styles.karaiskakis} onClick={() => setIsClicked('Karaiskakis')}><a href="#sideIcon">Σπήλαιο γέννησης Καραισκάκη</a></p>
              </div>
              <hr id={styles.destination1road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>15 λεπτά</p>
                <div className={styles.destination}></div>
                <p id={styles.paleokarya} onClick={() => setIsClicked('Arched bridge Paleokarya')}><a href="#sideIcon">Καταράκτης - Πέτρινη Γέφυρα Παλαιοκαρυάς</a></p>
              </div>
              <hr id={styles.destination2road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>20 λεπτά</p>
                <div className={styles.destination}></div>
                <p onClick={() => setIsClicked('Elf Mill')}><a href="#sideIcon">Τρίκαλα - Μύλος των Ξωτικών</a></p>
              </div>
              <hr id={styles.destination3road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>25 λεπτά</p>
                <div className={styles.destination}></div>
                <p onClick={() => setIsClicked('Karditsa')}><a href="#sideIcon">Καρδίτσα</a></p> <p id={styles.elati} onClick={() => setIsClicked('Elati')}><a href="#sideIcon">- Elati</a></p>
              </div>
              <hr id={styles.destination4road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>30 λεπτά</p>
                <div className={styles.destination}></div>
                <p id={styles.kalabaka} onClick={() => setIsClicked('Kalabaka')}><a href="#sideIcon">Καλαμπάκα - Μετέωρα</a></p>
              </div>
              <hr id={styles.destination5road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>40 λεπτά</p>
                <div className={styles.destination}></div>
                <p onClick={() => setIsClicked('Pertouli')}><a href="#sideIcon">Πέρτουλι</a></p>
              </div>
              <hr id={styles.destination6road} />
              <div className={styles.roadmapItem}>
                <p id={styles.time}>45 λεπτά</p>
                <div className={styles.destination}></div>
                <p onClick={() => setIsClicked('Plastira')}><a href="#sideIcon">Λίμνη Πλαστήρα</a></p>
              </div>
            </div>
          </div>
          <div className={styles.sideIconContainer} id="sideIcon" data-aos="fade-left" data-aos-duration="1000">
            {ChangeImage()}
          </div>
        </div>
      </section>
    </div >
  )
}
