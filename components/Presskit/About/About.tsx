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
        Yūrei is developed by a team of passionate graduates from Cnam-Enjmin (Angoulême), one of France's leading public schools for video game development.
        We've all had experience in the video game industry at studios ranging from small indie teams to AAA.
      </p>

      <p>
        With Yūrei, we want to play with a medium we love. We aim to craft a highly curated, short narrative experience with
        a strong, distinctive creative vision and slow-paced, accessible gameplay.
      </p>

      <p>
        Yūrei offers a unique immersion in the manga medium, playing with its conventions and letting you play into a beautiful yet haunted work of art.
        Our main inspirations include horror manga and other works that play with the medium, including works by Junji Ito, Bibliomania, Opus, Blame!, and House of Leaves.
      </p>

      <p>
        These intentions began to take shape as a vertical slice during our end-of-year project, which received overwhelmingly positive feedback
        at the different festivals we attended. 
        This encouraged us to keep developing the game for people who love experimental and narrative-driven games as well as mangas and horror.
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

      <p>As for video games, we are hugely inspired by works such as Silent Hill 2, Resident Evil 1 or Liberated.</p>

      <p>
        Manga is incredibly popular, while horror remains a strong genre within the indie game scene. We think Yūrei brings these two worlds together 
        in a unique way.
      </p>
    </>
  );
}

export default About;
