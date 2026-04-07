<script setup>
const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Offerings', href: '#offerings' },
  { name: 'Contact', href: '#contact' }
]

const features = [
  {
    number: '01',
    title: 'Regular Mass Services',
    description: 'Join us for our daily and Sunday Mass services, offered in both English and Spanish. Experience the warmth of our worship community as we come together in faith. All are welcome to partake in this sacred tradition, fostering spiritual growth and connection.',
    image: 'http://44.202.215.36/wp-content/uploads/2026/02/pexels-photo-236339-1-1024x682.jpeg'
  },
  {
    number: '02',
    title: 'Community Events',
    description: 'Participate in a variety of engaging community events that nurture fellowship and connection among parishioners. From seasonal celebrations to service projects, there is always an opportunity to get involved and strengthen our bonds. These gatherings are integral to our vibrant parish life.',
    image: 'http://44.202.215.36/wp-content/uploads/2026/02/IMG_4601-1-scaled-1-1024x576.jpeg'
  },
  {
    number: '03',
    title: 'Spiritual Education',
    description: 'Explore your faith further through our spiritual education programs, including Bible study and catechesis for all ages. These sessions aim to deepen understanding and instill a sense of purpose in our lives. Everyone is invited to grow in faith together.',
    image: 'http://44.202.215.36/wp-content/uploads/2026/02/5D946E83-6A4A-4431-9211-C49773718CD0_1_105_c-1.jpeg'
  }
]

const facilities = [
  {
    title: 'Daily Mass Services',
    description: 'Join us for daily Mass as we gather in prayer and reflection. All are welcome to experience the grace of the Eucharist.'
  },
  {
    title: 'Special Events',
    description: 'Participate in various community events designed to strengthen our bonds and deepen our faith. Everyone is invited to join in the joy!'
  },
  {
    title: 'Welcoming Environment',
    description: 'Our parish is a place of acceptance and love. We cultivate a friendly atmosphere for worship and fellowship.'
  }
]
</script>

