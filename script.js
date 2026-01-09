// dom
const buttons = document.querySelectorAll(".sideBar .buttons button");
const features = document.querySelectorAll("main .feature");

// default visibility
features.forEach(f => f.style.display = "none");
document.querySelector('.feature[data-feature="task"]').style.display = "block";

// buttons toggle
buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        const selected = btn.dataset.feature;

        // button active
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // visibility according to button
        features.forEach(f => {
            if (f.dataset.feature === selected) {
                f.style.display = "block";
            } else {
                f.style.display = "none";
            };
        });
    });
});

// hamburger
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function () {
    document.querySelector(".sideBar").classList.toggle("open");
})


// ======================= TASK LOGIC =======================
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskBtn = document.querySelector(".input button");
const taskList = document.getElementById("tasksList");


taskBtn.addEventListener("click", function () {
    let titleValue = taskTitle.value.trim();
    let descriptionValue = taskDescription.value.trim();
    // let taskMessage = document.getElementById("taskMessage");

    if (titleValue === "" || descriptionValue === "") {
        alert("Please fill all the fields.")
    } else {
        // taskMessage.innerHTML = `
        //     <h2 style = "color: white !important">YOUR TASKS</h2>
        // `;
        // taskMessage.style.color = "white";
        taskList.innerHTML += `
            <li>
                <h4>${titleValue}</h4>
                <p style="margin-top: 5px;">${descriptionValue}</p>
                    <div class="resultButtons">
                        <button class = "doneBtn">Mark Done</button>
                        <button class = "editBtn">Edit</button>
                        <button class = "deleteBtn">Delete</button>
                    </div>
            </li>
        `;
        // localStorage.setItem("taskMessage", taskMessage.innerHTML);
        localStorage.setItem("tasks", taskList.innerHTML);

        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";

    }
})
// taskMessage.innerHTML = localStorage.getItem("taskMessage");
taskList.innerHTML = localStorage.getItem("tasks");

// ---------- BUTTONS LOGIC ----------
taskList.addEventListener("click", function (e) {

    const target = e.target;
    const taskItem = target.closest("li");

    // DELETE
    if (target.classList.contains("deleteBtn")) {
        taskItem.remove();
    };

    // MARK DONE
    if (target.classList.contains("doneBtn")) {
        taskItem.classList.toggle("done");
    }

    // EDIT
    if (target.classList.contains("editBtn")) {
        const title = taskItem.querySelector("h4");
        const des = taskItem.querySelector("p");

        const newTitle = prompt("Edit Title:", title.innerText);
        const newDes = prompt("Edit Description:", des.innerText);

        if (newTitle !== "") title.innerText = newTitle;
        if (newDes !== "") des.innerText = newDes;
    };
    // localStorage.setItem("taskMessage", taskMessage.innerHTML);
    localStorage.setItem("tasks", taskList.innerHTML);
});

// ======================= ASSIGNMENT LOGIC =======================
// DOM
const asgSubject = document.getElementById("asgSubject");
const asgDesc = document.getElementById("detail");
const asgDate = document.getElementById("asgDate");
const asgBtn = document.getElementById("asgBtn");
const asgList = document.getElementById("assignmentList");

asgBtn.addEventListener("click", function () {
    let subjectValue = asgSubject.value.trim();
    let descValue = asgDesc.value.trim();
    let dateValue = asgDate.value.trim();
    // let taskMessage = document.getElementById("asgMessage");

    if (subjectValue === "" || descValue === "" || dateValue === "") {
        alert("Please fill all the fields");
        return;
    } else {
        // asgMessage.innerHTML = `
        // <h2 style = "color: white !important">YOUR ASSIGNMENTS</h2>
        // `;
        asgList.innerHTML += `
                <li>
                    <h4>${subjectValue}</h4>
                    <p id = "asgDesccc" style="margin-top: 5px;">${descValue}</p>
                    <p id="asgDatee" style="font-weight: bold;margin-top: 5px;color: #9e9e9e;">${dateValue}</p>
                        <div class="resultButtons">
                            <button class = "doneBtn">Mark Done</button>
                            <button class = "editBtn">Edit</button>
                            <button class = "deleteBtn">Delete</button>
                        </div>
                </li>
        `;
        // localStorage.setItem("asgMessage", asgMessage.innerHTML);
        localStorage.setItem("Assignments", asgList.innerHTML);

        document.getElementById("asgSubject").value = "";
        document.getElementById("detail").value = "";
        document.getElementById("asgDate").value = "";
    };
});
// taskMessage.innerHTML = localStorage.getItem("asgMessage");
asgList.innerHTML = localStorage.getItem("Assignments");
// ---------- BUTTONS LOGIC ----------
asgList.addEventListener("click", function (e) {

    const target = e.target;
    const asgItem = target.closest("li");

    // DELETE
    if (target.classList.contains("deleteBtn")) {
        asgItem.remove();
    };

    // MARK DONE
    if (target.classList.contains("doneBtn")) {
        asgItem.classList.toggle("done");
    };

    // EDIT
    if (target.classList.contains("editBtn")) {
        const subject = asgItem.querySelector("h4");
        const date = asgItem.querySelector("#asgDatee");
        const desc = asgItem.querySelector("#asgDesccc");

        const newSubject = prompt("Edit Subject:", subject.innerText);
        const newDate = prompt("Edit Subject:", date.innerText);
        const newDesc = prompt("Edit Subject:", desc.innerText);

        if (newSubject !== "") subject.innerText = newSubject;
        if (newDate !== "") date.innerText = newDate;
        if (newDesc !== "") desc.innerText = newDesc;
    };
    // localStorage.setItem("asgMessage", asgMessage.innerHTML);
    localStorage.setItem("Assignments", asgList.innerHTML)
});

