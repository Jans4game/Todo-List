const container = document.querySelector('#container');
const sidebar = document.querySelector('#sidebar');
const addnewbooks = document.querySelector('#sidebarfirst');
const formsend = document.querySelector('#formee');
const titler = document.querySelector('#titler');
const maincontent = document.querySelector('#maincontent');
const remover = document.querySelector('.removerhelp');
const mainhead = document.querySelector('#mainheader');
const taskheader = document.querySelector('#taskheader');
const addtaskbutton = document.querySelector('#addtask');
const popupcloser = document.querySelector('#closepopup');
const popupform = document.querySelector('#popupform');
const formeeeer = document.querySelector('#formeraligner');
const formalalign = document.querySelector('.formaligner');
const blurer = document.querySelector('#blur');
const submit = document.querySelector('#submitpopup');
const titletext = document.querySelector('#titletext');
const duedate = document.querySelector('#duedate');
const priorityy = document.querySelector('#priority');
const descriptionn = document.querySelector('#description');
const tasker = document.querySelector('#tasker');
const taskalign = document.querySelector('#taskalign');
const enterhelp = document.querySelectorAll('.enterform');
const aligner = document.querySelector('#aligner');
const differ = document.querySelector('#differ');
const deleter = document.querySelector('.deleter');
const hold = document.querySelector('#hold');

for (let i = 0; i < enterhelp.length;i++){
    enterhelp[i].addEventListener('keyup', function(event) {
        if (event.keyCode === 13){
            event.preventDefault();
            if(this.parentElement.nextElementSibling.querySelector('input')){
                this.parentElement.nextElementSibling.querySelector('input').focus();
            } else if(this.parentElement.nextElementSibling.querySelector('select')){
                this.parentElement.nextElementSibling.querySelector('select').focus();
            } else if(this.parentElement.nextElementSibling.querySelector('textarea')){
                this.parentElement.nextElementSibling.querySelector('textarea').focus();
            } else{

            }
        }
    });
}


formeeeer.style.visibility ='hidden';

let projectholder = [];
let holder = [];
let myprojects = [];

function former() {
    const adder = document.createElement('div');
    adder.setAttribute("id", "form");
    adder.innerHTML = `<form id="formee"><div class="sidearranger"><input type="text" id="titler" placeholder="Name of the task" required></div></form>`;

    addnewbooks.appendChild(adder);
} 

formsend.addEventListener('submit', (e) => {
    e.preventDefault();
    care(titler.value);
}); 

function care(titler) {
    if(titler == ""){
        alert("Please fill the name of the task");
    } else {
    let i = myprojects.length; //0
    myprojects[i] = new Array(titler);
    holder.push(myprojects[i]); //myprojects[  ,   ,   ,]
    addtopage();
    }
}

function addtopage() {
    while(hold.firstChild){
        hold.removeChild(hold.lastChild);
    }
    for (let i = 0;i< myprojects.length; i++){
        if(addnewbooks.lastChild.id == "deletetasker"){
            addnewbooks.removeChild(addnewbooks.lastChild);
            const pros = document.createElement('div');
            pros.setAttribute("id", `projectholder${i}`);
            pros.setAttribute("class", `projectholder`);
            pros.innerHTML = `<button id="task${i}" class="indicatorbutt" onclick="taskheaderchange(this.id); addingtomyprojects(this.id)">${myprojects[i]}</button>`;

            hold.appendChild(pros);            
        } else {
            const pros = document.createElement('div');
            pros.setAttribute("id", `projectholder${i}`);
            pros.setAttribute("class", `projectholder`);
            pros.innerHTML = `<button id="task${i}" class="indicatorbutt" onclick="taskheaderchange(this.id); addingtomyprojects(this.id)">${myprojects[i]}</button>`;

            hold.appendChild(pros);
        }
    }
    const taskdeleter = document.createElement('div');
    taskdeleter.setAttribute("id", "deletetasker");
    taskdeleter.innerHTML = `<button id="deletetask" class="indicatorbutt" onclick="tasdel()">Delete</button>`;  
            
    hold.appendChild(taskdeleter);

    contentaligner();
    clearer();
}

function taskheaderchange(clicked_id) {
    const indbutt = document.querySelectorAll('.indicatorbutt'); 
    for (let i = 0; i < indbutt.length; i++){
        indbutt[i].style.backgroundColor = "lightgray";
    }

    taskheader.removeChild(taskheader.firstElementChild);
    let j = clicked_id;
    let fact = j.slice(4);

    const indicbutt = document.querySelector(`#${j}`);
    indicbutt.style.backgroundColor = "dodgerblue";

    const header2 = document.createElement('h2');
    header2.setAttribute("id", `mainheader${fact}`);
    header2.setAttribute("class", "removerhelp");
    header2.innerText = `${myprojects[fact][0]}`;

    taskheader.appendChild(header2);
    tasker.innerHTML = null;
    addtaskbutton.style.visibility = 'visible';
}

