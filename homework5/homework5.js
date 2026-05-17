import RefillMarker from "./RefillMarker.js";
import ExtendedDate from "./ExtendedDate.js";
const marker =
    new RefillMarker(
        "blue",
        10
    );
marker.print(
    "Очень длинный текст для проверки маркера"
);
marker.refill(20);
const date =
    new ExtendedDate(
        2025,
        5,
        20
    );
console.log(
    date.showDate()
);
console.log(
    date.checkDate()
);
console.log(
    date.checkLeapYear()
);
console.log(
    date.nextDate()
);