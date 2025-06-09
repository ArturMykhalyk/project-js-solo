import{a as m,i as p,S as j,N as U,P as V,A as z}from"./assets/vendor-D3YsHSez.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();async function K(){try{const n="https://sound-wave.b.goit.study/api"+"/genres";return(await m.get(n)).data}catch(t){return p.error({message:`${t}`,position:"topRight"}),null}}async function L({currentPage:t=1,name:s="",sortName:n="",genre:r=""}={}){try{const i="https://sound-wave.b.goit.study/api"+"/artists",d={limit:8,page:t,...s&&{name:s},...n&&{sortName:n},...r&&{genre:r}};return(await m.get(i,{params:d})).data}catch(o){return p.error({message:`${o}`,position:"topRight"}),null}}async function J(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}`,r=s+n;return(await m.get(r)).data}catch(s){return p.error({message:`${s}`,position:"topRight"}),null}}async function Q(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}/albums`,r=s+n;return(await m.get(r)).data}catch(s){return p.error({message:`${s}`,position:"topRight"}),null}}async function W(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",r={limit:12};return(await m.get(n,{params:r})).data}catch(t){return p.error({message:`${t}`,position:"topRight"}),null}}let q=0;function T(t){q=t}function y(){return q}const e={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),modalLoader:document.querySelector(".modal-loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal__close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums"),artistsFilterBtn:document.querySelector(".artists-filters-btn"),customSortDrop:document.querySelector(".custom-sort-dropdown"),customSortDropBlock:document.querySelector(".dropdown-options-sort"),customGenreDropBlock:document.querySelector(".genre-dropdown-options-genre"),customSortDropSelected:document.querySelector(".dropdown-selected-sort"),customSortDropSelectedText:document.querySelector(".dropdown-selected-sort-text"),customGenreDropSelected:document.querySelector(".genre-dropdown-title"),customGenreDropSelectedText:document.querySelector(".genre-dropdown-title-text"),searchInput:document.querySelector(".artists-filters-search-box input"),resetFilter:document.querySelector(".artists-filters-btn___reset"),notFoundFilter:document.querySelector(".filter-not-found"),notFoundBtnReset:document.querySelector(".not-found-btn-reset"),searchIconBtn:document.querySelector(".search-icon")};function X(){e.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",document.addEventListener("keydown",I),window.addEventListener("click",x),e.closeModalBtn.addEventListener("click",b)}function b(){document.body.style.overflow="",e.modal.classList.remove("modal--is-open"),document.removeEventListener("keydown",I),window.removeEventListener("click",x)}function I(t){t.key==="Escape"&&b()}function x(t){t.target===e.modal&&b()}const c="/project-js-solo/assets/sprite-8Fw0A7zS.svg";function P(t){return t.map(({_id:s,strArtist:n,strArtistThumb:r,strBiographyEN:o,genres:a})=>`<li class="artists--list__item">
        <img
          class="artists--photo"
          src="${r}"
          alt="${n}"
        />
        <ul class="artists--genres">
        ${a.map(i=>`<li class="artists--genres__item"><p>${i}</p></li>`).join("")}
        </ul>
        <h3 class="artists--name">${n}</h3>
        <p class="artists--descr">${o}</p>
        <button class="artist--btn" data-id="${s}">
          Learn More
          <svg class="hero-icon" >
            <use href="${c}#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function G(t){e.artistsList.innerHTML=P(t)}function Y(t){e.artistsList.insertAdjacentHTML("beforeend",P(t))}function g(t){t.classList.add("visible")}function v(t){t.classList.remove("visible")}function k(){e.moreBtn.classList.add("visible")}function h(){e.moreBtn.classList.remove("visible")}function Z(t){const s=t.map(({_id:o,name:a,rating:i,descr:d})=>`<div class="swiper-slide" data-id="${o}">


 <div class="rating  value-${Math.round(i)}">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${c}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${c}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${c}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${c}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${c}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${c}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${c}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${c}#icon-star-full"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${c}#icon-star-empty"></use>
          </svg>
          <svg class="star-filled">
            <use href="${c}#icon-star-full"></use>
          </svg>
        </div>
      </div>
    </div>
