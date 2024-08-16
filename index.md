---
layout: default
title: Home
---
<div class="alert alert-info">
    This website is currently being redesigned and revamped! You can read more about it <a href="/2024/05/06/revamp-website.html">here.</a>
</div>
<div class="row">
    <div class="col-lg-8" id="home-page">
        <h2>Posts</h2>
        <div class="row">
            {% for post in site.posts %}
            <div class="col-xs-12 col-md-6" id="post">
                <h3>{{ post.title }}</h3>
                <a id="post" href="{{ post.url }}"><span class="link-spanner"></span></a>
                {{ post.date | date: "%e %b, %Y"}} - {{ post.description }}
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="col-lg-4" id="home-page">
        <h2>Projects</h2>
        {% for post in site.projects %}
        <div id="post">
            <h3>{{ post.title }}</h3>
            <a id="post" href="{{ post.url }}"><span class="link-spanner"></span></a>
            {{ post.description }}
        </div>
        {% endfor %}
    </div>
</div>