import{a as c,i as d,S as B,N as E,P as S,A as P}from"./assets/vendor-D3YsHSez.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function v({currentPage:t=1,name:s="",sortName:n="",genre:a=""}={}){try{const r="https://sound-wave.b.goit.study/api"+"/artists",l={limit:8,page:t,...s&&{name:s},...n&&{sortName:n},...a&&{genre:a}};return(await c.get(r,{params:l})).data}catch(e){return d.error({message:`${e}`,position:"topRight"}),null}}async function T(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}`,a=s+n;return(await c.get(a)).data}catch(s){return d.error({message:`${s}`,position:"topRight"}),null}}async function q(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}/albums`,a=s+n;return(await c.get(a)).data}catch(s){return d.error({message:`${s}`,position:"topRight"}),null}}async function O(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",a={limit:12};return(await c.get(n,{params:a})).data}catch(t){return d.error({message:`${t}`,position:"topRight"}),null}}let b=0;function C(t){b=t}function h(){return b}const i={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums")};function R(){i.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",y),window.addEventListener("click",L),i.closeModalBtn.addEventListener("click",u)}function u(){document.body.style.overflow="",i.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",y),window.removeEventListener("click",L)}function y(t){t.key==="Escape"&&u()}function L(t){t.target===i.modal&&u()}function M(t){return t.map(({_id:s,strArtist:n,strArtistThumb:a,strBiographyEN:e,genres:o})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${a}"
          alt="${n}"
        />
        <ul class="artists--genres">
        ${o.map(r=>`<li class="artists--genres__item"><p>${r}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${n}</h3>
        <p class="artists--descr">${e}</p>
        <button class="artist--btn" data-id="${s}">
          Learn More
          <svg class="hero-icon" >
            <use href="./img/sprite.svg#icon-bottom-arrow"></use>
          </svg>
        </button>
      </li>
  `).join("")}function N(t){i.artistsList.innerHTML=M(t)}function j(t){i.artistsList.insertAdjacentHTML("beforeend",M(t))}function k(){i.loader.classList.add("visible")}function w(){i.loader.classList.remove("visible")}function $(){i.moreBtn.classList.add("visible")}function g(){i.moreBtn.classList.remove("visible")}function x(t){const s=t.map(({_id:e,name:o,rating:r,descr:l})=>`<div class="swiper-slide" data-id="${e}">


 <div class="rating  value-${Math.round(r)}">
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
<p class='feed-back--name'>${o}</p>

</div>`).join("");i.feedBack.innerHTML=s,new B(".modal-product__slider",{modules:[E,S,P],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){n(this.realIndex,this.slides.length),a(this)},slideChange(){n(this.realIndex,this.slides.length)}}});function n(e,o){const r=document.querySelectorAll(".swiper-pagination .bullet");r.forEach(l=>l.classList.remove("swiper-pagination-bullet-active")),e===0?r[0].classList.add("swiper-pagination-bullet-active"):e===o-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}function a(e){var o,r,l;(o=document.querySelector(".bullet.left"))==null||o.addEventListener("click",()=>{e.slideTo(0)}),(r=document.querySelector(".bullet.center"))==null||r.addEventListener("click",()=>{e.slideTo(Math.floor(e.slides.length/2))}),(l=document.querySelector(".bullet.right"))==null||l.addEventListener("click",()=>{e.slideTo(e.slides.length-1)})}}function H({intDiedYear:t,intFormedYear:s,intMembers:n,strGender:a,strArtist:e,strArtistThumb:o,strBiographyEN:r,strCountry:l},p){const A=`
   <p class="modal-biography__title">${e}</p>
        <img class="modal-biography__photo" src="${o}" alt="${e}" />
        <p class="modal-biography___years">Years active</br> <span>${s}-${t??"present"}</span></p>
        <p class="modal-biography___sex">Sex</br> <span>${a}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${l}</span></p>
        <p class="modal-biography___biography">Biography</br> <span>${r}</span></p>
        <ul class="modal-biography__genre-list">${p}</ul>`;i.modalArtistBiography.innerHTML=A}function U(t){i.modalArtisTAlbums.innerHTML=t.map(s=>I(s)).join("")}function I(t){const s=t.tracks.map(a=>{const e=Math.floor(a.intDuration/6e4),o=Math.floor(a.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${a.strTrack}</span>
        <span class="track-time">${e}:${o}</span>
        <a class="track-link" href="${a.movie}">${a.movie?"🔊":""}</a>
      </li>
    `}).join("");return`
    <li class="modal-album-item">
      <h3 class="modal-album-title">${t.strAlbum}</h3>
      <ul class="modal-track-list">
            <li class="modal-track-item">
        <p class="modal-track-name-title track-name">Track</p>
        <p class="modal-track-time-title track-time">Time</p>
        <p class="modal-track-link-title track-link">Link</p>
      </li>
            ${s}
      </ul>
    </li>
  `}let f=1;async function F(){if(h()>f){k(),g();const t=await v({currentPage:++f});w(),$(),j(t.artists)}else g()}async function D(t){if(t.target.className!=="artist--btn")return;R();const s=t.target.parentElement.children[1].innerHTML,n=t.target.dataset.id,a=await T(n);H(a,s);const e=await q(n);U(e.albumsList),console.log("artist",a),console.log("album",e.albumsList)}function z(){i.mobileMenuClose.classList.remove("hidden"),i.mobileMenuOpen.classList.add("hidden"),i.mobileMenuList.classList.add("open"),i.mobileMenuClose.addEventListener("click",m),i.mobileMenuList.addEventListener("click",_),document.body.style.overflow="hidden"}function _(t){t.target.nodeName==="A"&&m()}function m(){document.body.style.overflow="",i.mobileMenuClose.classList.add("hidden"),i.mobileMenuOpen.classList.remove("hidden"),i.mobileMenuList.classList.remove("open"),i.mobileMenuClose.removeEventListener("click",m),i.mobileMenuList.removeEventListener("click",_)}i.mobileMenuOpen.addEventListener("click",z);i.artistsList.addEventListener("click",D);async function K(){k();const t=await v();w(),N(t.artists),C(t.totalArtists/8),h()>1&&($(),i.moreBtn.addEventListener("click",F));const s=await O();x(s.data)}K();
//# sourceMappingURL=index.js.map
