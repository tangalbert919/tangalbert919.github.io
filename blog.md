---
layout: default
title: Blog
permalink: /blog/
---
<h1>My "blog"</h1>

<p>Every now and then, I will post something here. Some of the posts will be purely random, and others may not be. Some might be notes to myself, but could be useful to someone else.</p>

<ul>
    {% for post in site.posts %}
    <li>
        <h2><a id="post" href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.date | date: "%e %b, %Y"}} - {{ post.description }}
    </li>
    {% endfor %}
</ul>