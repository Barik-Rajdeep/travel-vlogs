const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', () => {
  const fileUrl = 'https://tourism.gov.in/sites/default/files/2024-04/MOT%20India%20Map_Digital.pdf'; // Replace with your file URL
  const fileName = 'file.pdf'; // Replace with your file name

  const a = document.createElement('a');
  a.href = fileUrl;
  a.download = fileName;
  a.click();
});