import { fromPath } from 'pdf2pic';
import fs from 'fs';
import path from 'path';

// Usage:
//   node convert-pdf-to-images.js "<input.pdf>" "<output/dir>" "<base-name>"
// Defaults target the BEV Week8 dashboard if no args are provided
const [, , inputArg, outDirArg, baseNameArg] = process.argv;

const pdfPath = inputArg || './weekly-report-generator/public/images/Week8/BEV Weekly Dashboard - Week8.pdf';
const savePath = outDirArg || './screenshots/review/converted';
const defaultBase = path.basename(pdfPath, path.extname(pdfPath)).replace(/\s+/g, '-').toLowerCase();
const saveFilename = baseNameArg || defaultBase;

const options = {
  density: 300,
  saveFilename,
  savePath,
  format: 'png',
  width: 1920,
  height: 1080,
};

// Ensure output directory exists
fs.mkdirSync(options.savePath, { recursive: true });

const convert = fromPath(pdfPath, options);

(async () => {
  try {
    const results = await convert.bulk(-1, true);
    console.log(`Converted '${pdfPath}' -> ${results.length} image(s) at '${options.savePath}' with prefix '${saveFilename}'.`);
  } catch (error) {
    console.error('Error converting PDF to images:', error);
    process.exitCode = 1;
  }
})();