function adding(){
    if (titletext.value == ""){

    } else if (duedate.value == ""){

    } else if (descriptionn.value == ""){

    } else {
    const ad = document.querySelector('.removerhelp').id;
    let pre = ad.slice(10);
    myprojects[pre].push(titletext.value, duedate.value, priorityy.value, descriptionn.value);
    }

    console.log({holder});
    console.log({myprojects});
}

function addingtomyprojects(licked_id) {
    while(tasker.firstChild){
        tasker.removeChild(tasker.lastChild);
    }
    const que = document.querySelector('.removerhelp').id;
    let sp = que.slice(10);
    let display = myprojects[sp].length -1;
    let dis = display/4; 
    if (dis == 0){

    }else {
        for (let j=0;j<display;j = j+4){
            const minicont = document.createElement('div');
            minicont.setAttribute("id", "minicont");

            const times = document.createElement('div');
            times.setAttribute(`id`, `addingbefore${sp}`);
            times.setAttribute("class", "addingbefore");

            const fullholder = document.createElement('div');
            fullholder.setAttribute(`id`, `fullholder${j + 4}`);
            fullholder.setAttribute(`class`, `fullholder`);

            const timer = document.createElement('div');
            timer.setAttribute("id", "addingnow");

            const timey = document.createElement('div');
            timey.setAttribute("id", "addingafter");

            const seller1 = document.createElement('div')
            seller1.setAttribute("id", `addingthen${sp}${j+1}`);
            seller1.setAttribute("class", "addingthena");
            seller1.innerText = `${myprojects[sp][j + 1]}`;

            const seller2 = document.createElement('div')
            seller2.setAttribute("id", `addingthen${sp}${j+2}`);
            seller2.setAttribute("class", "addingthenb");
            seller2.innerText = `Due Date: ${myprojects[sp][j + 2]}`;
            
            const seller4 = document.createElement('p')
            seller4.setAttribute("id", `addingthen${sp}${j+4}`);
            seller4.setAttribute("class", "addingthend");
            seller4.innerHTML = `<p id="todo">To-Do</p><p id="lineme">${myprojects[sp][j + 4]}</p>`;

            const del = document.createElement('div');
            del.setAttribute("id", "deleterdiv");
            del.innerHTML = `<button id="deleter${sp}${j}" class="deleter" onclick="myprodel(this.id)">Delete</button>`;

            const upd = document.createElement('div');
            upd.setAttribute("id", "updaterdiv");
            upd.innerHTML = `<button id="updater${sp}${j}" class="updater" onclick="myproupd(this.id)">Update</button>`;

            timer.appendChild(seller1);
            timer.appendChild(upd);
            timer.appendChild(del);
            timer.appendChild(seller2);
            timey.appendChild(seller4);

            fullholder.appendChild(timer);
            fullholder.appendChild(timey);
            
            times.appendChild(fullholder);
            minicont.appendChild(times);
            tasker.appendChild(minicont);

            const addingthen1 = document.querySelector(`#addingthen${sp}${j+1}`);
            const addingthen2 = document.querySelector(`#addingthen${sp}${j+2}`);
            const addingthen4 = document.querySelector(`#addingthen${sp}${j+4}`);

            if (myprojects[sp][j+3] == "Low"){

                addingthen1.style.borderTop = '5px solid darkgreen';
                addingthen1.style.borderLeft = '5px solid darkgreen';

                del.style.borderTop = '5px solid darkgreen';

                upd.style.borderTop = '5px solid darkgreen';

                addingthen2.style.borderTop = '5px solid darkgreen';
                addingthen2.style.borderRight = '5px solid darkgreen';

                addingthen4.style.borderLeft = '5px solid darkgreen';
                addingthen4.style.borderRight = '5px solid darkgreen';
                addingthen4.style.borderBottom = '5px solid darkgreen';

            } else if (myprojects[sp][j+3] == "Medium"){

                addingthen1.style.borderTop = '5px solid darkorange';
                addingthen1.style.borderLeft = '5px solid darkorange';

                del.style.borderTop = '5px solid darkorange';

                upd.style.borderTop = '5px solid darkorange';

                addingthen2.style.borderTop = '5px solid darkorange';
                addingthen2.style.borderRight = '5px solid darkorange';

                addingthen4.style.borderLeft = '5px solid darkorange';
                addingthen4.style.borderRight = '5px solid darkorange';
                addingthen4.style.borderBottom = '5px solid darkorange';

            } else {

                addingthen1.style.borderTop = '5px solid red';
                addingthen1.style.borderLeft = '5px solid red';

                del.style.borderTop = '5px solid red';

                upd.style.borderTop = '5px solid red';

                addingthen2.style.borderTop = '5px solid red';
                addingthen2.style.borderRight = '5px solid red';

                addingthen4.style.borderLeft = '5px solid red';
                addingthen4.style.borderRight = '5px solid red';
                addingthen4.style.borderBottom = '5px solid red';

            }
        }
    }
    if(tasker.lastChild){
        contentaligns();
    } else {

    }
    
}

