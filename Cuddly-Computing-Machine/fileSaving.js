function generateDownload(data){
var file;
if(typeof data != typeof []) data = [data];
var properties = { type: 'application/json' }; // Specify the file's mime-type.
try {
    // Specify the filename using the File constructor, but ...
    file = new File(data, "data.json", properties);
} catch (e) {
    // ... fall back to the Blob constructor if that isn't supported.
    file = new Blob(data, properties);
}
var url = URL.createObjectURL(file);
var link = document.createElement('a');
link.href=url
link.rel="noopener"
link.target='_blank'
link.download='data.json'
link.click();
link.remove()
console.log('hi')
}
function generateData(){
    return 'hi'
}
document.getElementById('link').onclick=function(ev){
    generateDownload(generateData())
    console.log('hi1')
}