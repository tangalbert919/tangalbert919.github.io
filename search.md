---
layout: default
title: Search Results
permalink: /search/
---

<h1>Search results:</h1>
<!-- List where search results will be rendered -->
<div class="row g-2" id="search-results">
</div>

<script>
  // Template to generate the JSON to search
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "description": "{{ post.description }}",
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="https://unpkg.com/lunr/lunr.js"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js"></script>