const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'frames_webp');
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

const videoPath = path.join(__dirname, 'public', 'hero-animation.mp4');
const outPattern = path.join(targetDir, 'frame_%03d.webp');

console.log('Extracting 200 WebP frames from video...');
execSync(`ffmpeg -y -i "${videoPath}" -vf "fps=200/9.216,scale=1280:-1" -vframes 200 -c:v libwebp -quality 82 "${outPattern}"`, { stdio: 'inherit' });

const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.webp'));
console.log(`Extracted ${files.length} WebP frames!`);

let totalBytes = 0;
for (const f of files) {
  totalBytes += fs.statSync(path.join(targetDir, f)).size;
}
console.log(`Total WebP size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB (Average: ${(totalBytes / files.length / 1024).toFixed(1)} KB per frame)`);
