import Spacing from '@/Components/Spacing'

function FactSheet() {
  return (
    <>
      <h2 id="factsheet">FactSheet</h2>

      <h3>Developer:</h3>
      <p>Team Yūrei</p>

      <Spacing />

      <h3>Release date:</h3>
      <p>TBA</p>

      <Spacing />

      <h3>Duration:</h3>
      <p>2-3 hours</p>

      <Spacing />

      <h3>Platforms</h3>
      <ul>
        <li><a href="." >Steam</a></li>
      </ul>

      <Spacing />

      <h3>Press / Business contact:</h3>
      <p>teamyurei.contact@gmail.com</p>

      <Spacing />

      <h3>Socials:</h3>
      <ul>
        <li className="my-4"><a href="https://www.instagram.com/teamyureigame/" >Instagram</a></li>
        <li className="my-4"><a href="https://x.com/TeamYureigame" >X</a></li>
        <li className="my-4"><a href="https://bsky.app/profile/teamyureigame.bsky.social" >Bluesky</a></li>
        <li className="my-4"><a href="https://www.youtube.com/@YureiGameYoutube">YouTube</a></li>
      </ul>
    </>
  );
}

export default FactSheet;
