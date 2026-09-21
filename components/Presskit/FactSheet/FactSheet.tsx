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
        <li><a href="." >Instagram</a></li>
        <li><a href="." >Bluesky</a></li>
        <li><a href="." >Tiktok</a></li>
      </ul>
    </>
  );
}

export default FactSheet;
