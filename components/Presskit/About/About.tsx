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
        Yūrei is developed by a team of passionate graduates from Cnam-Enjmin (Angoulême), one of France’s leading video game development public schools. 
        We've all had experience within the video game industry, from a variety of studios ranging from small indie project to AAA.
      </p>

      <p>
        With Yūrei, we want to play with a medium we love. We want to craft a highly curated short narrative experience with 
        a strong and distinctive creative vision, while having slower-paced and accessible gameplay.
      </p>

      <p>
        Yūrei offers a unique immersion in the manga medium, playing with its conventions, letting you play in a beautiful yet haunted work of art.
        Our main inspirations come from horror mangas or works that already play with the medium. To cite a few: Junji Ito, Bibliomania, Opus, Blame! or House of Leaves.
      </p>

      <p>
        These intentions began to take shape as a vertical slice during our end-of-year project, which received overwhelmingly positive feedback
        at the different festivals we attended. 
        This encouraged us to continue developing the game further, for people with a deep love for experimental and narrative-driven games, 
        as well as mangas and horror.
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
        in an unique way.
      </p>
    </>
  );
}

export default About;
