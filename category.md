---
layout: page
title: Category
permalink: /category
---

<style>
    a:visited {
        color: #fff;
    }
</style>

<div class="grid grid-cols-2 gap-4">
{% assign tags = "jekyll python html community" | split: " " %}
{% for category in site.categories %}
  {% assign cat = category | first %}
  {% case cat %}
    {% when tags[0] %}
        {% assign color = "red" %}
    {% when tags[1] %}
        {% assign color = "purple" %}
    {% when tags[2] %}
        {% assign color = "yellow" %}
    {% when tags[3] %}
        {% assign color = "indigo" %}
    {% when tags[4] %}
        {% assign color = "pink" %}
    {% when tags[5] %}
        {% assign color = "blue" %}
    {% when tags[6] %}
        {% assign color = "green" %}
    {% else %}
        {% assign color = "gray" %}
  {% endcase %}
  <div><a class="flex py-2 px-4 h-24 items-center justify-center border border-transparent shadow-sm text-2xl font-medium rounded-md text-white bg-{{ color }}-600 hover:bg-{{ color }}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-{{ color }}-500" href="{{ site.url }}/category/{{ category | first | slugify }}/">{{ category | first }}</a></div>
{% endfor %}
</div>
