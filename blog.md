---
layout: default
title: Blog
permalink: /blog/
---
<h1>My "blog"</h1>

<p>Every now and then, I will post something here. Some of the posts will be purely random, and others may not be. Some might be notes to myself, but could be useful to someone else.</p>

<div class="header-search mb-3">
  <form class="row row-cols-sm-auto g-3 header-search-form align-items-center" action="/search/" method="get">
    <div class="col-12">
      <input type="text" id="search-box" name="query" class="form-control" placeholder="Search for posts here...">
    </div>
    <div class="col-12">
      <input type="submit" class="btn btn-primary" value="search">
    </div>
  </form>
</div>

<div class="row g-2">
    {% for post in site.posts %}
    <div class="col-md-6 col-xs-12">
        <div class="p-3" id="post">
            <img src="/assets/img/{{post.title | downcase | replace: ' ', '-'}}.jpg" />
            <h2>{{ post.title }}</h2>
            <a href="{{ post.url }}"><span class="link-spanner"></span></a>
            {{ post.date | date: "%e %b, %Y"}} - {{ post.description }}
        </div>
    </div>
    {% endfor %}
</div>
