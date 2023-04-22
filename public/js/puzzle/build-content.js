const image = document.querySelectorAll('.box-image');
const sentence = document.querySelectorAll('.box');

let images = [];
let sentences = [];
let id = [];

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

        content.sort(() => Math.random() - 0.5);

        content.forEach(function(item) 
        {
            images.push(item.image_path);
            sentences.push(item.sentence);
            id.push(item.id);
        });

        images.sort(() => Math.random() - 0.5);
        sentences.sort(() => Math.random() - 0.5);

        image.forEach(function(item) 
        {
            item.style.backgroundImage = `url('${images[i]}')`;
            content.forEach(function(c_item){
                if (images[i] == c_item.image_path) {
                    item.classList.add('pair-' + c_item.id);
                }
            })
            i++;
        });

        sentence.forEach(function(item)
        {
            item.innerHTML = sentences[j];
            content.forEach(function(c_item){
                if (sentences[j] == c_item.sentence) {
                    item.classList.add('pair-' + c_item.id);
                }
            })
            j++;
        });


    });
}