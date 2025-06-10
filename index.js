import{a as v,i as h,S as z,N as K,P as Y,A as J,b as Q}from"./assets/vendor-CLxGNKPO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();async function X(){try{const o="https://sound-wave.b.goit.study/api"+"/genres";return(await v.get(o)).data}catch(e){return h.error({message:`${e}`,position:"topRight"}),null}}async function w({currentPage:e=1,name:s="",sortName:o="",genre:r=""}={}){try{const i="https://sound-wave.b.goit.study/api"+"/artists",l={limit:8,page:e,...s&&{name:s},...o&&{sortName:o},...r&&{genre:r}};return(await v.get(i,{params:l})).data}catch(n){return h.error({message:`${n}`,position:"topRight"}),null}}async function Z(e="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",o=`/artists/${e}`,r=s+o;return(await v.get(r)).data}catch(s){return h.error({message:`${s}`,position:"topRight"}),null}}async function ee(e="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",o=`/artists/${e}/albums`,r=s+o;return(await v.get(r)).data}catch(s){return h.error({message:`${s}`,position:"topRight"}),null}}async function te(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",r={limit:12};return(await v.get(o,{params:r})).data}catch(e){return h.error({message:`${e}`,position:"topRight"}),null}}let G=0;function F(e){G=Math.ceil(e)}function b(){return G}const t={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),headerElem:document.querySelector(".header"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),modalLoader:document.querySelector(".modal-loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums"),artistsFilterBtn:document.querySelector(".artists-filters-btn"),customSortDrop:document.querySelector(".custom-sort-dropdown"),customSortDropBlock:document.querySelector(".dropdown-options-sort"),customGenreDropBlock:document.querySelector(".genre-dropdown-options-genre"),customSortDropSelected:document.querySelector(".dropdown-selected-sort"),customSortDropSelectedText:document.querySelector(".dropdown-selected-sort-text"),customGenreDropSelected:document.querySelector(".genre-dropdown-title"),customGenreDropSelectedText:document.querySelector(".genre-dropdown-title-text"),searchInput:document.querySelector(".artists-filters-search-box input"),resetFilter:document.querySelector(".artists-filters-btn___reset"),notFoundFilter:document.querySelector(".filter-not-found"),notFoundBtnReset:document.querySelector(".not-found-btn-reset"),searchIconBtn:document.querySelector(".search-icon"),paginationContainer:document.getElementById("tui-pagination-container")};function se(){t.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",N),window.addEventListener("click",R),t.closeModalBtn.addEventListener("click",B)}function B(){document.body.style.overflow="",t.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",N),window.removeEventListener("click",R)}function N(e){e.key==="Escape"&&B()}function R(e){e.target===t.modal&&B()}const d="/project-js-solo/assets/sprite-8Fw0A7zS.svg";function O(e){return e.map(({_id:s,strArtist:o,strArtistThumb:r,strBiographyEN:n,genres:a})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${r}"
          alt="${o}"
        />
        <ul class="artists--genres">
        ${a.map(i=>`<li class="artists--genres__item"><p>${i}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${o}</h3>
        <p class="artists--descr">${n}</p>
        <button class="artist--btn" data-id="${s}">
          Learn More
          <svg class="hero-icon" >
            <use href="${d}#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function H(e){t.artistsList.innerHTML=O(e)}function ne(e){t.artistsList.insertAdjacentHTML("beforeend",O(e))}function L(e){e.classList.add("visible")}function y(e){e.classList.remove("visible")}function E(){t.moreBtn.classList.add("visible")}function M(){t.moreBtn.classList.remove("visible")}function oe(e){const s=e.map(({_id:n,name:a,rating:i,descr:l})=>`<div class="swiper-slide" data-id="${n}">


 <div class="rating  value-${Math.round(i)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${d}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${d}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${d}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${d}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${d}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${d}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${d}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${d}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${d}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${d}#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${l}</p>
<p class='feed-back--name'>${a}</p>

</div>`).join("");t.feedBack.innerHTML=s,new z(".modal-product__slider",{modules:[K,Y,J],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){o(this.realIndex,this.slides.length),r(this)},slideChange(){o(this.realIndex,this.slides.length)}}});function o(n,a){const i=document.querySelectorAll(".swiper-pagination .bullet");i.forEach(l=>l.classList.remove("swiper-pagination-bullet-active")),n===0?i[0].classList.add("swiper-pagination-bullet-active"):n===a-1?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function r(n){var a,i,l;(a=document.querySelector(".bullet.left"))==null||a.addEventListener("click",()=>{n.slideTo(0)}),(i=document.querySelector(".bullet.center"))==null||i.addEventListener("click",()=>{n.slideTo(Math.floor(n.slides.length/2))}),(l=document.querySelector(".bullet.right"))==null||l.addEventListener("click",()=>{n.slideTo(n.slides.length-1)})}}function re({intDiedYear:e,intFormedYear:s,intMembers:o,strGender:r,strArtist:n,strArtistThumb:a,strBiographyEN:i,strCountry:l},g){const c=s||e?`      ${s??"last"}-${e??"present"}`:"information missing",f=`
   <p class="modal-biography__title">${n}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${a}" alt="${n}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${c}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${r}</span></p>
        <p class="modal-biography___members">Members</br> <span>${o}</span></p>
        <p class="modal-biography___country">Country</br> <span>${l}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${i}</span></p>
        <ul class="modal-biography__genre-list">${g}</ul>
        </div></div>`;t.modalArtistBiography.innerHTML=f}function ae(e){t.modalArtisTAlbums.innerHTML=e.map(s=>ie(s)).join("")}function ie(e){const s=e.tracks.map(r=>{const n=Math.floor(r.intDuration/6e4),a=Math.floor(r.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${r.strTrack}</span>
        <span class="track-time">${n}:${a}</span>
        <a class="track-link" href="${r.movie}">${r.movie?`<svg class="track-link-youtube">
            <use href="${d}#icon-youtube"></use>
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
            ${s}
      </ul>
    </li>
  `}function ce(e){const s=e.map(o=>`  <li data-value="${o.genre.toLowerCase()}">${o.genre}</li>`).join("");t.customGenreDropBlock.innerHTML=s}const $={totalItems:b(),itemsPerPage:8,visiblePages:5,centerAlign:!0,usageStatistics:!1,template:{page:'<a href="#" class="custom-page" >{{page}}</a>',currentPage:'<strong class="custom-page active">{{page}}</strong>',moveButton:`<a href="#" class="custom-move {{type}}">   <svg class="custom-move-icon">
            <use href="${d}#icon-bottom-arrow"></use>
          </svg></a>`,disabledMoveButton:'<span class="custom-disabled {{type}}">×</span>',moreButton:'<a href="#" class="custom-more">…</a>'}};window.innerWidth<1440&&($.visiblePages=3);window.innerWidth<768&&($.visiblePages=1);const u={currentPage:1,name:"",sortName:"",genre:"",deleteData(){this.name="",this.sortName="",this.genre="",this.currentPage=1}},m=new Q(t.paginationContainer,$);m.on("beforeMove",j);m.on("afterMove",k);k();function j(e){const s=e.page;u.currentPage=s-1,t.artistsList.innerHTML="";const o=t.headerElem.offsetHeight,n=t.artistsList.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:n,behavior:"smooth"}),P()}async function P(){L(t.loader),M(),u.currentPage++,m.off("beforeMove"),m.movePageTo(u.currentPage),m.on("beforeMove",j);const e=await w(u);y(t.loader),E(),ne(e.artists),b()>u.currentPage||M()}async function le(e){if(e.target.className!=="artist--btn")return;t.modalArtisTAlbums.innerHTML="",t.modalArtistBiography.innerHTML="",se();const s=e.target.parentElement.children[1].innerHTML,o=e.target.dataset.id;L(t.modalLoader);const r=await Z(o),n=await ee(o);y(t.modalLoader),re(r,s),ae(n.albumsList)}function q(e){const s=t.customSortDropBlock.classList.contains("open");p(),s||(t.customSortDropBlock.classList.add("open"),t.customSortDropSelected.classList.add("opensort"),t.customSortDropSelected.children[1].classList.add("rotete-icon"))}function T(e){const s=t.customGenreDropBlock.classList.contains("open");p(),s||(t.customGenreDropBlock.classList.add("open"),t.customGenreDropSelected.classList.add("opensort"),t.customGenreDropSelected.children[1].classList.add("rotete-icon"))}function de(e){e.target.nextElementSibling.style.display==="flex"?(e.target.nextElementSibling.style.display="none",t.customSortDropSelected.removeEventListener("click",q),t.customGenreDropSelected.removeEventListener("click",T),t.searchInput.removeEventListener("focus",p),t.searchInput.removeEventListener("click",p),t.customSortDropBlock.removeEventListener("click",C),t.customGenreDropBlock.removeEventListener("click",I),document.removeEventListener("click",_)):(e.target.nextElementSibling.style.display="flex",t.customSortDropSelected.addEventListener("click",q),t.customGenreDropSelected.addEventListener("click",T),t.searchInput.addEventListener("focus",p),t.searchInput.addEventListener("focus",()=>{t.searchInput.addEventListener("keydown",V),t.searchIconBtn.addEventListener("click",U)}),t.searchInput.addEventListener("remove",x),t.searchInput.addEventListener("click",p),t.searchInput.addEventListener("change",x),t.customSortDropBlock.addEventListener("click",C),t.customGenreDropBlock.addEventListener("click",I),document.addEventListener("click",_))}function _(e){!(t.customSortDrop.contains(e.target)||t.customGenreDropBlock.contains(e.target)||t.customSortDropSelected.contains(e.target)||t.customGenreDropSelected.contains(e.target))&&e.target!==t.searchInput&&p()}function p(){t.customSortDropBlock.classList.remove("open"),t.customSortDropSelected.classList.remove("opensort"),t.customSortDropSelected.children[1].classList.remove("rotete-icon"),t.customGenreDropBlock.classList.remove("open"),t.customGenreDropSelected.classList.remove("opensort"),t.customGenreDropSelected.children[1].classList.remove("rotete-icon")}function U(e){e.target.blur()}function V(e){e.key==="Enter"&&e.target.blur()}function x(e){u.name=e.target.value.trim().toLowerCase(),t.searchInput.removeEventListener("keydown",V),t.searchIconBtn.removeEventListener("click",U),u.currentPage=1,S()}function C(e){if(e.target.tagName==="LI"){const s=e.target.getAttribute("data-value"),o=e.target.textContent;u.sortName=s==="default"?"":s,t.customSortDropSelectedText.textContent=o==="Default"?"Sorting: default":`Sorting: ${o}`,p(),u.currentPage=1,S()}}function I(e){if(e.target.tagName==="LI"){const s=e.target.getAttribute("data-value"),o=e.target.textContent;u.genre=s,t.customGenreDropSelectedText.textContent=`Genre: ${o}`,p(),u.currentPage=1,S()}}function D(){t.notFoundBtnReset.removeEventListener("click",D),t.customSortDropSelectedText.textContent="Sorting",t.customGenreDropSelectedText.textContent="Genre",t.searchInput.value="",u.deleteData(),S()}async function S(){t.paginationContainer.style.display="flex",M(),t.notFoundFilter.classList.remove("visible"),t.artistsList.innerHTML="",L(t.loader);const e=await w(u);e.totalArtists||(t.paginationContainer.style.display="none",t.notFoundFilter.classList.add("visible"),t.notFoundBtnReset.addEventListener("click",D)),m.reset(e.totalArtists),F(e.totalArtists/8),k(),y(t.loader),H(e.artists),b()>1&&(E(),t.moreBtn.addEventListener("click",P))}function k(){ue();const e=t.paginationContainer;if(!e)return;const s=e.querySelector(".last-page-btn");s&&s.remove();const o=b(),r=m.getCurrentPage();if([...e.querySelectorAll(".custom-page")].map(c=>Number(c.textContent)).filter(c=>!isNaN(c)).includes(o))return;const i=`
    <a href="#" class="custom-page last-page-btn${r===o?" active":""}" data-page="${o}">
      ${o}
    </a>
  `,l=e.querySelectorAll(".custom-more"),g=l[l.length-1];if(g){g.insertAdjacentHTML("afterend",i);const c=e.querySelector(".last-page-btn");c&&c.addEventListener("click",f=>{f.preventDefault(),m.movePageTo(o)})}}function ue(){const e=t.paginationContainer;if(!e)return;const s=e.querySelector(".first-page-btn");s&&s.remove();const o=m.getCurrentPage(),r=1;if([...e.querySelectorAll(".custom-page")].map(c=>Number(c.textContent)).filter(c=>!isNaN(c)).includes(r))return;const i=`
    <a href="#" class="custom-page first-page-btn${o===r?" active":""}" data-page="1">1</a>
  `,g=e.querySelectorAll(".custom-more")[0];if(g){g.insertAdjacentHTML("beforebegin",i);const c=e.querySelector(".first-page-btn");c&&c.addEventListener("click",f=>{f.preventDefault(),m.movePageTo(1)})}}function me(){t.mobileMenuClose.classList.remove("hidden"),t.mobileMenuOpen.classList.add("hidden"),t.mobileMenuList.classList.add("open"),t.mobileMenuClose.addEventListener("click",A),t.mobileMenuList.addEventListener("click",W),document.body.style.overflow="hidden"}function W(e){e.target.nodeName==="A"&&A()}function A(){document.body.style.overflow="",t.mobileMenuClose.classList.add("hidden"),t.mobileMenuOpen.classList.remove("hidden"),t.mobileMenuList.classList.remove("open"),t.mobileMenuClose.removeEventListener("click",A),t.mobileMenuList.removeEventListener("click",W)}t.mobileMenuOpen.addEventListener("click",me);t.artistsList.addEventListener("click",le);async function pe(){document.addEventListener("DOMContentLoaded",()=>{window.innerWidth>=1440&&t.artistsFilterBtn.dispatchEvent(new Event("click"))});const e=await X();ce(e),L(t.loader);const s=await w();y(t.loader),H(s.artists),m.reset(s.totalArtists),F(s.totalArtists/8),k(),b()>1&&(E(),t.moreBtn.addEventListener("click",P));const o=await te();oe(o.data)}pe();t.artistsFilterBtn.addEventListener("click",de);t.resetFilter.addEventListener("click",D);
//# sourceMappingURL=index.js.map