<p class='feed-back--descr'>${d}</p>
<p class='feed-back--name'>${a}</p>

</div>`).join("");e.feedBack.innerHTML=s,new j(".modal-product__slider",{modules:[U,V,z],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){n(this.realIndex,this.slides.length),r(this)},slideChange(){n(this.realIndex,this.slides.length)}}});function n(o,a){const i=document.querySelectorAll(".swiper-pagination .bullet");i.forEach(d=>d.classList.remove("swiper-pagination-bullet-active")),o===0?i[0].classList.add("swiper-pagination-bullet-active"):o===a-1?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function r(o){var a,i,d;(a=document.querySelector(".bullet.left"))==null||a.addEventListener("click",()=>{o.slideTo(0)}),(i=document.querySelector(".bullet.center"))==null||i.addEventListener("click",()=>{o.slideTo(Math.floor(o.slides.length/2))}),(d=document.querySelector(".bullet.right"))==null||d.addEventListener("click",()=>{o.slideTo(o.slides.length-1)})}}function ee({intDiedYear:t,intFormedYear:s,intMembers:n,strGender:r,strArtist:o,strArtistThumb:a,strBiographyEN:i,strCountry:d},M){const O=s||t?`      ${s??"last"}-${t??"present"}`:"information missing",H=`
   <p class="modal-biography__title">${o}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${a}" alt="${o}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${O}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${r}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${d}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${i}</span></p>
        <ul class="modal-biography__genre-list">${M}</ul>
        </div></div>`;e.modalArtistBiography.innerHTML=H}function te(t){e.modalArtisTAlbums.innerHTML=t.map(s=>se(s)).join("")}function se(t){const s=t.tracks.map(r=>{const o=Math.floor(r.intDuration/6e4),a=Math.floor(r.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${r.strTrack}</span>
        <span class="track-time">${o}:${a}</span>
        <a class="track-link" href="${r.movie}">${r.movie?`<svg class="track-link-youtube">
            <use href="${c}#icon-youtube"></use>
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
  `}function oe(t){const s=t.map(n=>`  <li data-value="${n.genre.toLowerCase()}">${n.genre}</li>`).join("");e.customGenreDropBlock.innerHTML=s}const l={currentPage:1,name:"",sortName:"",genre:"",deleteData(){this.name="",this.sortName="",this.genre="",this.currentPage=1}};async function F(){g(e.loader),h(),l.currentPage++;const t=await L(l);console.log(t),v(e.loader),k(),Y(t.artists),y()>l.currentPage||h()}async function ne(t){if(t.target.className!=="artist--btn")return;e.modalArtisTAlbums.innerHTML="",e.modalArtistBiography.innerHTML="",X();const s=t.target.parentElement.children[1].innerHTML,n=t.target.dataset.id;g(e.modalLoader);const r=await J(n),o=await Q(n);v(e.modalLoader),ee(r,s),te(o.albumsList)}function $(t){const s=e.customSortDropBlock.classList.contains("open");u(),s||(e.customSortDropBlock.classList.add("open"),e.customSortDropSelected.classList.add("opensort"),e.customSortDropSelected.children[1].classList.add("rotete-icon"))}function w(t){const s=e.customGenreDropBlock.classList.contains("open");u(),s||(e.customGenreDropBlock.classList.add("open"),e.customGenreDropSelected.classList.add("opensort"),e.customGenreDropSelected.children[1].classList.add("rotete-icon"))}function re(t){t.target.nextElementSibling.style.display==="flex"?(t.target.nextElementSibling.style.display="none",e.customSortDropSelected.removeEventListener("click",$),e.customGenreDropSelected.removeEventListener("click",w),e.searchInput.removeEventListener("focus",u),e.searchInput.removeEventListener("click",u),e.searchInput.addEventListener("remove",D),e.customSortDropBlock.removeEventListener("click",_),e.customGenreDropBlock.removeEventListener("click",A),document.removeEventListener("click",B)):(t.target.nextElementSibling.style.display="flex",e.customSortDropSelected.addEventListener("click",$),e.customGenreDropSelected.addEventListener("click",w),e.searchInput.addEventListener("focus",u),e.searchInput.addEventListener("focus",()=>{e.searchInput.addEventListener("keydown",R),e.searchIconBtn.addEventListener("click",C)}),e.searchInput.addEventListener("click",u),e.searchInput.addEventListener("change",D),e.customSortDropBlock.addEventListener("click",_),e.customGenreDropBlock.addEventListener("click",A),document.addEventListener("click",B))}function B(t){!(e.customSortDrop.contains(t.target)||e.customGenreDropBlock.contains(t.target)||e.customSortDropSelected.contains(t.target)||e.customGenreDropSelected.contains(t.target))&&t.target!==e.searchInput&&u()}function u(){e.customSortDropBlock.classList.remove("open"),e.customSortDropSelected.classList.remove("opensort"),e.customSortDropSelected.children[1].classList.remove("rotete-icon"),e.customGenreDropBlock.classList.remove("open"),e.customGenreDropSelected.classList.remove("opensort"),e.customGenreDropSelected.children[1].classList.remove("rotete-icon")}function C(t){t.target.blur()}function R(t){t.key==="Enter"&&t.target.blur()}function D(t){l.name=t.target.value.trim().toLowerCase(),e.searchInput.removeEventListener("keydown",R),e.searchIconBtn.removeEventListener("click",C),l.currentPage=1,f()}function _(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),n=t.target.textContent;l.sortName=s==="default"?"":s,e.customSortDropSelectedText.textContent=n==="Default"?"Sorting: default":`Sorting: ${n}`,u(),l.currentPage=1,f()}}function A(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),n=t.target.textContent;l.genre=s,e.customGenreDropSelectedText.textContent=`Genre: ${n}`,u(),l.currentPage=1,f()}}function S(){e.notFoundBtnReset.removeEventListener("click",S),e.customSortDropSelectedText.textContent="Sorting",e.customGenreDropSelectedText.textContent="Genre",e.searchInput.value="",l.deleteData(),f()}async function f(){h(),e.notFoundFilter.classList.remove("visible"),e.artistsList.innerHTML="",g(e.loader);const t=await L(l);t.totalArtists||(e.notFoundFilter.classList.add("visible"),e.notFoundBtnReset.addEventListener("click",S)),T(t.totalArtists/8),v(e.loader),G(t.artists),y()>1&&(k(),e.moreBtn.addEventListener("click",F))}function ae(){e.mobileMenuClose.classList.remove("hidden"),e.mobileMenuOpen.classList.add("hidden"),e.mobileMenuList.classList.add("open"),e.mobileMenuClose.addEventListener("click",E),e.mobileMenuList.addEventListener("click",N),document.body.style.overflow="hidden"}function N(t){t.target.nodeName==="A"&&E()}function E(){document.body.style.overflow="",e.mobileMenuClose.classList.add("hidden"),e.mobileMenuOpen.classList.remove("hidden"),e.mobileMenuList.classList.remove("open"),e.mobileMenuClose.removeEventListener("click",E),e.mobileMenuList.removeEventListener("click",N)}e.mobileMenuOpen.addEventListener("click",ae);e.artistsList.addEventListener("click",ne);async function ie(){const t=await K();oe(t),g(e.loader);const s=await L();v(e.loader),G(s.artists),T(s.totalArtists/8),y()>1&&(k(),e.moreBtn.addEventListener("click",F));const n=await W();Z(n.data)}ie();e.artistsFilterBtn.addEventListener("click",re);e.resetFilter.addEventListener("click",S);
//# sourceMappingURL=index.js.map
