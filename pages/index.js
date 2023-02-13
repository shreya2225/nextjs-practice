import styles from "../styles/pages/Home.module.scss";

//import components
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import img from "../public/img/Group 1831.png"
import image1 from "../public/img/minimising-waste.png"
import image2 from "../public/img/Group 803.png"
import Image from "next/image";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />
         <main className={`${styles.index_page} `}>
            <div className={`${styles.ourjourney_flex} container`}>
               <div className={`${styles.img_content} `}> <Image src={img} /></div>
               <div className={`${styles.text_content} `} >
                  <h2><span className={`${styles.text_content} `} >Our</span> <span className={`${styles.text_content} `} >journey</span></h2>
                  <p className={`${styles.p1} `}>5 decades and 3 generations later, Lakhani Caterers have continued to be the pioneers in the catering & hospitality industry in India. With its base in Mumbai, we have had the privilege to serve thousands of families across the globe.
                     Founded in 1972 by the visionary Kanjibhai Lakhani , Lakhani Caterers is presently spearheaded by his children and grandchildren as Samir Lakhani Hospitality.
                     Built on 3 key values - gratitude, diligence and integrity and with a team full of highly skilled and enthusiastic professionals we have evolved into a modern catering powerhouse with a legacy to behold.</p>
                  <p className={`${styles.p2} `}>It gives us immense joy to be able to bring about creativity to each event, season after season. Even after 50 years, we work with the same enthusiasm and zeal to revolutionise the hospitality and catering industry.</p>
               </div>
            </div>
            <div className={`${styles.committed_section} container`}>
               <h2 className={`${styles.heading_committed} `}>Committed to unforgettableexperiences and sustainable practices </h2>
               <div className={`${styles.recycling_sec} `}>
                  <div className={`${styles.img_content} `}> <Image src={image2} /></div>
                  <div className={`${styles.recycling_text} `}>
                     <h3>Recycling every ounce of food into energy</h3>
                     <p>While food waste is unavoidable, what we do commit to is never letting the food waste go unused. Our team of experts constantly works towards channelling food waste to biomass plants across the host city.</p>
                     <p></p>
                  </div>
               </div>
               <div className={`${styles.Minimising_sec} `}>
                  <div className={`${styles.Minimising_content} `}> <Image src={image1} /></div>
                  <div className={`${styles.Minimising_text} `}>
                     <h3>Recycling every ounce of food into energy</h3>
                     <p>While food waste is unavoidable, what we do commit to is never letting the food waste go unused. Our team of experts constantly works towards channelling food waste to biomass plants across the host city. </p>
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   );
}
