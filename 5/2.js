"use strict";



const post = {
  author: "John",
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, 
      },
    },
    {
      userId: 5, 
      userName: "Jane",
      text: "lorem ipsum 2", 
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// Здесь пишем решение, данный комментарий необходимо стереть.


console.log(post.author );
for (let i = 0; i < post.comments.length; i++) {
  console.log(post.comments[0].rating.dislikes)
}
for (let i = 0; i < post.comments.length; i++) {
  console.log(post.comments[1].userId);
  console.log(post.comments[1].text);
}


  
  



