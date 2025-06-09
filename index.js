import{a as d,i as u,S as E,N as S,P,A as T}from"./assets/vendor-D3YsHSez.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function b({currentPage:t=1,name:s="",sortName:n="",genre:a=""}={}){try{const r="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:t,...s&&{name:s},...n&&{sortName:n},...a&&{genre:a}};return(await d.get(r,{params:c})).data}catch(e){return u.error({message:`${e}`,position:"topRight"}),null}}async function q(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}`,a=s+n;return(await d.get(a)).data}catch(s){return u.error({message:`${s}`,position:"topRight"}),null}}async function O(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}/albums`,a=s+n;return(await d.get(a)).data}catch(s){return u.error({message:`${s}`,position:"topRight"}),null}}async function C(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",a={limit:12};return(await d.get(n,{params:a})).data}catch(t){return u.error({message:`${t}`,position:"topRight"}),null}}let h=0;function R(t){h=t}function y(){return h}const i={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums")};function j(){i.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",L),window.addEventListener("click",k),i.closeModalBtn.addEventListener("click",m)}function m(){document.body.style.overflow="",i.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",L),window.removeEventListener("click",k)}function L(t){t.key==="Escape"&&m()}function k(t){t.target===i.modal&&m()}const l="/project-js-solo/assets/sprite-oGdn5a-q.svg";function M(t){return t.map(({_id:s,strArtist:n,strArtistThumb:a,strBiographyEN:e,genres:o})=>`<li class="artists--list__item">
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
            <use href="${l}#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function N(t){i.artistsList.innerHTML=M(t)}function U(t){i.artistsList.insertAdjacentHTML("beforeend",M(t))}function $(){i.loader.classList.add("visible")}function w(){i.loader.classList.remove("visible")}function _(){i.moreBtn.classList.add("visible")}function g(){i.moreBtn.classList.remove("visible")}function x(t){const s=t.map(({_id:e,name:o,rating:r,descr:c})=>`<div class="swiper-slide" data-id="${e}">


 <div class="rating  value-${Math.round(r)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${c}</p>
<p class='feed-back--name'>${o}</p>

</div>`).join("");i.feedBack.innerHTML=s,new E(".modal-product__slider",{modules:[S,P,T],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){n(this.realIndex,this.slides.length),a(this)},slideChange(){n(this.realIndex,this.slides.length)}}});function n(e,o){const r=document.querySelectorAll(".swiper-pagination .bullet");r.forEach(c=>c.classList.remove("swiper-pagination-bullet-active")),e===0?r[0].classList.add("swiper-pagination-bullet-active"):e===o-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}function a(e){var o,r,c;(o=document.querySelector(".bullet.left"))==null||o.addEventListener("click",()=>{e.slideTo(0)}),(r=document.querySelector(".bullet.center"))==null||r.addEventListener("click",()=>{e.slideTo(Math.floor(e.slides.length/2))}),(c=document.querySelector(".bullet.right"))==null||c.addEventListener("click",()=>{e.slideTo(e.slides.length-1)})}}function H({intDiedYear:t,intFormedYear:s,intMembers:n,strGender:a,strArtist:e,strArtistThumb:o,strBiographyEN:r,strCountry:c},f){const B=`
   <p class="modal-biography__title">${e}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${o}" alt="${e}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>${s}-${t??"present"}</span></p>
        <p class="modal-biography___sex">Sex</br> <span>${a}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${c}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${r}</span></p>
        <ul class="modal-biography__genre-list">${f}</ul>
        </div></div>`;i.modalArtistBiography.innerHTML=B}function I(t){i.modalArtisTAlbums.innerHTML=t.map(s=>F(s)).join("")}function F(t){const s=t.tracks.map(a=>{const e=Math.floor(a.intDuration/6e4),o=Math.floor(a.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${a.strTrack}</span>
        <span class="track-time">${e}:${o}</span>
        <a class="track-link" href="${a.movie}">${a.movie?`<svg class="track-link-youtube">
            <use href="${l}#icon-youtube"></use>
          </svg>`:""}</a>
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
  `}let v=1;async function D(){if(y()>v){$(),g();const t=await b({currentPage:++v});w(),_(),U(t.artists)}else g()}async function z(t){if(t.target.className!=="artist--btn")return;j();const s=t.target.parentElement.children[1].innerHTML,n=t.target.dataset.id,a=await q(n);H(a,s);const e=await O(n);I(e.albumsList),console.log("artist",a),console.log("album",e.albumsList)}function G(){i.mobileMenuClose.classList.remove("hidden"),i.mobileMenuOpen.classList.add("hidden"),i.mobileMenuList.classList.add("open"),i.mobileMenuClose.addEventListener("click",p),i.mobileMenuList.addEventListener("click",A),document.body.style.overflow="hidden"}function A(t){t.target.nodeName==="A"&&p()}function p(){document.body.style.overflow="",i.mobileMenuClose.classList.add("hidden"),i.mobileMenuOpen.classList.remove("hidden"),i.mobileMenuList.classList.remove("open"),i.mobileMenuClose.removeEventListener("click",p),i.mobileMenuList.removeEventListener("click",A)}i.mobileMenuOpen.addEventListener("click",G);i.artistsList.addEventListener("click",z);async function K(){$();const t=await b();w(),N(t.artists),R(t.totalArtists/8),y()>1&&(_(),i.moreBtn.addEventListener("click",D));const s=await C();x(s.data)}K();
//# sourceMappingURL=index.js.map