<template>
  <div class="app">
    <!-- Header -->
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <img src="http://44.202.215.36/wp-content/uploads/2026/02/Asset-2@300x-8.png" alt="St Henry Catholic Church" />
          <span class="site-title">St Henry Catholic Church</span>
        </div>
        <nav class="nav">
          <a v-for="item in navItems" :key="item.name" :href="item.href" class="nav-link">{{ item.name }}</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <h1>Welcome to St Henry Catholic Church</h1>
        <p>Experience a vibrant community of faith where all are welcome. Join us for uplifting Mass services in both English and Spanish.</p>
        <a href="#contact" class="btn btn-primary">Get Involved</a>
      </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <span class="section-label">Welcome</span>
        <h2>Discover Our Vibrant Parish Community</h2>
        <p class="about-text">St Henry Catholic Church serves as a beacon of faith and community in Brigham City, Utah. As a welcoming parish, we pride ourselves on creating an inclusive environment where individuals and families can come together in worship. Our commitment to providing regular Mass services in both English and Spanish ensures that everyone feels at home. Through our various church activities and events, we strive to strengthen the bonds between our parishioners and cultivate a vibrant spiritual community.</p>
        <p class="about-text">Founded to meet the spiritual needs of the local community, St Henry Catholic Church has been on a remarkable journey of faith and service. From its humble beginnings, the church has grown steadily, welcoming families from diverse backgrounds. Our ongoing dedication is reflected in our expanding programs and outreach initiatives.</p>
        
        <div class="history-section">
          <h3>History of St. Henry's</h3>
          
          <h4>Catholics Before St. Henry's:</h4>
          <p class="about-text">From the days of the early trappers to date there have always been some Catholics in the area. One cannot write about the history of St. Henry's without writing about the Catholics in all of Box Elder County. Many good intentions of building a chapel in Box Elder County existed clear back to the 1870's. As a matter of fact, in June,1871,the Catholic residents of Corinne met with Father Patrick Walsh of Salt Lake City and plans were made for a school building that could also be used as a chapel. A committee of nine members was chosen and within four days they raised a sum of $2475.00 for the construction of the building. Nothing was done. The building was never constructed. Nevertheless, occasional visits to offer mass in the Opera House were made by Father Walsh, Father Patrick Dowling and other priests. Unfortunately by 1873 most of the Catholics in the area were gone.</p>
          <p class="about-text">In the early 1900's, the Catholics of the area were forced to travel to Ogden to attend Mass and receive the Sacraments. Box Elder County had become part of the St. Joseph Parish. In March 1918,a group of Catholics of Mexican Descent had arrived in Garland to work in the sugar beet fields. Yet, it wasn't until the winter of 1932 when Father Patrick Kennedy had come to bless a grave that he realized that there were numerous Catholics in the area with children who needed religious education. In Corinne, there were the Roche, the Andretta, the Baltazar, the Mendez, and the Singh families. In Garland there were two families, the Candias and the Ortegas.</p>
          <p class="about-text">In the Spring, May 1933, the first class traveled to Ogden to receive the Sacrament of Penance and Communion. They were taught by Father Patrick F. Kennedy who would drive to Corinne on Saturdays.The second class made up of nine children was taught by Father Frances Sloane. They received their First Communion in Corinne at a Mass offered in a garage that belonged to the railroad company. Mrs. Franco Andretta and Mrs. Paul Baltazar assisted Father Floane in setting up the altar. After this, classes were discontinued and the youngsters pursued their religious education via correspondence.</p>
          <p class="about-text">On December 8,1941,the day after Pearl Harbor, two Dominican priests went to Logan to the nearly completed church, St. Thomas Aquinas. It was the beginning of a new parish and the Box Elder county area became a part of it. Father Joseph Valine, the first pastor of St. Thomas Aquinas, and his assistant, Father Colin McEachin would take turns and offer Mass in Corinne on Sunday at 8 o'clock in the morning. Mass was first offered in the old Corinne City Hall and later at the Historic Methodist Church. Mrs.C.G.(Jennie) Adney was the organist. She would play for Midnight Mass and Easter. The choir was made up of members from the Singh family. There were approximately 50-60 people that attended Midnight Mass. After Mass, Mr. Sunder Singh provided bags of candy, nuts and an orange for the children. There was also a beautiful nativity scene set up by Marcelo Singh in the church for the holidays.</p>

          <h4>The Beginning of St. Henry's:</h4>
          <p class="about-text">Soon Masses were being offered in the Legion Home in Brigham as well as in Corinne. In 1943 a house was purchased in Brigham City with the help of the Catholic Church Extension Society.It was located at 23 S., 1st East. It was a combination of church and rectory. The Visentiner Family lived in the house until 1949. They took care of the church and assisted the priests in many ways Father Valine initiated the Sunday mass in Brigham for a congregation numbering about 50-60 members. Offering mass in Corinne continued. The Christmas Midnight Mass continued to be offered in Corinne. Father Valine remained pastor of St. Thomas Aquinas until January 1947. During Father Valine's time in Logan,he had Father Thomas Navien from Boston as an assistant for a year. There were other assistants, Father Leo J.Halleran and others. They all took their turns in offering mass in Corinne and Brigham.</p>
          <p class="about-text">Father Jerome Stoffel became the second pastor of St. Thomas Aquinas Parish. He came in 1947. Father Stoffel continued to offer mass in Corinne and Brigham. Many who attended mass during this time were military personnel and their dependents. Brigham city and the rest of the county continued being a mission of St. Thomas Aquinas until 1949.</p>
          <p class="about-text">Bushnell Hospital, located in Brigham City, was eventually converted into a school for the Navajo Indian children and the influx of a large number of Catholic youngsters made it necessary to raise St. Henry's from a mission to a parish status. The Rev. James C. Coyne took charge as the first pastor of St. Henry's Church in October 1949. Father Coyne had been a chaplain in the army. During his administration he achieved a rapport with the administration of the Indian School and the catechetical program for the Navajo children was instituted. Religious classes were held at the school. Mass was offered at the Indian Schoo1 Chapel. The first baptism at St. Henry's Church was on December 8, 1949. There were two boys and a girl from the Harvey and Bonnie Buist family that were baptized. Father Coyne was the pastor for one year.</p>
          <p class="about-text">On October 1,1950, the Rev. Alfred W. Harding, MM became the second pastor. Father Harding was a veteran Marynoll missionary. He had long experience in the mission of Korea. He loved the parishioners and labored in a caring way for the Indian children. At the time, there were about 950 Catholic Indian children at the school. He also offered mass in Corinne at the Baltazar house.</p>
          <p class="about-text">The most Rev. Duane G. Hunt, Bishop of Salt Lake City, asked the Society of Jesus to care for the Indian School. The Society accepted the invitation to assume charge of St. Henry's Parish and the Indian School simultaneously. The Jesuits succeeded Father Harding. On September 15, 1952,two Jesuits arrived in Brigham to take over the parish. The new pastor of St. Henry's was the Rev. Edward J. Whelan, S.J. There was an influx of people coming intothe area to work at Thiokol. The chapel had to be enlarged. Donations from Father Whelan's friends were used to help with this endeavor. Two masses were offered at the Indian School Chapel. Mass was, also, offered in Corinne. Another Mass was offered at Little Valley in Lucin which was about a 135 mile round trip.</p>
          <p class="about-text">During this period, there were about 15-22 children traveling to Ogden to attend St. Joseph's School. At first the parents would provide a car pool for the children. Eventually, a bus was purchased by the parish. Father Dunn drove the bus and later John Gomez was the driver. The convent for the nuns at 420South Main in Brigham was purchased in 1952. There were four nuns whose primary work was working with the Indian children. The religious classes were taught at the school. They also worked with other children in Brigham, Logan, Corinne and Tremonton. The Ladies Altar Society was formed during this period.</p>
          <p class="about-text">Father Whelan left in 1955. Father William J. Dunne, S.J. became the fourth pastor and the second Jesuit pastor of St. Henry's. Father Francis Dunn was his assistant. Father William Dunne served at St. Henry's from 1955 to the late summer of 1957.</p>

          <h4>St. Henry's As We Know It</h4>
          <p class="about-text">Father Joseph M. Clark came to St. Henry's in 1957. Father Clark heard about the surplus chapel at Utah General Depot in Ogden. He submitted his bid to the Corp of Engineers in San Francisco and he obtained the chapel. On December 27, 1957 the ground was broken for the foundation for the chapel on the corner of Second East and Fourth South. The 80 x 37 foot basement would serve as a social hall and in addition it would contain a kitchen 14 foot long. Father Clark estimated that the chapel would accommodate about 400 people. In order to move the chapel the roof was removed and then reassembled once it reached Brigham. It was moved to Brigham in 1958. It was completed and dedicated in the fall of 1958. The statues and furnishings of the rectory were donated by Father Clark's relatives and friends.</p>
          <p class="about-text">The school property which was 12 acres was purchased in 1959. There were plans made to build a school. However, with the decline of personnel at Thiokol, plans were changed. There were, at one time,52 CYO members. St. Henry's CYO was considered one of the best in the state. Two members attended the National CYO convention in New York. Father Clark's assistants were Father Francis Dunn, Father Thomas Savage, Father J. Vincent O'Sullivan, and Father Edward J. Petted. During this time religious classes were taught in Snowville. Father Clark left in the fall of 1964.</p>
          <p class="about-text">Father Arthur Schenk, S.J. Was the pastor from 1964-1966. His assistant was Father John Hesser and Father Robert R. Taheny. it was during this period that the teaching of catechism in Corinne was discontinued. Father Schenk left in 1966.</p>
          <p class="about-text">Father Robert R. Taheny was the pastor from 1966 to 1972. Father John C. Wright was the assistant. He reinstated religious classes in Corinne. During this period, a house was purchased near Box Elder High School. It became the Sacred Heart Seminary and was used as classrooms to teach religion during release time.</p>
          <p class="about-text">Father J. Vincent O'Sullivan became the pastor in 1972 and left in 1973. Father John C. Hesser, S.J.was assigned as the ninth pastor of St. Henry's in September 1973. Father Hesser left in January 1976.Father Taheny became assistant pastor from 1972 to 1976.</p>
          <p class="about-text">Father John G. Ferguson, S.J. Became the tenth pastor and the eighth Jesuit pastor of St. Henry's on January 6,1976. Father Ferguson had several assistants. They were Father Robert Taheny, Father James Devlin, Father John C. Wright, Father Bernard Sheerin, Father Francis Fox, Father Jose Manterola and Father Juan Vzura. During this period, two men from St. Henry's Parish were ordained Permanent Deacons on December 26,1977. They were Robert W. Bambrick and Richard E. Werling. Bob's first assignment as a Deacon was with the Diocesan Office of Youth Ministry for both liturgical and pastoral service. Dick's first assignment was at St. Henry's Parish for both liturgical and pastoral service. Lay people, both men and women have been assigned as ministers of the Sacraments. The beginning of the Spanish Mass took place during this period. Deacon Anthony J. Lopez from Ogden served in the Hispanic Ministry.</p>
          <p class="about-text">There has been some construction in the parish. In 1976, an addition was built to the rectory. In 1977,the new convent for the sisters was built on 689 South 400 East and the Indian Center was built in1978. The church hall was remodeled and there was a new roof put on the church.</p>
          <p class="about-text">Several changes have happened since Father Warren Schoeppe's assignment to the parish in 1986. In 1987,he had the curb and gutter on the south side of the church installed for easier parking. It was accomplished during the summer at the cost of $10,000. The Sacred Heart Seminary Building which was located on the corner of 500 West and 300 South was sold on May 28,1988. The sanctuary wall was changed from siding to stucco. There were some changes made to the church hall. The stage in the basement was removed and three classrooms were built. Property for a future church was purchased on May 25,1988. The cost was $167,200 which cost includes a house valued at $65,000. The rectory located north of the church was purchased for $66,833, on March 3,1994. The property, 11.07 acres which was purchased for a school and church by Father Joseph Clark, was sold to the Box Elder School District for $17,000 per acre. Other purchases were a new furnace in 1997 and an air conditioner in 1998.</p>
          <p class="about-text">Bishop William K. Weigand purchased property for the mission church in Tremonton. the sources of the funding for the purchase were the Catholic Church Extension Society, the sale of Diocesan property, the Tremonton Community savings ($15,000), and St. Henry's Church ($10,000). Ground breaking for Santa Ana mission church in Tremonton was in June 1989. The first Mass was celebrated in October 1989. In 1999, Bishop George Niederhauser purchased five additional acres of land adjacent to the original two acres for future development.</p>

          <h4>Succession of Pastors:</h4>
          <p class="about-text">Rev. Alfred W. Harding, MM 1950-1952<br>