// ======================= QUIZ LOGIC =======================
// DOM
const quizSubject = document.getElementById("quizSubject");
const quizDate = document.getElementById("quizDate");
const quizDesc = document.getElementById("quizDetail");
const quizBtn = document.getElementById("quizBtn");
const quizList = document.getElementById("quizList");

quizBtn.addEventListener("click", function () {
    let quizSubjectValue = quizSubject.value.trim();
    let quizDateValue = quizDate.value.trim();
    let quizDescValue = quizDesc.value.trim();
    // let quizMessage = document.getElementById("quizMessage")

    if (quizSubjectValue === "" || quizDateValue === "" || quizDescValue === "") {
        alert("Please fill all the fields.");
        return;
    }
    // quizMessage.innerHTML = `
    //     <h2 style = "color: white !important">YOUR QUIZES</h2>
    // `;
    quizList.innerHTML += `
                   <li>
                        <h4 id="quizSubject">${quizSubjectValue}</h4>
                        <p id="quizDesccc" style="margin-top: 5px;">${quizDescValue}</p>
                        <p id="quizDatee" style="font-weight: bold;margin-top: 5px;color: #9e9e9e;">${quizDateValue}</p>
                        <div class="resultButtons">
                            <button class="doneBtn">Mark Done</button>
                            <button class="editBtn">Edit</button>
                            <button class="deleteBtn">Delete</button>
                        </div>
                    </li>
    `;
    // localStorage.setItem("quizMessage",quizMessage.innerHTML);
    localStorage.setItem("Quiz", quizList.innerHTML);

    quizSubject.value = "";
    quizDate.value = "";
    quizDesc.value = "";
});
// quizMessage.innerHTML = localStorage.getItem("quizMessage");
quizList.innerHTML = localStorage.getItem("Quiz");
// ---------- BUTTONS LOGIC ----------
quizList.addEventListener("click", function (e) {
    const target = e.target;
    const quizItem = target.closest("li");

    // DELETE
    if (target.classList.contains("deleteBtn")) {
        quizItem.remove();
    };

    // MARK DONE
    if (target.classList.contains("doneBtn")) {
        quizItem.classList.toggle("done");
    };

    // EDIT
    if (target.classList.contains("editBtn")) {
        const quizSubject = quizList.querySelector("#quizSubject");
        const quizDate = quizList.querySelector("#quizDatee");
        const quizDesc = quizList.querySelector("#quizDesccc");

        const newQuizSubject = prompt("Edit Subject:", quizSubject.innerText);
        const newQuizDate = prompt("Edit Date:", quizDate.innerText);
        const newQuizDesc = prompt("Edit Detail:", quizDesc.innerText);

        if (newQuizSubject !== "") quizSubject.innerText = newQuizSubject;
        if (newQuizDate !== "") quizDate.innerText = newQuizDate;
        if (newQuizDesc !== "") quizDesc.innerText = newQuizDesc;

    };
    // localStorage.setItem("quizMessage",quizMessage.innerHTML);
    localStorage.setItem("Quiz", quizList.innerHTML);
});

// ======================= PROJECT LOGIC =======================
const projectSubject = document.getElementById("projectIdea");
const projectDesc = document.getElementById("projectDescription");
const projectBtn = document.getElementById("projectBtn");
const projectList = document.getElementById("projectList");

