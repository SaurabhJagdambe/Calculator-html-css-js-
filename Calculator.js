(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('.btn-eql');
    let clr = document.querySelector('.btn-clr');


    buttons.forEach(function(button){

        button.addEventListener('click',function(e){

            let value = e.target.dataset.num;
            screen.value += value;


        });
        
    });

    equal.addEventListener('click',function(f){

        if(screen.value ===''){
            screen.value = "Please enter value";
        }else{
            let Ans = eval(screen.value)
            screen.value = Ans ;
        }

    })

    clr.addEventListener('click',function(e){
        screen.value ='';
    })


})();