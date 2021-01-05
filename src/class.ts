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
post2.title = '書き換えられたタイトル';
console.log(post2); // title: '書き換えられたタイトル'


class PostCapsuled {
  protected title;
  protected body;
  
  constructor({ title, body }: {
    title: string;
    body: string;
  }){
    this.title = title;
    this.body = body;
  }
};

const post3 = new PostCapsuled({
  title: 'タイトル',
  body: '本文'
});

// post3.title = '書き換えられたタイトル';
// -> "Property 'title' is protected and only accessible within class 'PostImmutable' and its subclasses."

// console.log(post3.title);
// -> Property 'title' is protected and only accessible within class 'PostCapsuled' and its subclasses.

class PostImmutable {
  public readonly title;
  constructor(title: string) {
    this.title = title;
  }
}

const post4 = new PostImmutable('元のタイトル');
console.log(post4.title); // -> '元のタイトル'
// post4.title = '書き換えられたタイトル';
// -> Cannot assign to 'title' because it is a read-only property.
