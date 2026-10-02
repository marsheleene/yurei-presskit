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
        <li className="my-4"><a className="factsheet-link" href="https://store.steampowered.com/app/" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">⚙️</span>・Steam</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://cybertoasty.itch.io/yurei" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">🎮</span>・itch.io</a></li>
      </ul>

      <Spacing />

      <h3>Press / Business contact:</h3>
      <p>teamyurei.contact@gmail.com</p>

      <Spacing />

      <h3>Socials:</h3>
      <ul>
        <li className="my-4"><a className="factsheet-link" href="https://www.instagram.com/teamyureigame/" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">📸</span>・Instagram</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://x.com/TeamYureigame" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">🐦</span>・X</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://bsky.app/profile/teamyureigame.bsky.social" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">🦋</span>・Bluesky</a></li>
        <li className="my-4"><a className="factsheet-link" href="https://www.youtube.com/@YureiGameYoutube" target="_blank" rel="noopener noreferrer"><span className="social-icon" aria-hidden="true">▶️</span>・YouTube</a></li>
      </ul>
    </>
  );
}

export default FactSheet;
