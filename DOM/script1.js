// let spanColor=document.getElementById('spanColor');
// spanColor.addEventListener('mouseover',function(event)
// {
//     spanColor.style.color='red';
// });
// spanColor.addEventListener('mouseout',function(event){
//     spanColor.style.color='black';
// });
let spanElement=document.getElementById('spanElement');
spanElement.addEventListener('click',function(event){
    let name=prompt('Your name?');
    console.log(name);
});