addtaskbutton.addEventListener('click', pooooop);
popupcloser.addEventListener('click', plep);

function plop() {
    if (titletext.value == ""){
        alert("Please fill the title name");
    } else if (duedate.value == ""){
        alert("Please enter the date")
    } else if (descriptionn.value == ""){
        alert("Please fill some details about the task")
    } else {
    formeeeer.style.visibility = 'hidden';
    blurer.classList.toggle('active'); 
    }
}

function plep(){
    formeeeer.style.visibility = 'hidden';
    blurer.classList.toggle('active'); 
}

function pooooop() {
    const rem = document.querySelector('.subreal');
    formalalign.removeChild(rem);

    const upda = document.createElement('div');
    upda.setAttribute("class", "subreal");
    upda.innerHTML = `<input type="button" id="submitpopup" value="Add Task" onclick ="work()">`;

    formalalign.appendChild(upda);

    clearform();
    blurer.classList.toggle('active');
    formeeeer.style.visibility = 'visible';
    titletext.focus();
}

function work(){
    if (titletext.value == ""){
        alert("Please fill the title name");
    } else if (duedate.value == ""){
        alert("Please enter the date")
    } else if (descriptionn.value == ""){
        alert("Please fill some details about the task")
    } else {
        plep();
        adding();
        addingtomyprojects();
    }
}

function clearform(){
    titletext.value = "";
    duedate.value = "";
    priorityy.value = "Low";
    descriptionn.value = "";
}

function clearer(){
    titler.value = "";
}

popupcloser.addEventListener('click', (e) => {
    e.preventDefault();
});

popupform.addEventListener('click', (e) => {
    e.preventDefault();
});

function contentaligner(){
    let height = aligner.offsetHeight;
    let height2 = maincontent.offsetHeight;
    let height3 = height2 + 48;
    if (height >= height3){
        differ.style.height = `${height}px`;
    }else {
        aligner.style.height = `${height3}px`;
        differ.style.height = `${height3}px`;
    }
}

function contentaligns(){
    let height = aligner.offsetHeight;
    let height2 = tasker.offsetHeight;
    if(height > height2){

    } else {
        differ.style.height = `${height2 + 110}px`;
    }
}

function myprodel(iddel){
    const arc = document.querySelector(`#${iddel}`).parentElement.parentElement.parentElement.parentElement.id;
    const ship = document.querySelector(`#${iddel}`).parentElement.parentElement.parentElement.id;
    let l= arc.slice(12);
    let m = ship.slice(10);
    let n = m - 3;
    myprojects[l].splice(n, 4);
    console.log({holder});
    console.log({myprojects});
    addingtomyprojects();
}

function myproupd(idupd){
    const arc = document.querySelector(`#${idupd}`).parentElement.parentElement.parentElement.parentElement.id;
    const ship = document.querySelector(`#${idupd}`).parentElement.parentElement.parentElement.id;
    let l= arc.slice(12);
    let m = ship.slice(10);
    let n = m - 4;
    pooooopel(l, n);
}

function pooooopel(l, n){
    const rem = document.querySelector('.subreal');
    formalalign.removeChild(rem);

    const upda = document.createElement('div');
    upda.setAttribute("class", "subreal");
    upda.innerHTML = `<input type="button" id="submitpopup" value="Update" onclick="fooopel(${l}, ${n})">`;

    formalalign.appendChild(upda);

    titletext.value = myprojects[l][n + 1];
    duedate.value = myprojects[l][n + 2];
    priorityy.value = myprojects[l][n + 3];
    descriptionn.value = myprojects[l][n + 4];
    blurer.classList.toggle('active');
    formeeeer.style.visibility = 'visible';
    titletext.focus();
}

function fooopel(l, n){
    plep();
    myprojects[l][n + 1] = titletext.value;
    myprojects[l][n + 2] = duedate.value;
    myprojects[l][n + 3] = priorityy.value;
    myprojects[l][n + 4] = descriptionn.value;
    addingtomyprojects();
}

function tasdel(){
    console.log({myprojects});
    const ad = document.querySelector('.removerhelp').id;
    let pre = ad.slice(10);
    myprojects.splice(pre, 1);
    console.log({myprojects});
    addtopage();
    deletehelper();
}

function deletehelper(){
    const indbutt = document.querySelectorAll('.indicatorbutt'); 
    for (let i = 0; i < indbutt.length; i++){
        indbutt[i].style.backgroundColor = "lightgray";
    }

    taskheader.removeChild(taskheader.firstElementChild);
    const adds = document.createElement('h2');
    adds.setAttribute("id", "heee");
    adds.innerText = "Nothing To-Do";

    taskheader.appendChild(adds);
    addtaskbutton.style.visibility = "hidden";
    while(tasker.firstChild){
        tasker.removeChild(tasker.lastChild);
    }
    if (hold.firstChild.id == "deletetasker"){
        hold.removeChild(hold.lastChild);
    }
}