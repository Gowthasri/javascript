// for(var i=1;i<=5;i++){
//     for(var j=1;j<=5;j++){
//         console.log(i,'when'+j)
//     }
// }

// var array=['sri','ram','sanjay','jai','sai']
// for(var i=0;i<array.length;i++)
// {
//     console.log(array[i])
// }

// var array=['sri','ram','sanjay','jai','sai']
// var i=0;
// while(i=3){
//         console.log(array[i])
//     i++
// }
// var username= 'james';
// var age=10;
// logged= true;
// if(logged===true){
//     alert('My Names is '+username +'and i am ' +age +' years old' );
// }else{
//     alert('Please login to see the message' );
// }
// var array=['sri','joe','pat','dan','ram'];
// for(var i=0;i<array.length;i++){
//  //console.log(array[i])
//     if(array[i]===array[2]){
//         console.log('The name '+ array[i] +' is found')
//         break;
//     }
//     console.log(array[i])
// }
// var num=0;
// var count=0;
// for(var i=0;i<=100;i++){
//     num=num+5;
//     i=num;
//     count++;
//     console.log('At iteration '+count+' the value is '+i)
//     if(i===50){
//         console.log('the number reached the range'+i)
//         break;
//     }
// }
 
// function a(user){
// console.log('Hello '+user.name +' '+user.lastname +' Welcome Back!!!')
// }
// a({name:'sri',lastname:'Nallamilli'});
// console.log(window.document)
//console.log(document.getElementsByTagName('div'))
//console.log(document.querySelectorAll('div'))
    //Creating an element:
// var parent=document.querySelector('.parent');
// var div=document.createElement('div');
// div.textContent='this is new content';
// div.style.color='red';
// div.style.fontSize='20px';
//console.log(div)
//parent.appendChild(div);
//parent.insertAdjacentElement("beforeBegin",div);
//parent.insertAdjacentElement("AfterBegin",div);
//parent.insertAdjacentElement("beforeEnd",div);
//parent.insertAdjacentElement("AfterEnd",div);
// Deleting an element
// var parent=document.querySelector('.parent');
// var ul=parent.querySelector('ul');
// parent.removeChild(ul);
//ul.remove();    other way of removing the elements
//var button=document.querySelector('.myButton')
// button.onclick =function(){
//     console.log('Someone clicked me')
// }
// button.onmouseover=function(){
//     console.log('Someone is over me')
// }
// button.ondblclick=function(){
//     console.log('Someone double clicked me')
// }
// function click1(){
//     console.log("This is click one")
// }
// function click2(){
//     console.log("This is click two");
//     button.removeEventListener("click",click1);
// }
// button.addEventListener("click",click1);
// button.addEventListener("click",click2);
// document.addEventListener('click',showPopUp);
// function showPopUp(){
//     alert('Buy Me');
// }
// var parent=document.querySelector('.parent');
// var child=document.querySelector('.child');
// parent.addEventListener('click',showParent);
// child.addEventListener('click',showChild);
// function showParent(){
//     console.log('I am Red');
// }
// function showChild(event){
//     event.stopPropagation();
//     event.target.style.background='green';
//     console.log('I am Blue');
// }
// var div=document.createElement('div');
// div.style.background='red';
// div.style.padding='20px';
// div.style.width='200px';
// div.style.height='200px';
// document.body.appendChild(div);

// var div2=document.createElement('div2');
// div2.innerText="Don't touch the red button";
// div2.style.color="#fff";
// div.appendChild(div2);

// div.addEventListener('click',function(){
// alert("Your computer is being hacked");
// });
// var parent=document.querySelector('.parent');
// parent.addEventListener('click',function(){
// if(parent.style.width==='200px'){
//     parent.style.width='100px';
//     parent.style.height='100px';
// }else{
//     parent.style.width='200px';
//     parent.style.height='200px';
// }
// });
// var array=['Francis','John','Pisa']
//          //array.pop();
// array.splice(2,array.length);
// console.log(array);
// array.push('Lisa');
// console.log(array);
// console.log(array.join(" / "));

// var array=['harry','sally','jully'];
// var array2=['pat','dan','dean'];
// var newarray=array.concat(array2);
// console.log(newarray);
// newarray.forEach(function(item){
//     console.log("My Name is "+item);
// })

var num=6;
(function name(value){
    var num=value+5;
    console.log(num);
})(num);
console.log(num);