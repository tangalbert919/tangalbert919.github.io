---
layout: home
title: Home
---
<div align="center">
    <h1 id="home-h1">ALBERT TANG</h1>
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
