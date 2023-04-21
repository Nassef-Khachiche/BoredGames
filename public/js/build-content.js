const image = document.querySelectorAll('.box-image');
const sentence = document.querySelectorAll('.box');

let images = [];
let sentences = [];
let id = [];
let pair = [];

let g = 0;
let h = 0;
let i = 0;
let j = 0;

function GetContent() {

    /* fetch form the URI */
    async function GetContentInJson() { //Most compact way to return a fetch
      const response = await fetch('http://localhost:8080/puzzle/content', {}); 
      const json = await response.json();
      return json;
    }
  
    /* use the json to build the content */
    GetContentInJson().then( resp=> {
        var content = resp.data;

        
        content.forEach(function(item) 
        {
            images.push(item.image_path);
            sentences.push(item.sentence);
            id.push(item.id);
        });

        image.forEach(function(item) 
        {
            item.classList.add("pair-" + id[i]);
            item.style.backgroundImage = `url('${images[i]}')`;
            i++;
        });

        sentence.forEach(function(item)
        {
            item.classList.add("pair-" + id[j]);
            item.innerHTML = sentences[j];
            j++;
        });


    });
}