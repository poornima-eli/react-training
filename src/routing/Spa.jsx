import React from 'react';
import '../styles/spa.css';

const Spa = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header>
                <nav className="navbarspa">
                    <button onClick={() => handleScroll('section1')}>About Me</button>
                    <button onClick={() => handleScroll('section2')}>Etymology</button>
                    <button onClick={() => handleScroll('section3')}>History</button>
                    <button onClick={() => handleScroll('section4')}>Climate</button>
                </nav>
            </header>
            <h3>Karur</h3>
            <section id="section1" className="section">
                <h5>About Me</h5>
                <p>
                    Karur is a city in the Indian state of Tamil Nadu. Karur is the administrative headquarters of
                    Karur district. It is located on the banks of River Amaravathi, Kaveri and Noyyal. Karur is well
                    known for the export of Home Textile products to USA, UK, Australia, Europe and many more
                    countries. It is situated at about 395 kilometers southwest of the state capital Chennai, 75 km
                    west from Tiruchirappalli, 120 km away in east from Coimbatore, 150 km away north from Madurai,
                    300 km away southeast from Bengaluru and northeast from Kochi.
                </p>
            </section>
            <section id="section2" className="section">
                <h5>Etymology</h5>
                <p>
                    Karur is mentioned in inscriptions and literature by two names, Karuvoor (the home of Karuvoor
                    Devar) and Vanji. Additionally, it has been referred to as: Adipuram, Tiruaanilai,
                    Paupatheechuram, Karuvaippatinam, Vanjularanyam, Garbhapuram, Thiru vithuvakkottam,
                    Bhaskarapuram, Mudivazhangu Viracholapuram, Karapuram, Aadaga maadam, Cherama nagar and
                    Shanmangala Kshetram. Among them, the name Adipuram, meaning the first city seems to indicate
                    that it was held as the foremost city by the medieval writers. It was also called Vanchi
                    moothur, the ancient city of Vanji. In the foreign notices of Ptolemy, it was called Karoura –
                    an inland capital of the Cheras.[3]
                </p>
            </section>
            <section id="section3" className="section">
                <h5>History</h5>
                <p>
                    Karur has been ruled at different times by the Murkala Cheras (before the sangam period) before
                    the kodungalur Cheras, Later Cholas, Vijayanagar Empire, Madurai Nayaks, Mysore Kingdom and the
                    British.
                    Karur is one of the oldest towns in Tamil Nadu[4] and has played a very significant role in the
                    history and culture of the Tamils. The history dates back to the Sangam period when it was a
                    flourishing trade centre. Karur was built on the banks of river Amaravathi which was called
                    Aanporunai during the Sangam days. According to Hinduism, Brahma began the work of creation
                    here, which is referred to as the "place of the sacred cow."[citation needed]. Karuvur,
                    identified with Karur, was also the capital of the ancient king Musuguntha Solan.[5]
                </p>
            </section>
            <section id="section4" className="section">
                <h5>Climate</h5>
                <p>
                    The prevailing climate in Karur is known as a hot semi-arid climate, labelled BSh under the Köppen
                    and Geiger classification system. Karur receives an average of 590 to 600 mm (23 to 24 in) annually,
                    which is substantially below the state average of 1,008 mm (39.7 in). The South West monsoon, with
                    an onset in June and lasting up to August, brings scant rainfall since Karur is in a rainshadow
                    region. The bulk of the rainfall comes during summer months (late April, May) and the North East
                    monsoon in the months of October, November and December.[3][10] The driest month is March, with only
                    8 millimetres or 0.31 inches of rain. Most rain falls in October, with an average of 166 millimetres
                    or 6.54 inches. The precipitation varies 158 millimetres or 6.22 inches between the driest month and
                    the wettest month.

                    The average temperature in Karur is 28.7 °C or 83.7 °F. The temperature ranges from a maximum of 39
                    °C (102.2 °F) to a minimum of 17 °C (62.6 °F). Like the rest of the state, April to June are the
                    hottest months and December to January are the coolest. The average temperatures vary during the
                    year by 5.9 °C or 10.6 °F. With an average of 31.5 °C or 88.7 °F, May is the hottest month, whilst
                    in the mildest months of December the average temperature is 25.6 °C or 78.1 °F.
                </p>
            </section>
        </div>
    );
};

export default Spa;
