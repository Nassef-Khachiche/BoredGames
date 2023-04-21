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

    if (count == 2) 
    {
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

        img.forEach(function(item) {
            item.classList.remove('wait-turn', 'shake');
        });

        text.forEach(function(item) {
            item.classList.remove('wait-turn', 'shake');
        });

        count = 0;

    }
    else 
    {
        this.classList.add('shake');

        text.forEach(function(item) {
            item.classList.add('wait-turn');
        });  
    }
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

        if (count == 2) 
        {
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

            img.forEach(function(item) {
                item.classList.remove('wait-turn', 'shake');
            });

            text.forEach(function(item) {
                item.classList.remove('wait-turn', 'shake');
            });

            count = 0;

        }    
        else 
        {
            this.classList.add('shake');

            img.forEach(function(item) {
                item.classList.add('wait-turn');
            });
        }

    });
});

/* close all toasts */
close.forEach(function(item) {
    item.addEventListener("click", function() {
        $('.toast').hide();
    });

});