Rev. Edward J. Whelan, SJ 1952-1955<br>
Rev. William J. Dunne, SJ 1955-1957<br>
Rev. Joseph M. Clark, SJ 1957-1964<br>
Rev. Arthur J. Schenk, SJ 1964-1967<br>
Rev. Robert R. Taheny, SJ 1966-1970<br>
Rev. Vincent J. O'Sullivan, SJ 1970-1972<br>
Rev. John C. Hesser, SJ 1972-1973<br>
Rev. John G. Ferguson, SJ 1976-1983<br>
Rev. Daniel J. Charlton, SJ 1983-1985<br>
Rev. Francis J. Babbish, SJ 1985-1986<br>
Rev. F. Warren Schoeppe, SJ 1986-2008<br>
Rev. Patrick Reuse, SJ 2008-2020<br>
Rev. Francisco Pires 2020-</p>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.number" class="feature-card">
            <div class="feature-image">
              <img :src="feature.image" :alt="feature.title" />
            </div>
            <span class="feature-number">{{ feature.number }}</span>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
            <a href="#services" class="btn btn-text">Read More</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Facilities Section -->
    <section class="facilities" id="offerings">
      <div class="container">
        <span class="section-label">Facilities and Amenities</span>
        <h2>Our Community Facilities</h2>
        <div class="facilities-grid">
          <div v-for="facility in facilities" :key="facility.title" class="facility-card">
            <h4>{{ facility.title }}</h4>
            <p>{{ facility.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mass Schedule Section -->
    <section class="schedule" id="schedule">
      <div class="container">
        <span class="section-label">Mass Schedule</span>
        <h2>Join Us for Worship</h2>
        
        <div class="schedule-content">
          <div class="schedule-block">
            <h3>St Henry Parish</h3>
            <p><strong>Sundays:</strong> 8:30 am in English<br>10:30 am in Spanish</p>
            <p><strong>Daily Masses:</strong><br>9:00 am – Mondays, Wednesday, Thursday and Fridays</p>
            <p><strong>Adoration of the Blessed Sacrament:</strong><br>Thursdays – 9:30 – 10:30 am</p>
            <p><strong>Confessions:</strong><br>Saturdays – 3:00 - 4:00 pm</p>
          </div>
          
          <div class="schedule-block">
            <h3>Santa Ana Mission</h3>
            <p><strong>Sundays:</strong> 12:30 pm – Bilingual Mass</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" id="contact">
      <div class="container">
        <h2>Join Our Faith Community</h2>
        <p>Become a part of our welcoming parish and explore how you can contribute to our shared mission of faith.</p>
        <a href="#contact" class="btn btn-primary">Get Involved</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h4>Our Story</h4>
          <p>St Henry Catholic Church is dedicated to serving Brigham City with love and faith.</p>
        </div>
        <div class="footer-col">
          <h4>Hours</h4>
          <p>Mon - Fri: 9 AM - 6 PM<br>Sat: 9 AM - 5 PM<br>Sun: 10 AM - 5 PM</p>
        </div>
        <div class="footer-col">
          <h4>Location</h4>
          <p>380 S 200 E<br>Brigham City, UT 84302</p>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>(435) 723-2941<br>Sthenrys@comcast.net</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 | St Henry Catholic Church</p>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #6EC1E4;
  --secondary: #54595F;
  --accent: #61CE70;
  --text: #333333;
  --light: #fafafa;
  --dark: #1a1a1a;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
  color: var(--text);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: 'EB Garamond', serif;
  font-weight: 600;
  text-transform: uppercase;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--primary);
  letter-spacing: 2px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

/* Header */
.header {
  background: #fff;
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo img {
  height: 60px;
}

.site-title {
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--secondary);
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--secondary);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--primary);
}

