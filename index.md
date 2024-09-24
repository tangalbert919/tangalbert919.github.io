---
layout: home
title: Home
---
<div align="center">
    <img src="/assets/img/logo.svg" />
    {% for item in site.data.navigation %}
    <div>
        <a href="{{ item.link }}" class="home-a">
            {{ item.name }}
        </a>
    </div>
    {% endfor %}
</div>
