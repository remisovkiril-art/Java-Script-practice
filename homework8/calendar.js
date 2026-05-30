const btn = document.getElementById("generate");
const calendar = document.getElementById("calendar");
btn.addEventListener("click", generateCalendar);
function generateCalendar() {
    let month = Number(document.getElementById("month").value);
    let year = Number(document.getElementById("year").value);
    let firstDay = new Date(year, month - 1, 1);
    let startDay = firstDay.getDay();
    if (startDay == 0) {
        startDay = 7;
    }
    let daysInMonth = new Date(year, month, 0).getDate();
    let html = "<table border='1'>";
    html += `
    <tr>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
        <th>THU</th>
        <th>FRI</th>
        <th>SAT</th>
        <th>SUN</th>
    </tr>
    `;
    let day = 1;
    for (let i = 0; i < 6; i++) {
        html += "<tr>";
        for (let j = 1; j <= 7; j++) {
            if (i == 0 && j < startDay) {
                html += "<td></td>";
            }
            else if (day > daysInMonth) {
                html += "<td></td>";
            }
            else {
                html += `<td>${day}</td>`;
                day++;
            }
        }
        html += "</tr>";
        if (day > daysInMonth) {
            break;
        }
    }
    html += "</table>";
    calendar.innerHTML = html;
}