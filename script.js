const name = 'Naveen';
document.querySelector('#name').innerText = name;


// Data from API
var data = [{
    name: "office 1",
    imageUrl: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
}, {
    name: "office 2",
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
}, {
    name: "office 3",
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
}];

// Add number 1 to 10
// for (var i = 0; i < data.length; i++) {
//     document.querySelector('.numbers').innerHTML += `<div><img src="${data[i].imageUrl}"> </div>`;
// }
for (var i = 0; i < data.length; i++) {
    document.querySelector('.numbers').innerHTML += `<div><img src="${data[i].imageUrl}" alt="${data[i].name}"></div>`;
}