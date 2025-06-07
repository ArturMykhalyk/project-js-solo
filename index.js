import{a as m,i as p,S as j,N as $,P as w,A as B}from"./assets/vendor-D3YsHSez.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g({currentPage:s=1,name:r="",sortName:a="",genre:n=""}={}){try{const o="https://sound-wave.b.goit.study/api"+"/artists",l={limit:8,page:s,...r&&{name:r},...a&&{sortName:a},...n&&{genre:n}};return(await m.get(o,{params:l})).data}catch(e){return p.error({message:`${e}`,position:"topRight"}),null}}async function k(){try{const a="https://sound-wave.b.goit.study/api"+"/feedbacks",n={limit:12};return(await m.get(a,{params:n})).data}catch(s){return p.error({message:`${s}`,position:"topRight"}),null}}let f=0;function E(s){f=s}function v(){return f}const i={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn")};function h(s){return s.map(({_id:r,strArtist:a,strArtistThumb:n,strBiographyEN:e,genres:t})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${n}"
          alt="${a}"
        />
        <ul class="artists--genres">
        ${t.map(o=>`<li class="artists--genres__item"><p>${o}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${a}</h3>
        <p class="artists--descr">${e}</p>
        <button class="artist--btn" data-id="${r}">
          Learn More
          <svg class="hero-icon" >
            <use href="/img/sprite.svg#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function P(s){i.artistsList.innerHTML=h(s)}function S(s){i.artistsList.insertAdjacentHTML("beforeend",h(s))}function b(){i.loader.classList.add("visible")}function y(){i.loader.classList.remove("visible")}function L(){i.moreBtn.classList.add("visible")}function d(){i.moreBtn.classList.remove("visible")}function q(s){const r=s.map(({_id:e,name:t,rating:o,descr:l})=>`<div class="swiper-slide" data-id="${e}">


 <div class="rating  value-${Math.round(o)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="/project-js-solo//img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/project-js-solo//img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/project-js-solo//img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/project-js-solo//img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/project-js-solo//img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/project-js-solo//img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/project-js-solo//img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/project-js-solo//img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/project-js-solo//img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/project-js-solo//img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${l}</p>
<p class='feed-back--name'>${t}</p>

</div>`).join("");i.feedBack.innerHTML=r,new j(".modal-product__slider",{modules:[$,w,B],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){a(this.realIndex,this.slides.length),n(this)},slideChange(){a(this.realIndex,this.slides.length)}}});function a(e,t){const o=document.querySelectorAll(".swiper-pagination .bullet");o.forEach(l=>l.classList.remove("swiper-pagination-bullet-active")),e===0?o[0].classList.add("swiper-pagination-bullet-active"):e===t-1?o[2].classList.add("swiper-pagination-bullet-active"):o[1].classList.add("swiper-pagination-bullet-active")}function n(e){var t,o,l;(t=document.querySelector(".bullet.left"))==null||t.addEventListener("click",()=>{e.slideTo(0)}),(o=document.querySelector(".bullet.center"))==null||o.addEventListener("click",()=>{e.slideTo(Math.floor(e.slides.length/2))}),(l=document.querySelector(".bullet.right"))==null||l.addEventListener("click",()=>{e.slideTo(e.slides.length-1)})}}let u=1;async function O(){if(v()>u){b(),d();const s=await g({currentPage:++u});y(),L(),S(s.artists)}else d()}function A(){i.mobileMenuClose.classList.remove("hidden"),i.mobileMenuOpen.classList.add("hidden"),i.mobileMenuList.classList.add("open"),i.mobileMenuClose.addEventListener("click",c),i.mobileMenuList.addEventListener("click",M),document.body.style.overflow="hidden"}function M(s){s.target.nodeName==="A"&&c()}function c(){document.body.style.overflow="",i.mobileMenuClose.classList.add("hidden"),i.mobileMenuOpen.classList.remove("hidden"),i.mobileMenuList.classList.remove("open"),i.mobileMenuClose.removeEventListener("click",c),i.mobileMenuList.removeEventListener("click",M)}i.mobileMenuOpen.addEventListener("click",A);async function C(){b();const s=await g();y(),P(s.artists),E(s.totalArtists/8),v()>1&&(L(),i.moreBtn.addEventListener("click",O));const r=await k();q(r.data)}C();
//# sourceMappingURL=index.js.map
