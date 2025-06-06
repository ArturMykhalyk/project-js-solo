import{a as h}from"./assets/vendor-C19taMLP.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function u(s=1){try{const i="https://sound-wave.b.goit.study/api"+"/artists",e={limit:8,page:s};return(await h.get(i,{params:e})).data}catch(n){return console.log(n),null}}let m=0;function y(s){m=s}function f(){return m}const t={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn")};function p(s){return s.map(({_id:n,strArtist:r,strArtistThumb:i,strBiographyEN:e,genres:o})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${i}"
          alt="${r}"
        />
        <ul class="artists--genres">
        ${o.map(l=>`<li class="artists--genres__item"><p>${l}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${r}</h3>
        <p class="artists--descr">${e}</p>
        <button class="artist--btn" data-id="${n}">
          Learn More
          <svg class="hero-icon" >
            <use href="/img/sprite.svg#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function v(s){t.artistsList.innerHTML=p(s)}function B(s){t.artistsList.insertAdjacentHTML("beforeend",p(s))}function L(){t.loader.classList.add("visible")}function b(){t.loader.classList.remove("visible")}function g(){t.moreBtn.classList.add("visible")}function c(){t.moreBtn.classList.remove("visible")}let d=1;async function O(){if(f()>d){L(),c();const s=await u(++d);b(),g(),B(s.artists)}else c();console.log(artists.artists)}function w(){t.mobileMenuClose.classList.remove("hidden"),t.mobileMenuOpen.classList.add("hidden"),t.mobileMenuList.classList.add("open"),t.mobileMenuClose.addEventListener("click",a),t.mobileMenuList.addEventListener("click",M),document.body.style.overflow="hidden"}function M(s){s.target.nodeName==="A"&&a()}function a(){document.body.style.overflow="",t.mobileMenuClose.classList.add("hidden"),t.mobileMenuOpen.classList.remove("hidden"),t.mobileMenuList.classList.remove("open"),t.mobileMenuClose.removeEventListener("click",a),t.mobileMenuList.removeEventListener("click",M)}t.mobileMenuOpen.addEventListener("click",w);async function P(){L();const s=await u();b(),v(s.artists),y(s.totalArtists/8),f()>1&&(g(),t.moreBtn.addEventListener("click",O))}P();
//# sourceMappingURL=index.js.map