projectBtn.addEventListener("click", function () {
    let projectSubjectValue = projectSubject.value.trim();
    let projectDescValue = projectDesc.value.trim();
    // let projectMessage = document.getElementById("projectMessage");

    if (projectSubjectValue === "" || projectDescValue === "") {
        alert("Please fill all the fields");
        return;
    } else {
        // projectMessage.innerHTML = `
        //     <h2 style = "color: white !important">YOUR PROJECTS</h2>
        // `;
        projectList.innerHTML += `
                <li>
                    <h4 id="projectSubject">${projectSubjectValue}</h4> 
                    <p id="projectDetail" style="margin-top: 5px;">${projectDescValue}</p>
                        <div class="resultButtons">
                            <button class="doneBtn">Mark Done</button>
                            <button class="editBtn">Edit</button>
                            <button class="deleteBtn">Delete</button>
                        </div>
                </li>
        `;
        // localStorage.setItem("projectMessage", projectMessage.innerHTML);
        localStorage.setItem("Project", projectList.innerHTML);
        projectSubject.value = "";
        projectDesc.value = "";
    };
});
// projectMessage.innerHTML = localStorage.getItem("projectMessage");
projectList.innerHTML = localStorage.getItem("Project");
// ---------- BUTTONS LOGIC ----------
projectList.addEventListener("click", function (e) {
    const target = e.target;
    const projectItem = target.closest("li");

    // DELETE
    if (target.classList.contains("deleteBtn")) {
        projectItem.remove();
    };

    // MARK DONE
    if (target.classList.contains("doneBtn")) {
        projectItem.classList.toggle("done");
    };

    // EDIT
    if (target.classList.contains("editBtn")) {

        const projectSubject = projectList.querySelector("#projectSubject");
        const projectDetail = projectList.querySelector("#projectDetail");

        const newProjectSubject = prompt("Edit Project Idea:", projectSubject.innerText);
        const newProjectDetail = prompt("Edit Description:", projectDetail.innerText);

        if (newProjectSubject !== "" && newProjectDetail !== "") {
            projectSubject.innerText = newProjectSubject;
            projectBtn.innerText = newProjectDetail;
        };
    };
    // localStorage.setItem("projectMessage", projectMessage.innerHTML);
    localStorage.setItem("Project", projectList.innerHTML);
});

// ======================= PROJECT LOGIC =======================
const companyName = document.getElementById("companyName");
const jobTitle = document.getElementById("jobTitle");
const jobDesc = document.getElementById("jobDescription");
const jobBtn = document.getElementById("jobBtn");
const jobList = document.getElementById("jobList");

jobBtn.addEventListener("click", function () {
    let companyNameValue = companyName.value.trim();
    let jobTitleValue = jobTitle.value.trim();
    let jobDescValue = jobDesc.value.trim();
    // let jobMessage = document.getElementById("jobMessage");

    if (companyName === "" || jobTitleValue === "" || jobDescValue === "") {
        alert("Please fill all the fields.");
        return;
    } else {
        // jobMessage.innerHTML = `
        //     <h2 style = "color: white !important">YOUR JOB APPLICATIONS</h2>
        // `;
        jobList.innerHTML += `
                        <li>
                            <h4 id="companyName">Company Name: ${companyNameValue}</h4>
                            <h4 style="margin-top: 5px;" id="jobTitle">Job Title: ${jobTitleValue}</h4>
                            <p style="margin-top: 5px;" id="jobDetail">${jobDescValue}</p>
                            <div class="resultButtons">
            
                                <button class="editBtn">Edit</button>
                                <button class="deleteBtn">Delete</button>
                            </div>
                        </li>           
        `;
        localStorage.setItem("jobMessage",jobMessage.innerHTML);
        localStorage.setItem("Job", jobList.innerHTML);

        companyName.value = "";
        jobTitle.value = "";
        jobDesc.value = "";
    };
});
// jobMessage.innerHTML = localStorage.getItem("jobMessage");
jobList.innerHTML = localStorage.getItem("Job");

// ---------- BUTTONS LOGIC ----------
jobList.addEventListener("click", function(e){
    const target = e.target;
    const jobItems = target.closest("li");

    // DELETE
    if (target.classList.contains("deleteBtn")){
        jobItems.remove();
    };

    // EDIT
    if (target.classList.contains("editBtn")){
        const companyName = jobList.querySelector("#companyName");
        const jobTitle = jobList.querySelector("#jobTitle");
        const jobDetail = jobList.querySelector("#jobDetail");

        const newCompanyName = prompt("Edit Company Name:", companyName.innerText);
        const newJobTitle = prompt("Edit Company Name:", jobTitle.innerText);
        const newJobDetail = prompt("Edit Company Name:", jobDetail.innerText);

        if (newCompanyName !== "" && newJobTitle !== "" && newJobDetail !== ""){
            companyName.innerText = newCompanyName;
            jobTitle.innerText = newJobTitle;
            jobDetail.innerText = newjobDetail;
        };
    };
    // localStorage.setItem("jobMessage",jobMessage.innerHTML);
    localStorage.setItem("Job", jobList.innerHTML);
});