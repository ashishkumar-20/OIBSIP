let resultField=document.querySelector('#Result')
let degree=document.querySelector('#degree');
let convert=document.querySelector("#converter");
let option=document.querySelector('#type')
window.addEventListener("load",()=>{
    degree.value ="";
    resultField.innerHTML=" ";
})
convert.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius();
})

let convertToCelsius =()=>{
    let inputValue=degree.value;
    if(option.value ==="Fahrenheit")
    {
        const fahrenheit = (inputValue-32)*(5/9);
        resultField.innerHTML=`${fahrenheit.toFixed(3)} &deg C`
    }
    else if(option.value==="Kelvin")
    {
        const KelvinToCelsius = inputValue -273.15;
        resultField.innerHTML=`${KelvinToCelsius.toFixed(3)} &deg C`;
    }
}