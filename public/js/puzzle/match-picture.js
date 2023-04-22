const close = document.querySelectorAll('.btn-close');
const img = document.querySelectorAll('.box-image');
const text = document.querySelectorAll('.box');

let count = 0;
let matches = [];
let items = [];



/* sentence click */
text.forEach(function(item) {
  item.addEventListener('click', function() {
    $('.toast').hide();

    const classList = item.classList;
    let lastClass = classList.item(classList.length - 1);

    matches.push(lastClass);
    items.push(item);
    count++;
    console.log(count, matches)


    text.forEach(function(item) {
        item.classList.add('wait-turn');
    });

    if (count == 2) 
    {

        img.forEach(function(item) {
            item.classList.remove('wait-turn');
        });

        text.forEach(function(item) {
            item.classList.remove('wait-turn');
        });

        if (matches[0] == matches[1]) 
        {
            $('.toast-success').show();
        }
        else 
        {
            $('.toast-fail').show();
        }

        matches = [];
        items = [];
    }

    if (count == 3) 
    {
        count = 1;

        img.forEach(function(item) {
            item.classList.remove('shake');
        });

        text.forEach(function(item) {
            item.classList.remove('shake');
        });

    }
    this.classList.add('shake');
  });
});


/* image click */
img.forEach(function(item) {
    item.addEventListener('click', function() {
        $('.toast').hide();
        
        const classList = item.classList;
        let lastClass = item.classList.item(classList.length - 1);
        
        matches.push(lastClass);
        
        count++;
        console.log(count, matches)

        img.forEach(function(item) {
            item.classList.add('wait-turn');
        });

        if (count == 2) 
        {

            img.forEach(function(item) {
                item.classList.remove('wait-turn');
            });
    
            text.forEach(function(item) {
                item.classList.remove('wait-turn');
            });

            if (matches[0] == matches[1]) 
            {
                $('.toast-success').show();

            }
            else 
            {
                $('.toast-fail').show();
            }
    
            matches = [];
            items = [];
        }

        if (count == 3) 
        {
            count = 1;
            img.forEach(function(item) {
                item.classList.remove('shake');
            });
    
            text.forEach(function(item) {
                item.classList.remove('shake');
            });

        }

        this.classList.add('shake');
        
        
    });
});

/* close all toasts */
close.forEach(function(item) {
    item.addEventListener("click", function() {
        $('.toast').hide();
    });

});