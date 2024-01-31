const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = 'grey'
        // }
        switch(e.target.id)
        {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'violet':
                body.style.backgroundColor = e.target.id
                break;
            case 'indigo':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'orange':
                body.style.backgroundColor = e.target.id
                break;
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
        }
    })
})