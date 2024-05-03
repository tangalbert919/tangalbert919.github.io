---
layout: default
title: Projects
permalink: /projects/
---
<h1>My projects</h1>

<p>This page is currently under construction. In the meantime, you can just take a look at my GitHub account <a href="https://github.com/tangalbert919">here.</a></p>
<div class="row">
    {% for post in site.projects %}
    <div class="col-xs-12 col-md-6">
        <h2><a id="post" href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.description }}
    </div>
    {% endfor %}
</div>
