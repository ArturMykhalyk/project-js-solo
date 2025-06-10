import{a as v,i as h,S as Y,N as K,P as J,A as Q,b as X}from"./assets/vendor-CLxGNKPO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();async function Z(){try{const o="https://sound-wave.b.goit.study/api"+"/genres";return(await v.get(o)).data}catch(t){return h.error({message:`${t}`,position:"topRight"}),null}}async function w({currentPage:t=1,name:s="",sortName:o="",genre:r=""}={}){try{const i="https://sound-wave.b.goit.study/api"+"/artists",l={limit:8,page:t,...s&&{name:s},...o&&{sortName:o},...r&&{genre:r}};return(await v.get(i,{params:l})).data}catch(n){return h.error({message:`${n}`,position:"topRight"}),null}}async function ee(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",o=`/artists/${t}`,r=s+o;return(await v.get(r)).data}catch(s){return h.error({message:`${s}`,position:"topRight"}),null}}async function te(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",o=`/artists/${t}/albums`,r=s+o;return(await v.get(r)).data}catch(s){return h.error({message:`${s}`,position:"topRight"}),null}}async function se(){try{const o="https://sound-wave.b.goit.study/api"+"/feedbacks",r={limit:12};return(await v.get(o,{params:r})).data}catch(t){return h.error({message:`${t}`,position:"topRight"}),null}}let F=0;function N(t){F=Math.ceil(t)}function b(){return F}const e={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),headerElem:document.querySelector(".header"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),modalLoader:document.querySelector(".modal-loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums"),artistsFilterBtn:document.querySelector(".artists-filters-btn"),customSortDrop:document.querySelector(".custom-sort-dropdown"),customSortDropBlock:document.querySelector(".dropdown-options-sort"),customGenreDropBlock:document.querySelector(".genre-dropdown-options-genre"),customSortDropSelected:document.querySelector(".dropdown-selected-sort"),customSortDropSelectedText:document.querySelector(".dropdown-selected-sort-text"),customGenreDropSelected:document.querySelector(".genre-dropdown-title"),customGenreDropSelectedText:document.querySelector(".genre-dropdown-title-text"),searchInput:document.querySelector(".artists-filters-search-box input"),resetFilter:document.querySelector(".artists-filters-btn___reset"),notFoundFilter:document.querySelector(".filter-not-found"),notFoundBtnReset:document.querySelector(".not-found-btn-reset"),searchIconBtn:document.querySelector(".search-icon"),paginationContainer:document.getElementById("tui-pagination-container"),scrollBtn:document.getElementById("scrollToTopBtn")};function ne(){e.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",R),window.addEventListener("click",O),e.closeModalBtn.addEventListener("click",M)}function M(){document.body.style.overflow="",e.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",R),window.removeEventListener("click",O)}function R(t){t.key==="Escape"&&M()}function O(t){t.target===e.modal&&M()}const d="/project-js-solo/assets/sprite-8Fw0A7zS.svg";function H(t){return t.map(({_id:s,strArtist:o,strArtistThumb:r,strBiographyEN:n,genres:a})=>`<li class="artists--list__item">
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
  `).join("")}function j(t){e.artistsList.innerHTML=H(t)}function oe(t){e.artistsList.insertAdjacentHTML("beforeend",H(t))}function L(t){t.classList.add("visible")}function y(t){t.classList.remove("visible")}function E(){e.moreBtn.classList.add("visible")}function B(){e.moreBtn.classList.remove("visible")}function re(t){const s=t.map(({_id:n,name:a,rating:i,descr:l})=>`<div class="swiper-slide" data-id="${n}">


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

