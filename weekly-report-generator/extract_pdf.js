
import fs from 'fs';
import pdf from 'pdf-parse';

const pdfPath = "C:/Users/10064957/Documents/OneDrive/AI Projects/Weekly Report Generator Cloned from Github/Weekly Engineering Report.pdf";

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    // number of pages
    console.log('numpages:', data.numpages);
    // number of rendered pages
    console.log('numrender:', data.numrender);
    // PDF info
    console.log('info:', data.info);
    // PDF metadata
    console.log('metadata:', data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log('version:', data.version);
    // PDF text
    console.log('text:', data.text);

}).catch(function (error) {
    console.log("Error: " + error);
})
