'use strict';
const cl = console.log;
class PrintMachine {
    constructor(fontSize, color, fontFamily) {
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }
    print(text) {
        document.write(
            `<p style="
        font-size:${this.fontSize};
        color:${this.color};
        font-family:${this.fontFamily}">
        ${text}
        </p>`
        );
    }
}
const printer =
    new PrintMachine(
        "25px",
        "blue",
        "Arial"
    );
printer.print("Привет мир");
document.write("<hr>");
class News {
    constructor(title, text, tags, date) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }
    print() {
        let now = new Date();
        let days =
            Math.floor(
                (now - this.date)
                / (1000 * 60 * 60 * 24)
            );
        let dateText = "";
        if (days < 1) {
            dateText = "Сегодня";
        }
        else if (days < 7) {
            dateText =
                `${days} дней назад`;
        }
        else {
            dateText =
                `${this.date.getDate()}.${this.date.getMonth() + 1
                }.${this.date.getFullYear()}`;
        }
        document.write(
            `<h2>${this.title}</h2>
        <p>${dateText}</p>
        <p>${this.text}</p>
        <p>#${this.tags.join(" #")}</p>
        <hr>`
        );
    }
}
class NewsFeed {
    constructor() {
        this.news = [];
    }
    get newsCount() {
        return this.news.length;
    }
    add(news) {
        this.news.push(news);
    }
    remove(index) {
        this.news.splice(index, 1);
    }
    sort() {
        this.news.sort(
            function (a, b) {
                return b.date - a.date;
            });
    }
    search(tag) {
        let result = [];
        for (let i = 0; i < this.news.length; i++) {
            for (let j = 0; j < this.news[i].tags.length; j++) {
                if (this.news[i].tags[j] == tag) {
                    result.push(this.news[i]);
                }
            }
        }
        return result;
    }
    show() {
        for (
            let i = 0;
            i < this.news.length;
            i++
        ) {
            this.news[i].print();
        }
    }
}
const news1 =
    new News(
        "JavaScript",
        "JavaScript используется для разработки сайтов",
        ["js", "web"],
        new Date()
    );
const news2 =
    new News(
        "HTML",
        "HTML отвечает за структуру страницы",
        ["html", "web"],
        new Date(2025, 5, 10)
    );
const feed =
    new NewsFeed();
feed.add(news1);
feed.add(news2);
cl(feed.newsCount);
feed.sort();
feed.show();
cl(feed.search("web"));