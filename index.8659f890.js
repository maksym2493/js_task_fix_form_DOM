document.querySelectorAll("form input").forEach(function(e){var t=e.getAttribute("name"),l=document.createElement("label");l.classList.add("field-label"),l.htmlFor=e.id,l.textContent=t,e.placeholder=t[0].toUpperCase()+t.slice(1),e.after(l)});
//# sourceMappingURL=index.8659f890.js.map
