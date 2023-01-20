let input = ""
const btns = document.getElementsByTagName('button')

for(const item of btns) {
  
  item.addEventListener('click', (e)=>{
     console.log(e.target.innerHTML)
    if(e.target.innerHTML == 'C'){
      input = ""
    }else if(e.target.innerHTML == "DL"){
      input = input.slice(0,input.length-1)
    }else if(e.target.innerHTML == '+'){
      if(input == ''){
        input =""
      }else if(input.charAt(input.length-1)=='+' || input.charAt(input.length-1)=='-' || input.charAt(input.length-1)=='*' || input.charAt(input.length-1)=='/'){
        input=input.slice(0,input.length-countoperator(input))
        input+='+'
      }else{
        input += e.target.innerHTML
      }
    }else if(e.target.innerHTML == '-'){
      if(input == ''){
        input ="-"
      }else if(input.charAt(input.length-1)=='+' || input.charAt(input.length-1)=='-'){
        input=input.slice(0,input.length-countoperator(input))
        input+='-'
      }else{
        input += e.target.innerHTML
      }
    }else if(e.target.innerHTML == '*'){
      if(input == ''){
        input =""
      }else if(input.charAt(input.length-1)=='+' || input.charAt(input.length-1)=='-' || input.charAt(input.length-1)=='*' || input.charAt(input.length-1)=='/'){
        input=input.slice(0,input.length-countoperator(input))
        input+='*'
      }else{
        input += e.target.innerHTML
      }
    }else if(e.target.innerHTML == '/'){
      if(input == ''){
        input =""
      }else if(input.charAt(input.length-1)=='+' || input.charAt(input.length-1)=='-' || input.charAt(input.length-1)=='*' || input.charAt(input.length-1)=='/'){
        input=input.slice(0,input.length-countoperator(input))
        input+='/'
      }else{
        input += e.target.innerHTML
      }
    }
      else if(e.target.innerHTML == '='){
      if(input == ''){
        input =""
      }else{
        input=eval(input)
        input=input.toString()
      }
    }
    else{
      input += e.target.innerHTML
    }
    
    document.getElementById('input-text').value = input
  })
}

const inp = document.getElementById('input-text')
inp.addEventListener('change', (e)=>{
  input=document.getElementById('input-text').value
})

const inp2 = document.getElementById('input-text')
inp2.addEventListener('keypress', (event)=>{
  console.log(event)
  if (event.key === "Enter") {
    input=document.getElementById('input-text').value
    input=eval(input)
    input=input.toString()
    document.getElementById('input-text').value = input
  }

  if (!isNaN(event.key)) {
    uu=document.getElementById('input-text').value
    try{
      uu=eval(uu+event.key)
      document.getElementById('output-text').value = uu
    }catch(err){
      console.log(err)
    }
  }
  
})

function countoperator(str){
  let cnt=0;
  let i=str.length-1
  while(isNaN(str.charAt(i))){
    i--;
    cnt++;
  }
  return cnt;
}
  
  // input += document.getElementById()

