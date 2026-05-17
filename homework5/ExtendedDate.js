class ExtendedDate extends Date {
    showDate() {
        const months = [
            "Января",
            "Февраля",
            "Марта",
            "Апреля",
            "Мая",
            "Июня",
            "Июля",
            "Августа",
            "Сентября",
            "Октября",
            "Ноября",
            "Декабря"
        ];
        return this.getDate()
            + " " +
            months[this.getMonth()];
    }
    checkDate() {
        let now = new Date();
        return this >= now;
    }
    checkLeapYear() {
        return (
            this.getFullYear() % 4 == 0
            &&
            this.getFullYear() % 100 != 0
        )
            ||
            this.getFullYear() % 400 == 0;
    }
    nextDate() {
        let next =
            new ExtendedDate(this);
        next.setDate(
            next.getDate() + 1
        );
        return next;
    }
}
export default ExtendedDate;