</div>`).join("");e.feedBack.innerHTML=s,new Y(".modal-product__slider",{modules:[K,J,Q],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){o(this.realIndex,this.slides.length),r(this)},slideChange(){o(this.realIndex,this.slides.length)}}});function o(n,a){const i=document.querySelectorAll(".swiper-pagination .bullet");i.forEach(l=>l.classList.remove("swiper-pagination-bullet-active")),n===0?i[0].classList.add("swiper-pagination-bullet-active"):n===a-1?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function r(n){var a,i,l;(a=document.querySelector(".bullet.left"))==null||a.addEventListener("click",()=>{n.slideTo(0)}),(i=document.querySelector(".bullet.center"))==null||i.addEventListener("click",()=>{n.slideTo(Math.floor(n.slides.length/2))}),(l=document.querySelector(".bullet.right"))==null||l.addEventListener("click",()=>{n.slideTo(n.slides.length-1)})}}function ae({intDiedYear:t,intFormedYear:s,intMembers:o,strGender:r,strArtist:n,strArtistThumb:a,strBiographyEN:i,strCountry:l},g){const c=s||t?`      ${s??"last"}-${t??"present"}`:"information missing",f=`
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
        </div></div>`;e.modalArtistBiography.innerHTML=f}function ie(t){e.modalArtisTAlbums.innerHTML=t.map(s=>ce(s)).join("")}function ce(t){const s=t.tracks.map(r=>{const n=Math.floor(r.intDuration/6e4),a=Math.floor(r.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${r.strTrack}</span>
        <span class="track-time">${n}:${a}</span>
        <a class="track-link" href="${r.movie}">${r.movie?`<svg class="track-link-youtube">
            <use href="${d}#icon-youtube"></use>
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
  `}function le(t){const s=t.map(o=>`  <li data-value="${o.genre.toLowerCase()}">${o.genre}</li>`).join("");e.customGenreDropBlock.innerHTML=s}const $={totalItems:b(),itemsPerPage:8,visiblePages:5,centerAlign:!0,usageStatistics:!1,template:{page:'<a href="#" class="custom-page" >{{page}}</a>',currentPage:'<strong class="custom-page active">{{page}}</strong>',moveButton:`<a href="#" class="custom-move {{type}}">   <svg class="custom-move-icon">
            <use href="${d}#icon-bottom-arrow"></use>
          </svg></a>`,disabledMoveButton:'<span class="custom-disabled {{type}}">×</span>',moreButton:'<a href="#" class="custom-more">…</a>'}};window.innerWidth<1440&&($.visiblePages=3);window.innerWidth<768&&($.visiblePages=1);function T(){window.scrollTo({top:0,behavior:"smooth"})}const u={currentPage:1,name:"",sortName:"",genre:"",deleteData(){this.name="",this.sortName="",this.genre="",this.currentPage=1}},m=new X(e.paginationContainer,$);m.on("beforeMove",U);m.on("afterMove",k);k();function U(t){const s=t.page;u.currentPage=s-1,e.artistsList.innerHTML="";const o=e.headerElem.offsetHeight,n=e.artistsList.getBoundingClientRect().top+window.pageYOffset-o;window.scrollTo({top:n,behavior:"smooth"}),P()}async function P(){L(e.loader),B(),u.currentPage++,m.off("beforeMove"),m.movePageTo(u.currentPage),m.on("beforeMove",U);const t=await w(u);y(e.loader),E(),oe(t.artists),b()>u.currentPage||B()}async function de(t){if(t.target.className!=="artist--btn")return;e.modalArtisTAlbums.innerHTML="",e.modalArtistBiography.innerHTML="",ne();const s=t.target.parentElement.children[1].innerHTML,o=t.target.dataset.id;L(e.modalLoader);const r=await ee(o),n=await te(o);y(e.modalLoader),ae(r,s),ie(n.albumsList)}function q(t){const s=e.customSortDropBlock.classList.contains("open");p(),s||(e.customSortDropBlock.classList.add("open"),e.customSortDropSelected.classList.add("opensort"),e.customSortDropSelected.children[1].classList.add("rotete-icon"))}function _(t){const s=e.customGenreDropBlock.classList.contains("open");p(),s||(e.customGenreDropBlock.classList.add("open"),e.customGenreDropSelected.classList.add("opensort"),e.customGenreDropSelected.children[1].classList.add("rotete-icon"))}function ue(t){t.target.nextElementSibling.style.display==="flex"?(t.target.nextElementSibling.style.display="none",e.customSortDropSelected.removeEventListener("click",q),e.customGenreDropSelected.removeEventListener("click",_),e.searchInput.removeEventListener("focus",p),e.searchInput.removeEventListener("click",p),e.customSortDropBlock.removeEventListener("click",I),e.customGenreDropBlock.removeEventListener("click",G),document.removeEventListener("click",x)):(t.target.nextElementSibling.style.display="flex",e.customSortDropSelected.addEventListener("click",q),e.customGenreDropSelected.addEventListener("click",_),e.searchInput.addEventListener("focus",p),e.searchInput.addEventListener("focus",()=>{e.searchInput.addEventListener("keydown",W),e.searchIconBtn.addEventListener("click",V)}),e.searchInput.addEventListener("remove",C),e.searchInput.addEventListener("click",p),e.searchInput.addEventListener("change",C),e.customSortDropBlock.addEventListener("click",I),e.customGenreDropBlock.addEventListener("click",G),document.addEventListener("click",x))}function x(t){!(e.customSortDrop.contains(t.target)||e.customGenreDropBlock.contains(t.target)||e.customSortDropSelected.contains(t.target)||e.customGenreDropSelected.contains(t.target))&&t.target!==e.searchInput&&p()}function p(){e.customSortDropBlock.classList.remove("open"),e.customSortDropSelected.classList.remove("opensort"),e.customSortDropSelected.children[1].classList.remove("rotete-icon"),e.customGenreDropBlock.classList.remove("open"),e.customGenreDropSelected.classList.remove("opensort"),e.customGenreDropSelected.children[1].classList.remove("rotete-icon")}function V(t){t.target.blur()}function W(t){t.key==="Enter"&&t.target.blur()}function C(t){u.name=t.target.value.trim().toLowerCase(),e.searchInput.removeEventListener("keydown",W),e.searchIconBtn.removeEventListener("click",V),u.currentPage=1,S()}function I(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),o=t.target.textContent;u.sortName=s==="default"?"":s,e.customSortDropSelectedText.textContent=o==="Default"?"Sorting: default":`Sorting: ${o}`,p(),u.currentPage=1,S()}}function G(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),o=t.target.textContent;u.genre=s,e.customGenreDropSelectedText.textContent=`Genre: ${o}`,p(),u.currentPage=1,S()}}function D(){e.notFoundBtnReset.removeEventListener("click",D),e.customSortDropSelectedText.textContent="Sorting",e.customGenreDropSelectedText.textContent="Genre",e.searchInput.value="",u.deleteData(),S()}async function S(){e.paginationContainer.style.display="flex",B(),e.notFoundFilter.classList.remove("visible"),e.artistsList.innerHTML="",L(e.loader);const t=await w(u);t.totalArtists||(e.paginationContainer.style.display="none",e.notFoundFilter.classList.add("visible"),e.notFoundBtnReset.addEventListener("click",D)),m.reset(t.totalArtists),N(t.totalArtists/8),k(),y(e.loader),j(t.artists),b()>1&&(E(),e.moreBtn.addEventListener("click",P))}function k(){me();const t=e.paginationContainer;if(!t)return;const s=t.querySelector(".last-page-btn");s&&s.remove();const o=b(),r=m.getCurrentPage();if([...t.querySelectorAll(".custom-page")].map(c=>Number(c.textContent)).filter(c=>!isNaN(c)).includes(o))return;const i=`
    <a href="#" class="custom-page last-page-btn${r===o?" active":""}" data-page="${o}">
      ${o}
    </a>
  `,l=t.querySelectorAll(".custom-more"),g=l[l.length-1];if(g){g.insertAdjacentHTML("afterend",i);const c=t.querySelector(".last-page-btn");c&&c.addEventListener("click",f=>{f.preventDefault(),m.movePageTo(o)})}}function me(){const t=e.paginationContainer;if(!t)return;const s=t.querySelector(".first-page-btn");s&&s.remove();const o=m.getCurrentPage(),r=1;if([...t.querySelectorAll(".custom-page")].map(c=>Number(c.textContent)).filter(c=>!isNaN(c)).includes(r))return;const i=`
    <a href="#" class="custom-page first-page-btn${o===r?" active":""}" data-page="1">1</a>
  `,g=t.querySelectorAll(".custom-more")[0];if(g){g.insertAdjacentHTML("beforebegin",i);const c=t.querySelector(".first-page-btn");c&&c.addEventListener("click",f=>{f.preventDefault(),m.movePageTo(1)})}}function pe(){e.mobileMenuClose.classList.remove("hidden"),e.mobileMenuOpen.classList.add("hidden"),e.mobileMenuList.classList.add("open"),e.mobileMenuClose.addEventListener("click",A),e.mobileMenuList.addEventListener("click",z),document.body.style.overflow="hidden"}function z(t){t.target.nodeName==="A"&&A()}function A(){document.body.style.overflow="",e.mobileMenuClose.classList.add("hidden"),e.mobileMenuOpen.classList.remove("hidden"),e.mobileMenuList.classList.remove("open"),e.mobileMenuClose.removeEventListener("click",A),e.mobileMenuList.removeEventListener("click",z)}e.mobileMenuOpen.addEventListener("click",pe);e.artistsList.addEventListener("click",de);async function ge(){document.addEventListener("DOMContentLoaded",()=>{window.innerWidth>=1440&&e.artistsFilterBtn.dispatchEvent(new Event("click"))});const t=await Z();le(t),L(e.loader);const s=await w();y(e.loader),j(s.artists),m.reset(s.totalArtists),N(s.totalArtists/8),k(),b()>1&&(E(),e.moreBtn.addEventListener("click",P));const o=await se();re(o.data)}ge();e.artistsFilterBtn.addEventListener("click",ue);e.resetFilter.addEventListener("click",D);window.addEventListener("scroll",()=>{window.scrollY>300?(e.scrollBtn.classList.add("visible"),e.scrollBtn.addEventListener("click",T)):(e.scrollBtn.classList.remove("visible"),e.scrollBtn.removeEventListener("click",T))});
//# sourceMappingURL=index.js.map
