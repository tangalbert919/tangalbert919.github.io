---
layout: default
title: Home
---
<h1>Welcome to my new website!</h1>
<p>Currently, it is still a work-in-progress, but I will improve it when I have the time.</p>
<p>You can explore the website using the navigation bar on top.</p>
<div class="row">
    <div class="col-lg-8" id="home-page">
        <h2>Posts</h2>
        <div class="row">
            {% for post in site.posts %}
            <div class="col-xs-12 col-md-6">
                <h3><a id="post" href="{{ post.url }}">{{ post.title }}</a></h3>
                {{ post.date | date: "%e %b, %Y"}} - {{ post.description }}
            </div>
            {% endfor %}
        </div>
    </div>
    <div class="col-lg-4" id="home-page">
        <h2>Projects</h2>
        {% for post in site.projects %}
        <div>
            <h3><a id="post" href="{{ post.url }}">{{ post.title }}</a></h3>
            {{ post.description }}
        </div>
        {% endfor %}
    </div>
</div>