
function myFunction() {
  let m = document.querySelector(".main").value; 
  x=m;
  y = 1;
}


var u_l;

function extracter(){
  if ( y===1){
var new_url =" https://dog.ceo/api/breed/" + x + "/images/random"; 
var u_l = new_url;
const DOG_URL = u_l;
const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    const h = document.createElement("h");
    let m = x.replace("/"," ");
    h.innerHTML = m;
    doggos.append(img);
    doggos.append(h);
}
  );









}
}


