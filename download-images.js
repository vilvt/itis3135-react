// download-images.js
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

async function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  const STUDENTS_JSON_URL =
    "https://dvonb.xyz/api/2025-fall/itis-3135/students?full=1";
  console.log("Fetching JSON...");

  const raw = await new Promise((res, rej) => {
    https.get(STUDENTS_JSON_URL, (r) => {
      let data = "";
      r.on("data", (chunk) => (data += chunk));
      r.on("end", () => res(data));
    }).on("error", rej);
  });

  const students = JSON.parse(raw);
  console.log("Found", students.length, "students.");

  const baseFolder = path.join(
    fileURLToPath(new URL(".", import.meta.url)),
    "public",
    "media",
    "2025-fall",
    "itis-3135"
  );
  fs.mkdirSync(baseFolder, { recursive: true });

  for (const s of students) {
    const src = s.media?.src;
    if (src) {
      const url = new URL(src, STUDENTS_JSON_URL).href;
      const filename = path.basename(src);
      const dest = path.join(baseFolder, filename);
      try {
        console.log("Downloading", url);
        await downloadImage(url, dest);
        console.log("Saved to", dest);
      } catch (err) {
        console.warn("Failed to download", url, err);
      }
    }
  }

  console.log("Done.");
}

main();