/* Hero */
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  background-image: url('http://44.202.215.36/wp-content/uploads/2026/02/image.jpg');
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.65);
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  padding: 100px 20px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #fff;
}

.hero-content p {
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 30px;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 15px 35px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  color: #fff;
}

.btn-primary:hover {
  background: #5ab0d4;
}

.btn-secondary {
  background: var(--secondary);
  color: #fff;
}

.btn-secondary:hover {
  background: #3d4145;
}

.btn-text {
  color: var(--primary);
  padding: 10px 0;
}

.btn-text:hover {
  color: var(--secondary);
}

/* About */
.about {
  padding: 100px 0;
  background: #fff;
  text-align: center;
}

.about h2 {
  font-size: 36px;
  margin-bottom: 30px;
  color: var(--secondary);
}

.about-text {
  max-width: 800px;
  margin: 0 auto 20px;
  color: #666;
  text-align: left;
}

.history-section {
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid #eee;
}

.history-section h3 {
  font-size: 28px;
  color: var(--secondary);
  margin-bottom: 30px;
}

.history-section h4 {
  font-size: 20px;
  color: var(--primary);
  margin: 30px 0 15px;
  text-transform: uppercase;
}

/* Features */
.features {
  padding: 100px 0;
  background: var(--light);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-card {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.feature-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 20px;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-number {
  display: block;
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 10px;
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--secondary);
}

.feature-card p {
  color: #666;
  margin-bottom: 20px;
}

/* Facilities */
.facilities {
  padding: 100px 0;
  background: #fff;
  text-align: center;
}

.facilities h2 {
  font-size: 36px;
  margin-bottom: 50px;
  color: var(--secondary);
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.facility-card {
  padding: 30px;
  border-left: 3px solid var(--primary);
}

.facility-card h4 {
  font-size: 20px;
  margin-bottom: 15px;
  color: var(--secondary);
}

.facility-card p {
  color: #666;
}

/* Schedule */
.schedule {
  padding: 100px 0;
  background: var(--light);
  text-align: center;
}

.schedule h2 {
  font-size: 36px;
  margin-bottom: 50px;
  color: var(--secondary);
}

.schedule-content {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.schedule-block {
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  text-align: left;
  min-width: 300px;
}

.schedule-block h3 {
  font-size: 24px;
  color: var(--primary);
  margin-bottom: 20px;
}

.schedule-block p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.8;
}

/* CTA */
.cta {
  padding: 100px 0;
  background: var(--secondary);
  text-align: center;
  color: #fff;
}

.cta h2 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #fff;
}

.cta p {
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
  opacity: 0.9;
}

/* Footer */
.footer {
  background: var(--dark);
  color: #fff;
  padding: 80px 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
}

.footer-col h4 {
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--primary);
}

.footer-col p {
  color: #aaa;
  line-height: 1.8;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #333;
}

.footer-bottom p {
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .schedule-content {
    flex-direction: column;
  }
}
</style>
