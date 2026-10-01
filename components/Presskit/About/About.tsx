import ImageItem from '@/Components/ImageItem'
import Spacing from '@/Components/Spacing'

import Bibliomania from '@/Images/bibliomania.jpg'
import Blame from '@/Images/blame.png'
import HouseOfLeaves from '@/Images/house-of-leaves.jpg'
import Opus from '@/Images/opus.png'
import Uzumaki from '@/Images/uzumaki.jpg'

function About() {
  return (
    <>
      <h2 id="about">About the game</h2>

      <p>
        Yūrei is developed by a <b>team of passionate graduates from Cnam-Enjmin </b>(Angoulême), one of France's leading public schools for video game development.
        We've all had <b>experience in the video game industry</b> at studios ranging from <b>small indie teams to AAA</b>.
      </p>

      <p>
        With Yūrei, we want to <b>play with a medium we love</b>. We aim to craft a<b> highly curated</b>, <b>short narrative experience</b> with
        a <b>strong creative vision</b> and <b>slow-paced</b>, <b>accessible gameplay</b>.
      </p>

      <p>
        Yūrei offers a unique <b>immersion in the manga medium</b>, playing with its conventions and letting you play into a <b>beautiful yet haunted work of art</b>.
        Our main inspirations include <b>mangas with a dark atmosphere</b>, <b>playing with the medium</b>, including works by Junji Ito and titles like Bibliomania, Opus, Blame!, and House of Leaves.
      </p>

      <p>
        These intentions began to take shape as a <b>vertical slice</b> during our end-of-year project, which received <b>overwhelmingly positive feedback</b>
        at the different festivals we attended. 
        This encouraged us to keep developing the game for people who love <b>experimental and narrative-driven games</b> as well as <b>mangas and horror</b>.
      </p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
            <div>
              <ImageItem src={Uzumaki} alt="Uzumaki" className="h-auto max-w-full rounded-lg object-cover object-center"/>
            </div>
            <div>
              <ImageItem src={Bibliomania} alt="Bibliomania" className="h-auto max-w-full rounded-lg object-cover object-center"/>
            </div>
        </div>
        <div className="grid gap-4">
            <div>
              <ImageItem src={Blame} alt="Blame" className="h-auto max-w-full rounded-lg object-cover object-center"/>
            </div>
            <div>
              <ImageItem src={HouseOfLeaves} alt="House of Leaves" className="h-auto max-w-full rounded-lg object-cover object-center"/>
            </div>
        </div>
        <div className="grid gap-4 col-span-2">
            <div>
              <ImageItem src={Opus} alt="Opus" className="h-auto max-w-full rounded-lg object-cover object-center"/>
            </div>
        </div>
      </div>

      <Spacing />

      <p>As for video games, we are hugely inspired by works such as <b>Silent Hill 2, Resident Evil 1</b> or <b>Liberated</b>.</p>

      <p>
        Manga is <b>incredibly popular</b>, while horror remains a <b>strong genre within the indie game scene</b>. We think Yūrei brings these two worlds together 
        <b> in a unique way</b>.
      </p>
    </>
  );
}

export default About;
