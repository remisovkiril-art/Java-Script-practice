class News {
    constructor(title, text, tags, publishDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publishDate = new Date(publishDate);
    }
    print(cl) {
        const now = new Date();
        const diffTime = now - this.publishDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        let dateText = "";
        if (diffDays < 1) {
            dateText = "сьогодні";
        } else if (diffDays < 7) {
            dateText = `${diffDays} days ago`;
        } else {
            let day = this.publishDate.getDate();
            let month = this.publishDate.getMonth() + 1;
            const year = this.publishDate.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }
            dateText = `${day}.${month}.${year}`;
        }
        let tagsString = "";
        for (let i = 0; i < this.tags.length; i++) {
            tagsString += `#${this.tags[i]} `;
        }
        cl(`${this.title}\n${dateText}\n${this.text}\n${tagsString.trim()}\n\n`);
    }
}
export default News;
