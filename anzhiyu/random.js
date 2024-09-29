var posts=["2024/09/29/Markdown语言介绍/","2024/09/27/Visual Studio Code 介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };