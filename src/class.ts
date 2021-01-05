class Post {
  constructor(public title: string, public body: string) {
    
  }
}

const post = new Post('タイトル', '本文本文本文');

class Post2 {
  public title;
  public body;
  
  constructor(props: {
    title: string;
    body: string;
  }) {
    this.title = props.title;
    this.body = props.body;
  }
}

const post2 = new Post2({
  title: 'タイトル',
  body: '本文本文',
});

console.log(post2);
