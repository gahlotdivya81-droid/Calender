const calendar = document.getElementById("calendar");
const currentMonth = document.getElementById("currentMonth");
const currentYear = document.getElementById("currentYear");

const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];

let currentDate = new Date();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

function renderCalendar(){

    currentMonth.innerText = months[month];
    currentYear.innerText = year;

    calendar.innerHTML = "";

    const table = document.createElement("table");
    table.className = "table table-bordered table-striped";

    // Header
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const headerRow = document.createElement("tr");

    days.forEach(day => {
        const th=document.createElement("th");
        th.innerText=day;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    const firstDay = new Date(year,month,1).getDay();
    const totalDays = new Date(year,month+1,0).getDate();

    let date=1;

    for(let i = 0; i < 5; i++) {
        const row=document.createElement("tr");

        for(let j=0;j<7;j++){

            const cell=document.createElement("td");

            if(i===0 && j<firstDay){

                cell.innerHTML="";

            }else if(date<=totalDays){
                if (
                     date === currentDate.getDate() &&
                    month === currentDate.getMonth() &&
                    year === currentDate.getFullYear()
            ) {
                    cell.classList.add("today");
                }

                cell.innerHTML=date;
                date++;

            }

            row.appendChild(cell);

        }

        table.appendChild(row);

    }

    calendar.appendChild(table);

}

renderCalendar();

const prevMonthBtn = document.getElementById("prevMonth");

prevMonthBtn.addEventListener("click",function(){

    month--;

    if(month<0){

        month=11;
        year--;

    }

    renderCalendar();

});

const nextMonthBtn=document.getElementById("nextMonth");

nextMonthBtn.addEventListener("click",function(){

    month++;

    if(month>11){

        month=0;
        year++;

    }

    renderCalendar();

});
const nextYearBtn=document.getElementById("nextYearBtn");

nextYearBtn.addEventListener("click",function(){

    year++;

    renderCalendar();

});
const prevYearBtn=document.getElementById("prevBtn");

prevYearBtn.addEventListener("click",function(){

    year--;

    renderCalendar();

});

