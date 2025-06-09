import{a as d,i as u,S,N as T,P,A as q}from"./assets/vendor-D3YsHSez.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();async function y({currentPage:e=1,name:a="",sortName:n="",genre:i=""}={}){try{const r="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:e,...a&&{name:a},...n&&{sortName:n},...i&&{genre:i}};return(await d.get(r,{params:c})).data}catch(t){return u.error({message:`${t}`,position:"topRight"}),null}}async function O(e="65ada227af9f6d155db46908"){try{const a="https://sound-wave.b.goit.study/api",n=`/artists/${e}`,i=a+n;return(await d.get(i)).data}catch(a){return u.error({message:`${a}`,position:"topRight"}),null}}async function C(e="65ada227af9f6d155db46908"){try{const a="https://sound-wave.b.goit.study/api",n=`/artists/${e}/albums`,i=a+n;return(await d.get(i)).data}catch(a){return u.error({message:`${a}`,position:"topRight"}),null}}async function R(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",i={limit:12};return(await d.get(n,{params:i})).data}catch(e){return u.error({message:`${e}`,position:"topRight"}),null}}let L=0;function j(e){L=e}function M(){return L}const s={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),modalLoader:document.querySelector(".modal-loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums")};function H(){s.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",k),window.addEventListener("click",$),s.closeModalBtn.addEventListener("click",m)}function m(){document.body.style.overflow="",s.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",k),window.removeEventListener("click",$)}function k(e){e.key==="Escape"&&m()}function $(e){e.target===s.modal&&m()}const l="/project-js-solo/assets/sprite-oGdn5a-q.svg";function w(e){return e.map(({_id:a,strArtist:n,strArtistThumb:i,strBiographyEN:t,genres:o})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${i}"
          alt="${n}"
        />
        <ul class="artists--genres">
        ${o.map(r=>`<li class="artists--genres__item"><p>${r}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${n}</h3>
        <p class="artists--descr">${t}</p>
        <button class="artist--btn" data-id="${a}">
          Learn More
          <svg class="hero-icon" >
            <use href="${l}#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function N(e){s.artistsList.innerHTML=w(e)}function U(e){s.artistsList.insertAdjacentHTML("beforeend",w(e))}function p(e){e.classList.add("visible")}function f(e){e.classList.remove("visible")}function _(){s.moreBtn.classList.add("visible")}function b(){s.moreBtn.classList.remove("visible")}function x(e){const a=e.map(({_id:t,name:o,rating:r,descr:c})=>`<div class="swiper-slide" data-id="${t}">


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

</div>`).join("");s.feedBack.innerHTML=a,new S(".modal-product__slider",{modules:[T,P,q],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){n(this.realIndex,this.slides.length),i(this)},slideChange(){n(this.realIndex,this.slides.length)}}});function n(t,o){const r=document.querySelectorAll(".swiper-pagination .bullet");r.forEach(c=>c.classList.remove("swiper-pagination-bullet-active")),t===0?r[0].classList.add("swiper-pagination-bullet-active"):t===o-1?r[2].classList.add("swiper-pagination-bullet-active"):r[1].classList.add("swiper-pagination-bullet-active")}function i(t){var o,r,c;(o=document.querySelector(".bullet.left"))==null||o.addEventListener("click",()=>{t.slideTo(0)}),(r=document.querySelector(".bullet.center"))==null||r.addEventListener("click",()=>{t.slideTo(Math.floor(t.slides.length/2))}),(c=document.querySelector(".bullet.right"))==null||c.addEventListener("click",()=>{t.slideTo(t.slides.length-1)})}}function I({intDiedYear:e,intFormedYear:a,intMembers:n,strGender:i,strArtist:t,strArtistThumb:o,strBiographyEN:r,strCountry:c},v){const B=a||e?`      ${a??"last"}-${e??"present"}`:"information missing",E=`
   <p class="modal-biography__title">${t}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${o}" alt="${t}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${B}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${i}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${c}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${r}</span></p>
        <ul class="modal-biography__genre-list">${v}</ul>
        </div></div>`;s.modalArtistBiography.innerHTML=E}function F(e){s.modalArtisTAlbums.innerHTML=e.map(a=>z(a)).join("")}function z(e){const a=e.tracks.map(i=>{const t=Math.floor(i.intDuration/6e4),o=Math.floor(i.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${i.strTrack}</span>
        <span class="track-time">${t}:${o}</span>
        <a class="track-link" href="${i.movie}">${i.movie?`<svg class="track-link-youtube">
            <use href="${l}#icon-youtube"></use>
          </svg>`:""}</a>
      </li>
    `}).join("");return`
    <li class="modal-album-item">
      <h3 class="modal-album-title">${e.strAlbum}</h3>
      <ul class="modal-track-list">
            <li class="modal-track-item">
        <p class="modal-track-name-title track-name">Track</p>
        <p class="modal-track-time-title track-time">Time</p>
        <p class="modal-track-link-title track-link">Link</p>
      </li>
            ${a}
      </ul>
    </li>
  `}let h=1;async function D(){if(M()>h){p(s.loader),b();const e=await y({currentPage:++h});f(s.loader),_(),U(e.artists)}else b()}async function G(e){if(e.target.className!=="artist--btn")return;s.modalArtisTAlbums.innerHTML="",s.modalArtistBiography.innerHTML="",H();const a=e.target.parentElement.children[1].innerHTML,n=e.target.dataset.id;p(s.modalLoader);const i=await O(n),t=await C(n);f(s.modalLoader),I(i,a),F(t.albumsList)}function K(){s.mobileMenuClose.classList.remove("hidden"),s.mobileMenuOpen.classList.add("hidden"),s.mobileMenuList.classList.add("open"),s.mobileMenuClose.addEventListener("click",g),s.mobileMenuList.addEventListener("click",A),document.body.style.overflow="hidden"}function A(e){e.target.nodeName==="A"&&g()}function g(){document.body.style.overflow="",s.mobileMenuClose.classList.add("hidden"),s.mobileMenuOpen.classList.remove("hidden"),s.mobileMenuList.classList.remove("open"),s.mobileMenuClose.removeEventListener("click",g),s.mobileMenuList.removeEventListener("click",A)}s.mobileMenuOpen.addEventListener("click",K);s.artistsList.addEventListener("click",G);async function J(){p(s.loader);const e=await y();f(s.loader),N(e.artists),j(e.totalArtists/8),M()>1&&(_(),s.moreBtn.addEventListener("click",D));const a=await R();x(a.data)}J();
//# sourceMappingURL=index.js.map
