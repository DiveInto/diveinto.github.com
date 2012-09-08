---
layout: page
title: 世界，你好
tagline: Supporting tagline
---
{% include JB/setup %}

这是我的个人主页，现在它几乎还是空白，不过它是一个有机体，会和我一起成长。

<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

 _对了，这个blog是用jekyll搭建的，如果你感兴趣的话：_  [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)


