let today;
let year,month,day,hours,minute,second;
setInterval(()=>{
    today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    day = today.getDate();
    if(month<10){ month="0"+month;}
    if(day<10){  day="0"+day;}
    d="Date : "+day+"/"+month+"/"+year;
    document.getElementById("date").innerText=d;
    hours=today.getHours();
    minute=today.getMinutes();
    second=today.getSeconds();
    if(hours<10){hours="0"+hours;}
    if(minute<10){minute="0"+minute;}
    if(second<10){second="0"+second;}
    t="Time : "+hours+":"+minute+":"+second;
    document.getElementById("time").innerText=t;
},20)

function aroow (){
        let input_text = document.getElementById("task-input") ;
        let text_value = input_text.value;


        today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    day = today.getDate();
    if(month<10){ month="0"+month;}
    if(day<10){  day="0"+day;}
    d=day+"/"+month+"/"+year;
    document.getElementById("date").innerText=d;
    hours=today.getHours();
    minute=today.getMinutes();
    second=today.getSeconds();
    if(hours<10){hours="0"+hours;}
    if(minute<10){minute="0"+minute;}
    if(second<10){second="0"+second;}
    t=hours+":"+minute+":"+second;


        if(text_value !== ""){
            if (localStorage.getItem("task") == null) {
                const good =[];
                good.push([text_value,d,t]);
                localStorage.setItem("task", JSON.stringify(good));
              } else {
                let goodstr = localStorage.getItem("task");
                good = JSON.parse(goodstr);
                good.push([text_value,d,t]);
                localStorage.setItem("task", JSON.stringify(good));
              }
            input_text.value="";
        }
            let f="";
            good.forEach((element,index) => {
                f += `
                <tr class="toprow-of-list-pending">
                <td class="list-pending">${index+1}</td>
                <td class="list-pending">${element[1]}</td> 
                <td class="list-pending">${element[2]}</td>
                <td class="list-pending">${element[0]}</td>
                <td class="list-pending"><button class="btn a" style="background-color: rgb(59, 212, 59);" onclick="com(${index})"><i class="fa-solid fa-check"></i></button></td>
                <td class="list-pending"><button class="btn b" style="background-color: rgb(66, 178, 222);" onclick="update(${index})"><i class="fa-solid fa-pen"></i></button></td>
                <td class="list-pending"><button class="btn c" style="background-color: rgb(209, 65, 54);" onclick="remove(${index})"><i class="fa-solid fa-xmark"></i></button></td>
                </tr>
                `
            });
            document.getElementById("t-body").innerHTML=f;
}

document.addEventListener("DOMContentLoaded",function(){
    loadTask();
    loadCom();
})

let add = document.getElementById("add-btn")
add.addEventListener("click",aroow);

function loadTask(){
    const body_table = document.getElementById('t-body');
    const taskss = localStorage.getItem("task");
    if(taskss){
        let good= JSON.parse(taskss) ;
        f="";
        good.forEach((element,index) => {
            f += `
            <tr class="toprow-of-list-pending">
            <td class="list-pending">${index+1}</td>
            <td class="list-pending">${element[1]}</td> 
            <td class="list-pending">${element[2]}</td>
            <td class="list-pending">${element[0]}</td>
            <td class="list-pending"><button class="btn a" style="background-color: rgb(59, 212, 59);" onclick="com(${index})"><i class="fa-solid fa-check"></i></button></td>
            <td class="list-pending"><button class="btn b" style="background-color: rgb(66, 178, 222);" onclick="update(${index})"><i class="fa-solid fa-pen"></i></button></td>
            <td class="list-pending"><button class="btn c" style="background-color: rgb(209, 65, 54);" onclick="remove(${index})"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>
            `
        });
        document.getElementById("t-body").innerHTML=f;;
    }
}

function remove(item){
    console.log("sdfghj")
    const taskss = localStorage.getItem("task");
    let good= JSON.parse(taskss) ;
    good.splice(item,1);
    let filter = good.filter(task => task !== null);
    localStorage.setItem("task",JSON.stringify(good));
    loadTask();
}

let selec;

