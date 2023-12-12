---
layout: default
title: Projects
permalink: /projects/
---
<!-- TODO: Move this to JS file -->
<!--<script>
    function displayProject() {
        var fr = new FileReader();
        var file = new File(['test'], '_projects/ungoogled-chromium-freebsd.md', {
            type: 'text/plain',
        });
        fr.onload=function() {
            document.getElementById('message')
                    .textContent=fr.result;
        }
        fr.readAsText(file);
    }
    function test() {
        document.getElementById('message').innerText = "this works";
    }
    function newtest() {
        var file = new File(['test'], '_projects/ungoogled-chromium-freebsd.md', {
            type: 'text/plain',
        });
    }
</script>-->
<h1>My projects</h1>

<p>This page is currently under construction. In the meantime, you can just take a look at my GitHub account <a href="https://github.com/tangalbert919">here.</a></p>
<p>A short list of the projects I am currently working on can also be found here:</p>
<ul>
    {% for post in site.projects %}
    <li>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.description }}
    </li>
    {% endfor %}
</ul>

<!--<div id="projectbar">
    <button onclick="displayProject()">click me!</button>
</div>
<div id="projectcontent">
    <h3 id="message">Testing</h3>
</div>-->