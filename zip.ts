import fs from "fs";
import path from "path";
import archiver from "archiver";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const zipFile = __dirname + "/extension.zip";

fs.unlink(zipFile, () => {
  const output = fs.createWriteStream(zipFile);
  const archive = archiver("zip", {
    zlib: { level: 9 }, // Sets the compression level.
  });
  archive.pipe(output);
  archive.directory("dist/", false);
  archive.finalize();
  console.log("Bundle `extension.zip` created and ready to upload!");
});
