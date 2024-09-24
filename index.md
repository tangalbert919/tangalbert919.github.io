---
layout: home
title: Home
---
<div align="center">
    <img src="/assets/img/logo.svg" />
    {% for item in site.data.navigation %}
        {% if forloop.first %}
            {% continue %}
        {% else %}
        <div>
            <a href="{{ item.link }}" class="home-a">
                {{ item.name }}
            </a>
        </div>
        {% endif %}
    {% endfor %}
</div>
