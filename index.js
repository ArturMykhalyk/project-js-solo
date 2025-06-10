import{a as h,i as f,S as z,N as Y,P as Z,A as K,b as J,R as Q}from"./assets/vendor-DjVtRUFz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();async function X(){try{const n="https://sound-wave.b.goit.study/api"+"/genres";return(await h.get(n)).data}catch(t){return f.error({message:`${t}`,position:"topRight"}),null}}async function w({currentPage:t=1,name:s="",sortName:n="",genre:r=""}={}){try{const i="https://sound-wave.b.goit.study/api"+"/artists",c={limit:8,page:t,...s&&{name:s},...n&&{sortName:n},...r&&{genre:r}};return(await h.get(i,{params:c})).data}catch(o){return f.error({message:`${o}`,position:"topRight"}),null}}async function ee(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}`,r=s+n;return(await h.get(r)).data}catch(s){return f.error({message:`${s}`,position:"topRight"}),null}}async function te(t="65ada227af9f6d155db46908"){try{const s="https://sound-wave.b.goit.study/api",n=`/artists/${t}/albums`,r=s+n;return(await h.get(r)).data}catch(s){return f.error({message:`${s}`,position:"topRight"}),null}}async function se(){try{const n="https://sound-wave.b.goit.study/api"+"/feedbacks",r={limit:12};return(await h.get(n,{params:r})).data}catch(t){return f.error({message:`${t}`,position:"topRight"}),null}}async function ne(t,s,n){try{const a="https://sound-wave.b.goit.study/api"+"/feedbacks",i={name:t,rating:s,descr:n};return(await h.post(a,i)).data}catch(r){return f.error({message:`${r}`,position:"topRight"}),null}}let I=0;function R(t){I=Math.ceil(t)}function L(){return I}const e={mobileMenuOpen:document.getElementById("open-menu"),mobileMenuClose:document.getElementById("close-btn"),headerElem:document.querySelector(".header"),mobileMenuList:document.querySelector(".header-menu"),artistsList:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),modalLoader:document.querySelector(".modal-loader"),moreBtn:document.querySelector(".moreButton"),feedBack:document.querySelector(".swiper-wrapper"),modal:document.querySelector(".modal"),modalFeedBack:document.querySelector(".modal-feed"),feedBackBtn:document.querySelector(".feed-back-btn"),closeModalBtn:document.querySelector(".modal__close-btn"),closeFeedModalBtn:document.querySelector(".modal__feed-close-btn"),modalArtistBiography:document.querySelector(".modal-biography"),modalArtisTAlbums:document.querySelector(".modal-albums"),artistsFilterBtn:document.querySelector(".artists-filters-btn"),customSortDrop:document.querySelector(".custom-sort-dropdown"),customSortDropBlock:document.querySelector(".dropdown-options-sort"),customGenreDropBlock:document.querySelector(".genre-dropdown-options-genre"),customSortDropSelected:document.querySelector(".dropdown-selected-sort"),customSortDropSelectedText:document.querySelector(".dropdown-selected-sort-text"),customGenreDropSelected:document.querySelector(".genre-dropdown-title"),customGenreDropSelectedText:document.querySelector(".genre-dropdown-title-text"),searchInput:document.querySelector(".artists-filters-search-box input"),resetFilter:document.querySelector(".artists-filters-btn___reset"),notFoundFilter:document.querySelector(".filter-not-found"),notFoundBtnReset:document.querySelector(".not-found-btn-reset"),searchIconBtn:document.querySelector(".search-icon"),paginationContainer:document.getElementById("tui-pagination-container"),scrollBtn:document.getElementById("scrollToTopBtn"),modalFeedRating:document.querySelector(".modal__feed-rating"),modalFeedBackForm:document.querySelector(".modal__feed-form")};function G(t,s,n=t){t.classList.add("modal--is-open"),document.body.style.overflow="hidden";const r=()=>i(t,s,r);document.addEventListener("keydown",o),window.addEventListener("click",a),s.addEventListener("click",r);function o(c){c.key==="Escape"&&r()}function a(c){c.target===n&&r()}function i(c,p,l,v){c.classList.remove("modal--is-open"),document.body.style.overflow="",document.removeEventListener("keydown",o),window.removeEventListener("click",a),p.removeEventListener("click",l)}}function oe(){G(e.modal,e.closeModalBtn)}function re(){G(e.modalFeedBack,e.closeFeedModalBtn,e.modalFeedBack)}const d="/project-js-solo/assets/sprite-8Fw0A7zS.svg";function O(t){return t.map(({_id:s,strArtist:n,strArtistThumb:r,strBiographyEN:o,genres:a})=>`<li class="artists--list__item">
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
            <use href="${d}#icon-right-arrow-full"></use>
          </svg>
        </button>
      </li>
  `).join("")}function N(t){e.artistsList.innerHTML=O(t)}function ae(t){e.artistsList.insertAdjacentHTML("beforeend",O(t))}function b(t){t.classList.add("visible")}function y(t){t.classList.remove("visible")}function M(){e.moreBtn.classList.add("visible")}function B(){e.moreBtn.classList.remove("visible")}function ie(t){const s=t.map(({_id:o,name:a,rating:i,descr:c})=>`<div class="swiper-slide" data-id="${o}">


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
<p class='feed-back--descr'>${c}</p>
<p class='feed-back--name'>${a}</p>

