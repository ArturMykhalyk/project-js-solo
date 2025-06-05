import{a as d}from"./assets/vendor-C19taMLP.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();async function m(n=1){try{const i="https://sound-wave.b.goit.study/api"+"/artists",e={limit:8,page:n};return(await d.get(i,{params:e})).data}catch(o){return console.log(o),null}}const s={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn")};function f(){s.mobileMenuClose.classList.remove("hidden"),s.mobileMenuOpen.classList.add("hidden"),s.mobileMenuList.classList.add("open"),s.mobileMenuClose.addEventListener("click",c),s.mobileMenuList.addEventListener("click",a),document.body.style.overflow="hidden"}function a(n){n.target.nodeName==="A"&&c()}function c(){document.body.style.overflow="",s.mobileMenuClose.classList.add("hidden"),s.mobileMenuOpen.classList.remove("hidden"),s.mobileMenuList.classList.remove("open"),s.mobileMenuClose.removeEventListener("click",c),s.mobileMenuList.removeEventListener("click",a)}function p(n){const o=n.map(({id:l,strArtist:i,strArtistThumb:e,strBiographyEN:t,genres:r})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${e}"
          alt="${i}"
        />
        <ul class="artists--genres">
        ${r.map(u=>`<li><p>${u}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${i}</h3>
        <p class="artists--descr">${t}</p>
        <button class="artist--btn">
          Learn More
          <svg class="hero-icon" data-id="${l}">
            <use href="/img/sprite.svg#icon-right-arrow"></use>
          </svg>
        </button>
      </li>
  `).join("");s.artistsList.innerHTML=o}s.mobileMenuOpen.addEventListener("click",f);async function b(){const n=await m();p(n.artists)}b();
//# sourceMappingURL=index.js.map
