import { fromPath } from 'pdf2pic';
import path from 'path';

const options = {
  density: 300,
  saveFilename: 'slide',
  savePath: './screenshots/review',
  format: 'png',
  width: 1920,
  height: 1080
};

const pdfPath = './screenshots/review/report-review.pdf';
const convert = fromPath(pdfPath, options);

(async () => {
  try {
    const resolve = await convert.bulk(-1, true);
    console.log('PDF pages have been converted to images successfully:', resolve);
  } catch (error) {
    console.error('Error converting PDF to images:', error);
  }
})();
