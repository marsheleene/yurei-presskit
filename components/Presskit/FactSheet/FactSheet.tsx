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

      <h3>Platforms:</h3>
      <ul>
        <li className="my-4"><a className="factsheet-link" href="https://store.steampowered.com/app/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" className="social-icon" aria-hidden="true" />・Steam</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://cybertoasty.itch.io/yurei" target="_blank" rel="noopener noreferrer"><img src="https://static.itch.io/images/itchio-textless-white.svg" className="social-icon" aria-hidden="true" />・itch.io</a></li>
      </ul>

      <Spacing />

      <h3>Press / Business contact:</h3>
      <p>teamyurei.contact@gmail.com</p>

      <Spacing />

      <h3>Socials:</h3>
      <ul>
        <li className="my-4"><a className="factsheet-link" href="https://www.instagram.com/yureigame/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="social-icon" aria-hidden="true" />・Instagram</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://bsky.app/profile/yureigame.bsky.social" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg" className="social-icon" aria-hidden="true" />・Bluesky</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://www.youtube.com/@YureiGameYoutube" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_(2017).svg" className="social-icon" aria-hidden="true" />・YouTube</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://www.tiktok.com/@yureigametiktok" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" className="social-icon" aria-hidden="true"/>・TikTok</a></li>
      </ul>
    </>
  );
}

export default FactSheet;
