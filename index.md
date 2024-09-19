---
layout: home
title: Home
---
<div align="center">
    <img src="/assets/img/logo.svg" />
    {% for item in site.data.navigation reversed %}
    <div>
        <a href="{{ item.link }}">
            {{ item.name }}
        </a>
    </div>
    {% endfor %}
</div>
