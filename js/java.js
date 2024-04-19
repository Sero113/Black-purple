const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener("click", () => {
primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
});

var client = contentful.createClient({
    space: 'slfcz5zsqjr9',
    accessToken: 'xCvRJ3dojlhhgc9rRruo_vO-D9odqn9rFHwLs7hMHtA',
  });

  


console.log(client)




client.getEntry('DROWhFz99yauokHJOKMWW').then(function (entry) {
  // logs the entry metadata
  console.log("entry.sys->",entry.sys);
  console.log("entry->",entry);

  // logs the field with ID title
  console.log("entry.fields.title->",entry.fields.title);
});



var ringDiv = document.getElementById('rings');






client.getEntries({content_type:'rings'}).then(function (entries) {
entries.items.forEach(function (entry) {
  var li = document.createElement('li');
  li.classList.add('wrapper');

   // Create and append the image
   console.log(entry)
   var imageUrl = 'https:' + entry.fields.product.fields.file.url;
  
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
   a.innerHTML = 'VIEW';
   a.href = "details.html?id=" + entry.sys.id;

   contentDiv.appendChild(a);


  
 
   

   // Append content div to li
   li.appendChild(contentDiv);

   ringDiv.appendChild(li);

   


});
});
