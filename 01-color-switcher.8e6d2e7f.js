const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");r.style.paddingLeft="300";let d=null;e.setAttribute("disabled",""),t.addEventListener("click",(t=>{t.target.setAttribute("disabled",!0),e.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(e=>{e.target.setAttribute("disabled",!0),t.removeAttribute("disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.8e6d2e7f.js.map