import{a as m,i as p,S as w,N as B,P as k,A as E}from"./assets/vendor-D3YsHSez.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g({currentPage:s=1,name:n="",sortName:r="",genre:o=""}={}){try{const a="https://sound-wave.b.goit.study/api"+"/artists",l={limit:8,page:s,...n&&{name:n},...r&&{sortName:r},...o&&{genre:o}};return(await m.get(a,{params:l})).data}catch(e){return p.error({message:`${e}`,position:"topRight"}),null}}async function P(){try{const r="https://sound-wave.b.goit.study/api"+"/feedbacks",o={limit:12};return(await m.get(r,{params:o})).data}catch(s){return p.error({message:`${s}`,position:"topRight"}),null}}let v=0;function S(s){v=s}function f(){return v}const i={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn")};function h(s){return s.map(({_id:n,strArtist:r,strArtistThumb:o,strBiographyEN:e,genres:t})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${o}"
          alt="${r}"
        />
        <ul class="artists--genres">
        ${t.map(a=>`<li class="artists--genres__item"><p>${a}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${r}</h3>
        <p class="artists--descr">${e}</p>
        <button class="artist--btn" data-id="${n}">
          Learn More
          <svg class="hero-icon" >
            <use href="./img/sprite.svg#icon-bottom-arrow"></use>
          </svg>
        </button>
      </li>
  `).join("")}function $(s){i.artistsList.innerHTML=h(s)}function q(s){i.artistsList.insertAdjacentHTML("beforeend",h(s))}function b(){i.loader.classList.add("visible")}function y(){i.loader.classList.remove("visible")}function L(){i.moreBtn.classList.add("visible")}function d(){i.moreBtn.classList.remove("visible")}function O(s){const n=s.map(({_id:e,name:t,rating:a,descr:l})=>`<div class="swiper-slide" data-id="${e}">


 <div class="rating  value-${Math.round(a)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="/img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="/img/sprite.svg#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="/img/sprite.svg#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${l}</p>
<p class='feed-back--name'>${t}</p>

</div>`).join("");i.feedBack.innerHTML=n,new w(".modal-product__slider",{modules:[B,k,E],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){r(this.realIndex,this.slides.length),o(this)},slideChange(){r(this.realIndex,this.slides.length)}}});function r(e,t){const a=document.querySelectorAll(".swiper-pagination .bullet");a.forEach(l=>l.classList.remove("swiper-pagination-bullet-active")),e===0?a[0].classList.add("swiper-pagination-bullet-active"):e===t-1?a[2].classList.add("swiper-pagination-bullet-active"):a[1].classList.add("swiper-pagination-bullet-active")}function o(e){var t,a,l;(t=document.querySelector(".bullet.left"))==null||t.addEventListener("click",()=>{e.slideTo(0)}),(a=document.querySelector(".bullet.center"))==null||a.addEventListener("click",()=>{e.slideTo(Math.floor(e.slides.length/2))}),(l=document.querySelector(".bullet.right"))==null||l.addEventListener("click",()=>{e.slideTo(e.slides.length-1)})}}let u=1;async function A(){if(f()>u){b(),d();const s=await g({currentPage:++u});y(),L(),q(s.artists)}else d()}function C(){i.mobileMenuClose.classList.remove("hidden"),i.mobileMenuOpen.classList.add("hidden"),i.mobileMenuList.classList.add("open"),i.mobileMenuClose.addEventListener("click",c),i.mobileMenuList.addEventListener("click",M),document.body.style.overflow="hidden"}function M(s){s.target.nodeName==="A"&&c()}function c(){document.body.style.overflow="",i.mobileMenuClose.classList.add("hidden"),i.mobileMenuOpen.classList.remove("hidden"),i.mobileMenuList.classList.remove("open"),i.mobileMenuClose.removeEventListener("click",c),i.mobileMenuList.removeEventListener("click",M)}i.mobileMenuOpen.addEventListener("click",C);async function T(){b();const s=await g();y(),$(s.artists),S(s.totalArtists/8),f()>1&&(L(),i.moreBtn.addEventListener("click",A));const n=await P();O(n.data)}T();
//# sourceMappingURL=index.js.map
