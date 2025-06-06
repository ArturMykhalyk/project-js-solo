import{a as u,S as M,N as h,P as w,A as B}from"./assets/vendor-BZWs5a-V.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();async function m(t=1){try{const o="https://sound-wave.b.goit.study/api"+"/artists",e={limit:8,page:t};return(await u.get(o,{params:e})).data}catch(i){return console.log(i),null}}async function P(t=1){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",e={limit:8,page:t};return(await u.get(o,{params:e})).data}catch(i){return console.log(i),null}}let p=0;function k(t){p=t}function f(){return p}const s={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".feed-back-container"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn")};function b(t){return t.map(({_id:i,strArtist:r,strArtistThumb:o,strBiographyEN:e,genres:n})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${o}"
          alt="${r}"
        />
        <ul class="artists--genres">
        ${n.map(a=>`<li class="artists--genres__item"><p>${a}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${r}</h3>
        <p class="artists--descr">${e}</p>
        <button class="artist--btn" data-id="${i}">
          Learn More
          <svg class="hero-icon" >
            <use href="/img/sprite.svg#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function $(t){s.artistsList.innerHTML=b(t)}function E(t){s.artistsList.insertAdjacentHTML("beforeend",b(t))}function v(){s.loader.classList.add("visible")}function g(){s.loader.classList.remove("visible")}function L(){s.moreBtn.classList.add("visible")}function l(){s.moreBtn.classList.remove("visible")}function O(t){const r=`
  <div class="swiper modal-product__slider">
<div class="swiper-wrapper">
  ${t.map(({_id:o,name:e,rating:n,descr:a})=>`<div class="swiper-slide" data-id="${o}">
<p>${n}</p>
<p>${a}</p>
<p>${e}</p>

</div>`).join("")}
</div>
<div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div>
<div class="swiper-pagination"></div>
</div>`;s.feedBack.innerHTML=r,new M(".modal-product__slider",{modules:[h,w,B],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:5e3}})}let d=1;async function S(){if(f()>d){v(),l();const t=await m(++d);g(),L(),E(t.artists)}else l();console.log(artists.artists)}function _(){s.mobileMenuClose.classList.remove("hidden"),s.mobileMenuOpen.classList.add("hidden"),s.mobileMenuList.classList.add("open"),s.mobileMenuClose.addEventListener("click",c),s.mobileMenuList.addEventListener("click",y),document.body.style.overflow="hidden"}function y(t){t.target.nodeName==="A"&&c()}function c(){document.body.style.overflow="",s.mobileMenuClose.classList.add("hidden"),s.mobileMenuOpen.classList.remove("hidden"),s.mobileMenuList.classList.remove("open"),s.mobileMenuClose.removeEventListener("click",c),s.mobileMenuList.removeEventListener("click",y)}s.mobileMenuOpen.addEventListener("click",_);async function A(){v();const t=await m();g(),$(t.artists),k(t.totalArtists/8),f()>1&&(L(),s.moreBtn.addEventListener("click",S));const i=await P();console.log(i.data),O(i.data)}A();
//# sourceMappingURL=index.js.map