function update(items) {
    console.log("fghj")
    document.querySelectorAll('.input-add-task').forEach(element => {
        element.style.display = 'none'; 
    })

    document.querySelectorAll('.input-edit-task').forEach(element => {
        element.style.display = 'block'; 
    })

    const taskss = localStorage.getItem("task");
    let good= JSON.parse(taskss) ;
    selec=good[items][0];
    document.getElementById('task-edit').value = good[items][0] ;

    document.getElementById('task-edit').focus();
    localStorage.setItem("task",JSON.stringify(good))
    
}

function saveEdit(){
    console.log("srt");
    document.getElementById('task-edit').value;
    const taskss = localStorage.getItem("task");
    let good= JSON.parse(taskss) ;
    console.log(selec);
    let indexs;
    let i;
    for(i=0;i<good.length;i++){
        if(good[i][0]== selec){
            indexs=i;
            break;
        }
    }
    console.log(i);
    if(i!=-1){
        good[i][0]=document.getElementById('task-edit').value;
        localStorage.setItem("task",JSON.stringify(good));
    }
    loadTask();
    document.getElementById('task-edit').value='';
    document.querySelectorAll('.input-add-task').forEach(element => {
        element.style.display = 'block'; 
    })

    document.querySelectorAll('.input-edit-task').forEach(element => {
        element.style.display = 'none'; 
    })
}
function com (itemc){
   console.log("abc")

   today = new Date();
    year = today.getFullYear();
    month = today.getMonth()+1;
    day = today.getDate();
    if(month<10){ month="0"+month;}
    if(day<10){  day="0"+day;}
    d=day+"/"+month+"/"+year;
    document.getElementById("date").innerText=d;
    hours=today.getHours();
    minute=today.getMinutes();
    second=today.getSeconds();
    if(hours<10){hours="0"+hours;}
    if(minute<10){minute="0"+minute;}
    if(second<10){second="0"+second;}
    t=hours+":"+minute+":"+second;

   const taskss = localStorage.getItem("task");
    let good= JSON.parse(taskss) ;
    let select=good[itemc][0];

        if (localStorage.getItem("taskCom") == null) {
            const goodCom =[];
            goodCom.push([select,d,t]);
            localStorage.setItem("taskCom", JSON.stringify(goodCom));
          } else {
            let goodComstr = localStorage.getItem("taskCom");
            goodCom = JSON.parse(goodComstr);
            goodCom.push([select,d,t]);
            localStorage.setItem("taskCom", JSON.stringify(goodCom));
          }
        let s="";
        goodCom.forEach((element,index) => {
            s += `
            <tr class="toprow-of-list-pending">
                        <td class="list-pending com">${index+1}</td>
                        <td class="list-pending com">${element[1]}</td> 
                        <td class="list-pending com">${element[2]}</td>
                        <td class="list-pending com">${element[0]}</td>
                        <td class="list-pending com"><button class="btn" style="background-color: rgb(209, 65, 54);" onclick="remove(${index})"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>
            `
        });
        document.getElementById("com-t-body").innerHTML=s;
        remove(itemc);
        loadCom();
}
function loadCom(){
    const body_table_1 = document.getElementById('com-t-body');
    const taskw = localStorage.getItem("taskCom");
    if(taskw){
        let goodCom= JSON.parse(taskw) ;
        s="";
        goodCom.forEach((element,index) => {
            s += `
            <tr class="toprow-of-list-pending">
                        <td class="list-pending com">${index+1}</td>
                        <td class="list-pending com">${element[1]}</td> 
                        <td class="list-pending com">${element[2]}</td>
                        <td class="list-pending com">${element[0]}</td>
                        <td class="list-pending com"><button class="btn" style="background-color: rgb(209, 65, 54);" onclick="removecom(${index})"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>   
            `
        });
        document.getElementById("com-t-body").innerHTML=s;
    } 
}

function removecom(itcom){
    console.log("s")
    const taskw = localStorage.getItem("taskCom");
    let goodCom= JSON.parse(taskw) ;
    goodCom.splice(itcom,1);
    let filter = goodCom.filter(task => task !== null);
    localStorage.setItem("taskCom",JSON.stringify(goodCom));
    loadCom();
}
