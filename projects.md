---
layout: default
title: Projects
permalink: /projects/
---
<h1>My projects</h1>

<div class="alert alert-info">This page is currently under construction. In the meantime, you can just take a look at my GitHub account <a href="https://github.com/tangalbert919">here.</a></div>
<div class="alert alert-warning">This page is not updated regularly. Some information here may be outdated.</div>
<div class="row g-2">
    {% for post in site.projects %}
    <div class="col-xs-12 col-md-6">
        <div class="p-3" id="post">
            <h2>{{ post.title }}</h2>
            <a href="{{ post.url }}"><span class="link-spanner"></span></a>
            {{ post.description }}
        </div>
    </div>
    {% endfor %}
</div>
