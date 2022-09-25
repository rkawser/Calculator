let string =''
let button = document.querySelectorAll('.button')
let input = document.getElementById('output')



Array.from(button).forEach(function(value){
   value.addEventListener('click',(e)=>{
    if(e.target.innerHTML === '='){
        string =eval(string)
        input.value=string
    }

   else if(e.target.innerHTML === 'C'){
        string =''
        input.value=string
    }
    else if(e.target.innerHTML === '☾'){
        string =''
        input.value=string
    }
    else{
        string+= e.target.innerHTML;
        input.value=string
    }
      
   })
})


// apply dark mood


let dark = document.getElementById('dark')

dark.onclick=function(){
    document.body.classList.toggle('dark-them')
}