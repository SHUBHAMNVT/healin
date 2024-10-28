const { jsPDF } = require("jspdf");
const fs = require("fs");

fs.readFile("/public/templatePDF/template.pdf", (err, data) => {
  console.log(err);
  console.log(data);
});