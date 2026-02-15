let e="https://698dd99db79d1c928ed6bf62.mockapi.io/api",t=document.querySelector("#students-table tbody"),n=document.querySelector("#add-student-form");function o(){fetch(`${e}/students`).then(e=>e.json()).then(e=>{var n;return n=e,void(t.innerHTML="",n.forEach(e=>{let n=document.createElement("tr");n.innerHTML=`
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.course}</td>
                <td>${e.skills}</td>
                <td>${e.email}</td>
                <td>${e.isEnrolled?"Так":"Ні"}</td>
                <td>
                    <button onclick="updateStudent('${e.id}')" style="background-color: orange;">\u{41E}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{438}</button>
                    <button onclick="deleteStudent('${e.id}')">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </td>
            `,t.appendChild(n)}))}).catch(e=>console.error(e))}n.addEventListener("submit",function(t){t.preventDefault(),console.log("Я працюю кнопку натиснуто"),fetch(`${e}/students`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:document.getElementById("name").value,age:document.getElementById("age").value,course:document.getElementById("course").value,skills:document.getElementById("skills").value.split(", ")&&document.getElementById("skills").value.split(","),email:document.getElementById("email").value,isEnrolled:document.getElementById("isEnrolled").checked})}).then(e=>e.json()).then(e=>{console.log(e),o(),n.reset()}).catch(e=>{console.error(e)})}),window.deleteStudent=function(t){fetch(`${e}/students/${t}`,{method:"DELETE"}).then(e=>e.json()).then(e=>{console.log(e),o()}).catch(e=>console.error(e))},window.updateStudent=function(t){let n=prompt("Введіть нове ім'я:");if(!n)return;let d=prompt("Введіть новий вік (тільки цифри)");if(!d||isNaN(d))return void alert("Помилка, вік має бути числом.");let l=Number(d),u=prompt("Введіть новий курс:");if(!u)return;let r=prompt("Введіть навички через кому:");if(!r)return;let s=prompt("Введіть email:");if(!s)return;let c=prompt("Студент навчається? (true/false):");c&&fetch(`${e}/students/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,age:l,course:u,skills:r?r.split(","):[],email:s,isEnrolled:"true"===c})}).then(e=>e.json()).then(e=>{console.log(e),o()}).catch(e=>console.error(e))},o();
//# sourceMappingURL=crud.de685d6c.js.map
