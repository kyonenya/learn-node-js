"use strict";
class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}
const post = new Post('タイトル', '本文本文本文');
class Post2 {
    constructor(props) {
        this.title = props.title;
        this.body = props.body;
    }
}
const post2 = new Post2({
    title: 'タイトル',
    body: '本文本文',
});
console.log(post2);
