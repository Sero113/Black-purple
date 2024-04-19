
var client = contentful.createClient({
  space: 'slfcz5zsqjr9',
  accessToken: 'xCvRJ3dojlhhgc9rRruo_vO-D9odqn9rFHwLs7hMHtA',
});



var textInURL = window.location.search;
console.log(textInURL);
var parametersInUrl = new URLSearchParams(textInURL);

console.log(parametersInUrl);

var id = parametersInUrl.get('id');


var details = document.getElementById('details');

client.getEntry(id).then(function (entry) {
console.log(entry)
var li = document.createElement('li');
li.classList.add('product-wrapper');


var imageUrl = 'https:' + entry.fields.product.fields.file.url;



console.log('imageURL',imageUrl)
console.log('imageURL',imageUrl)




var img = document.createElement('img');
 img.classList.add('photo');
 img.src = imageUrl; // Placeholder, replace with actual image URL if available
 li.appendChild(img);

   // Create the content div
var contentDiv = document.createElement('div');
contentDiv.classList.add('content');



 // Create and append the heading
 

 var h2 = document.createElement('h2');
 h2.innerHTML = entry.fields.name; // Assuming 'title' is the field for the title
 contentDiv.appendChild(h2);

 var p = document.createElement('p');
 p.innerHTML = entry.fields.price; // Assuming 'title' is the field for the title
 contentDiv.appendChild(p);

 var a = document.createElement("a");
 a.innerHTML = 'CHECKOUT';
 a.href = entry.fields.portfolio;
 contentDiv.appendChild(a);
 var p = document.createElement('p');
 p.innerHTML = entry.fields.description; // Assuming 'title' is the field for the title
 contentDiv.appendChild(p);






 

 // Append content div to li
 li.appendChild(contentDiv);

 details.appendChild(li);





});