</div>`).join("");e.feedBack.innerHTML=s,new z(".modal-product__slider",{modules:[Y,Z,K],navigation:{nextEl:".custom-next",prevEl:".custom-prev"},pagination:{el:".swiper-pagination",clickable:!1,type:"custom"},autoplay:{delay:5e3},on:{init(){n(this.realIndex,this.slides.length),r(this)},slideChange(){n(this.realIndex,this.slides.length)}}});function n(o,a){const i=document.querySelectorAll(".swiper-pagination .bullet");i.forEach(c=>c.classList.remove("swiper-pagination-bullet-active")),o===0?i[0].classList.add("swiper-pagination-bullet-active"):o===a-1?i[2].classList.add("swiper-pagination-bullet-active"):i[1].classList.add("swiper-pagination-bullet-active")}function r(o){var a,i,c;(a=document.querySelector(".bullet.left"))==null||a.addEventListener("click",()=>{o.slideTo(0)}),(i=document.querySelector(".bullet.center"))==null||i.addEventListener("click",()=>{o.slideTo(Math.floor(o.slides.length/2))}),(c=document.querySelector(".bullet.right"))==null||c.addEventListener("click",()=>{o.slideTo(o.slides.length-1)})}}function ce({intDiedYear:t,intFormedYear:s,intMembers:n,strGender:r,strArtist:o,strArtistThumb:a,strBiographyEN:i,strCountry:c},p){const l=s||t?`      ${s??"last"}-${t??"present"}`:"information missing",v=`
   <p class="modal-biography__title">${o}</p>
   <div class="modal-bbiography-desktop">     
   <img class="modal-biography__photo" src="${a}" alt="${o}" />
        <div class="modal-biography__info">
        <div class="modal-biography___content">
        <p class="modal-biography___years">Years active</br> <span>
        
        ${l}
     </span></p>
        <p class="modal-biography___sex">Sex</br> <span>${r}</span></p>
        <p class="modal-biography___members">Members</br> <span>${n}</span></p>
        <p class="modal-biography___country">Country</br> <span>${c}</span></p>
        </div>
        <p class="modal-biography___biography">Biography</br> <span>${i}</span></p>
        <ul class="modal-biography__genre-list">${p}</ul>
        </div></div>`;e.modalArtistBiography.innerHTML=v}function le(t){e.modalArtisTAlbums.innerHTML=t.map(s=>de(s)).join("")}function de(t){const s=t.tracks.map(r=>{const o=Math.floor(r.intDuration/6e4),a=Math.floor(r.intDuration%6e4/1e3).toString().padStart(2,"0");return`
      <li class="modal-track-item">
        <span class="track-name">${r.strTrack}</span>
        <span class="track-time">${o}:${a}</span>
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
  `}function ue(t){const s=t.map(n=>`  <li data-value="${n.genre.toLowerCase()}">${n.genre}</li>`).join("");e.customGenreDropBlock.innerHTML=s}const E={totalItems:L(),itemsPerPage:8,visiblePages:5,centerAlign:!0,usageStatistics:!1,template:{page:'<a href="#" class="custom-page" >{{page}}</a>',currentPage:'<strong class="custom-page active">{{page}}</strong>',moveButton:`<a href="#" class="custom-move {{type}}">   <svg class="custom-move-icon">
            <use href="${d}#icon-bottom-arrow"></use>
          </svg></a>`,disabledMoveButton:'<span class="custom-disabled {{type}}">×</span>',moreButton:'<a href="#" class="custom-more">…</a>'}};window.innerWidth<1440&&(E.visiblePages=3);window.innerWidth<768&&(E.visiblePages=1);function C(){window.scrollTo({top:0,behavior:"smooth"})}const u={currentPage:1,name:"",sortName:"",genre:"",deleteData(){this.name="",this.sortName="",this.genre="",this.currentPage=1}},m=new J(e.paginationContainer,E);m.on("beforeMove",H);m.on("afterMove",S);S();function H(t){const s=t.page;u.currentPage=s-1,e.artistsList.innerHTML="";const n=e.headerElem.offsetHeight,o=e.artistsList.getBoundingClientRect().top+window.pageYOffset-n;window.scrollTo({top:o,behavior:"smooth"}),$()}async function $(){b(e.loader),B(),u.currentPage++,m.off("beforeMove"),m.movePageTo(u.currentPage),m.on("beforeMove",H);const t=await w(u);y(e.loader),M(),ae(t.artists),L()>u.currentPage||B()}async function me(t){if(t.target.className!=="artist--btn")return;e.modalArtisTAlbums.innerHTML="",e.modalArtistBiography.innerHTML="",oe();const s=t.target.parentElement.children[1].innerHTML,n=t.target.dataset.id;b(e.modalLoader);const r=await ee(n),o=await te(n);y(e.modalLoader),ce(r,s),le(o.albumsList)}function A(t){const s=e.customSortDropBlock.classList.contains("open");g(),s||(e.customSortDropBlock.classList.add("open"),e.customSortDropSelected.classList.add("opensort"),e.customSortDropSelected.children[1].classList.add("rotete-icon"))}function _(t){const s=e.customGenreDropBlock.classList.contains("open");g(),s||(e.customGenreDropBlock.classList.add("open"),e.customGenreDropSelected.classList.add("opensort"),e.customGenreDropSelected.children[1].classList.add("rotete-icon"))}function pe(t){t.target.nextElementSibling.style.display==="flex"?(t.target.nextElementSibling.style.display="none",e.customSortDropSelected.removeEventListener("click",A),e.customGenreDropSelected.removeEventListener("click",_),e.searchInput.removeEventListener("focus",g),e.searchInput.removeEventListener("click",g),e.customSortDropBlock.removeEventListener("click",T),e.customGenreDropBlock.removeEventListener("click",F),document.removeEventListener("click",q)):(t.target.nextElementSibling.style.display="flex",e.customSortDropSelected.addEventListener("click",A),e.customGenreDropSelected.addEventListener("click",_),e.searchInput.addEventListener("focus",g),e.searchInput.addEventListener("focus",()=>{e.searchInput.addEventListener("keydown",U),e.searchIconBtn.addEventListener("click",j)}),e.searchInput.addEventListener("remove",x),e.searchInput.addEventListener("click",g),e.searchInput.addEventListener("change",x),e.customSortDropBlock.addEventListener("click",T),e.customGenreDropBlock.addEventListener("click",F),document.addEventListener("click",q))}function q(t){!(e.customSortDrop.contains(t.target)||e.customGenreDropBlock.contains(t.target)||e.customSortDropSelected.contains(t.target)||e.customGenreDropSelected.contains(t.target))&&t.target!==e.searchInput&&g()}function g(){e.customSortDropBlock.classList.remove("open"),e.customSortDropSelected.classList.remove("opensort"),e.customSortDropSelected.children[1].classList.remove("rotete-icon"),e.customGenreDropBlock.classList.remove("open"),e.customGenreDropSelected.classList.remove("opensort"),e.customGenreDropSelected.children[1].classList.remove("rotete-icon")}function j(t){t.target.blur()}function U(t){t.key==="Enter"&&t.target.blur()}function x(t){u.name=t.target.value.trim().toLowerCase(),e.searchInput.removeEventListener("keydown",U),e.searchIconBtn.removeEventListener("click",j),u.currentPage=1,k()}function T(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),n=t.target.textContent;u.sortName=s==="default"?"":s,e.customSortDropSelectedText.textContent=n==="Default"?"Sorting: default":`Sorting: ${n}`,g(),u.currentPage=1,k()}}function F(t){if(t.target.tagName==="LI"){const s=t.target.getAttribute("data-value"),n=t.target.textContent;u.genre=s,e.customGenreDropSelectedText.textContent=`Genre: ${n}`,g(),u.currentPage=1,k()}}function P(){e.notFoundBtnReset.removeEventListener("click",P),e.customSortDropSelectedText.textContent="Sorting",e.customGenreDropSelectedText.textContent="Genre",e.searchInput.value="",u.deleteData(),k()}async function k(){e.paginationContainer.style.display="flex",B(),e.notFoundFilter.classList.remove("visible"),e.artistsList.innerHTML="",b(e.loader);const t=await w(u);t.totalArtists||(e.paginationContainer.style.display="none",e.notFoundFilter.classList.add("visible"),e.notFoundBtnReset.addEventListener("click",P)),m.reset(t.totalArtists),R(t.totalArtists/8),S(),y(e.loader),N(t.artists),L()>1&&(M(),e.moreBtn.addEventListener("click",$))}function S(){ge();const t=e.paginationContainer;if(!t)return;const s=t.querySelector(".last-page-btn");s&&s.remove();const n=L(),r=m.getCurrentPage();if([...t.querySelectorAll(".custom-page")].map(l=>Number(l.textContent)).filter(l=>!isNaN(l)).includes(n))return;const i=`
    <a href="#" class="custom-page last-page-btn${r===n?" active":""}" data-page="${n}">
      ${n}
    </a>
  `,c=t.querySelectorAll(".custom-more"),p=c[c.length-1];if(p){p.insertAdjacentHTML("afterend",i);const l=t.querySelector(".last-page-btn");l&&l.addEventListener("click",v=>{v.preventDefault(),m.movePageTo(n)})}}function ge(){const t=e.paginationContainer;if(!t)return;const s=t.querySelector(".first-page-btn");s&&s.remove();const n=m.getCurrentPage(),r=1;if([...t.querySelectorAll(".custom-page")].map(l=>Number(l.textContent)).filter(l=>!isNaN(l)).includes(r))return;const i=`
    <a href="#" class="custom-page first-page-btn${n===r?" active":""}" data-page="1">1</a>
  `,p=t.querySelectorAll(".custom-more")[0];if(p){p.insertAdjacentHTML("beforebegin",i);const l=t.querySelector(".first-page-btn");l&&l.addEventListener("click",v=>{v.preventDefault(),m.movePageTo(1)})}}function fe(){e.mobileMenuClose.classList.remove("hidden"),e.mobileMenuOpen.classList.add("hidden"),e.mobileMenuList.classList.add("open"),e.mobileMenuClose.addEventListener("click",D),e.mobileMenuList.addEventListener("click",V),document.body.style.overflow="hidden"}function V(t){t.target.nodeName==="A"&&D()}function D(){document.body.style.overflow="",e.mobileMenuClose.classList.add("hidden"),e.mobileMenuOpen.classList.remove("hidden"),e.mobileMenuList.classList.remove("open"),e.mobileMenuClose.removeEventListener("click",D),e.mobileMenuList.removeEventListener("click",V)}const ve="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.071%201.31791C9.41474%200.501451%2010.5855%200.501452%2010.9292%201.31791L12.958%206.1368C13.103%206.481%2013.4307%206.71618%2013.8068%206.74597L19.0728%207.16304C19.965%207.23371%2020.3268%208.3337%2019.647%208.90897L15.6349%2012.3042C15.3483%2012.5468%2015.2231%2012.9273%2015.3107%2013.2899L16.5365%2018.3666C16.7441%2019.2267%2015.797%2019.9066%2015.0331%2019.4457L10.5247%2016.7251C10.2026%2016.5308%209.79762%2016.5308%209.4756%2016.7251L4.96711%2019.4457C4.20323%2019.9066%203.25608%2019.2267%203.46376%2018.3666L4.68954%2013.2899C4.7771%2012.9273%204.65194%2012.5468%204.36538%2012.3042L0.353184%208.90897C-0.326596%208.3337%200.0351899%207.23371%200.927413%207.16304L6.19348%206.74597C6.56962%206.71618%206.89728%206.481%207.04219%206.1368L9.071%201.31791Z'%20fill='%23764191'/%3e%3c/svg%3e",he="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.07082%201.31791C9.41456%200.501451%2010.5853%200.501452%2010.9291%201.31791L12.9578%206.1368C13.1028%206.481%2013.4305%206.71618%2013.8066%206.74597L19.0726%207.16304C19.9648%207.23371%2020.3266%208.3337%2019.6468%208.90897L15.6347%2012.3042C15.3482%2012.5468%2015.2229%2012.9273%2015.3105%2013.2899L16.5363%2018.3666C16.7439%2019.2267%2015.7968%2019.9066%2015.0329%2019.4457L10.5245%2016.7251C10.2024%2016.5308%209.79744%2016.5308%209.47542%2016.7251L4.96693%2019.4457C4.20305%2019.9066%203.25589%2019.2267%203.46357%2018.3666L4.68936%2013.2899C4.77692%2012.9273%204.65176%2012.5468%204.36519%2012.3042L0.353001%208.90897C-0.326779%208.3337%200.0350068%207.23371%200.92723%207.16304L6.19329%206.74597C6.56944%206.71618%206.89709%206.481%207.04201%206.1368L9.07082%201.31791Z'%20fill='white'/%3e%3c/svg%3e",W=new Q(e.modalFeedRating,{starOn:ve,starOff:he,space:!1});W.init();async function Le(t){t.preventDefault();const s=W.score(),n=t.target.elements.name.value.trim(),r=t.target.elements.message.value.trim();if(!(n.trim()&&s&&r.trim())){f.error({message:"Fill out the form!!!",position:"topRight"});return}await ne(n,s,r)&&(e.modalFeedBack.classList.remove("modal--is-open"),f.success({message:"Feedback sent!!!",position:"topRight"}),e.modalFeedBackForm.reset())}e.mobileMenuOpen.addEventListener("click",fe);e.artistsList.addEventListener("click",me);e.feedBackBtn.addEventListener("click",re);e.modalFeedBackForm.addEventListener("submit",Le);async function be(){document.addEventListener("DOMContentLoaded",()=>{window.innerWidth>=1440&&e.artistsFilterBtn.dispatchEvent(new Event("click"))});const t=await X();ue(t),b(e.loader);const s=await w();y(e.loader),N(s.artists),m.reset(s.totalArtists),R(s.totalArtists/8),S(),L()>1&&(M(),e.moreBtn.addEventListener("click",$));const n=await se();ie(n.data)}be();e.artistsFilterBtn.addEventListener("click",pe);e.resetFilter.addEventListener("click",P);window.addEventListener("scroll",()=>{window.scrollY>300?(e.scrollBtn.classList.add("visible"),e.scrollBtn.addEventListener("click",C)):(e.scrollBtn.classList.remove("visible"),e.scrollBtn.removeEventListener("click",C))});
//# sourceMappingURL=index.js.map
