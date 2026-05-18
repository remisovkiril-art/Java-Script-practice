class NewsFeed {
    constructor() {
        this.news = [];
    }
    getCount() {
        return this.news.length;
    }
    addNews(newsItem) {
        this.news[this.news.length] = newsItem;
    }
    printAll(cl) {
        for (let i = 0; i < this.news.length; i++) {
            this.news[i].print(cl);
        }
    }
    deleteNews(title) {
        let updatedNews = [];
        for (let i = 0; i < this.news.length; i++) {
            if (this.news[i].title !== title) {
                updatedNews[updatedNews.length] = this.news[i];
            }
        }
        this.news = updatedNews;
    }
    sortByDate() {
        for (let i = 0; i < this.news.length - 1; i++) {
            for (let j = 0; j < this.news.length - 1 - i; j++) {
                if (this.news[j].publishDate < this.news[j + 1].publishDate) {
                    let temp = this.news[j];
                    this.news[j] = this.news[j + 1];
                    this.news[j + 1] = temp;
                }
            }
        }
    }
    searchByTag(tag) {
        let result = [];
        for (let i = 0; i < this.news.length; i++) {
            let hasTag = false;
            for (let j = 0; j < this.news[i].tags.length; j++) {
                if (this.news[i].tags[j] === tag) {
                    hasTag = true;
                    break;
                }
            }
            if (hasTag) {
                result[result.length] = this.news[i];
            }
        }
        return result;
    }
}
export default NewsFeed;
