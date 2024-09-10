import {Source} from "@/news/model/source.entity.js";

export class Article {
    constructor(title, description, url, urlToImage, source, publishedAt) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.source = source ? new Source(source): null;
        this.publishedAt = new Date(publishedAt);
    }
}