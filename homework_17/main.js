const resultOfFetch = fetch('https://jsonplaceholder.typicode.com/todos');
resultOfFetch
.then((response)=>{console.log(response);
    return response.json();
})
.then
((bodyOfResponse)=> {
    renderFirst10(bodyOfResponse);
});
resultOfFetch.finally(()=>{console.log("Finally отработал запрос");});

console.log("программа работает дальше");

function renderFirst10(arrayOfPosts){
 const ulElement= document.createElement("ul");
 arrayOfPosts
 .slice(0, 15)
 .map((item)=>item.title)
 .forEach((title)=>{
    const newLiElement =document.createElement("li");
    newLiElement. textContent=title;
    ulElement.append(newLiElement);   
 });
 document.body.append(ulElement);
}  
