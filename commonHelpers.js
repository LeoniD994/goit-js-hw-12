import{i as l,S as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function u(o){const r=`https://pixabay.com/api/?key=44002724-78e4880ab6dd2cf163db4493f&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(r);if(!e.ok)throw new Error("Failed to fetch images");return(await e.json()).hits}function f(){const o=document.getElementById("gallery");o.innerHTML=""}function m(o){const s=document.getElementById("gallery"),n=o.map(r=>`
            <div class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img src="${r.webformatURL}" alt="${r.tags}" />
                </a>
                <ul>
                <li><p>Likes: ${r.likes}</p></li>
                <li><p>Views: ${r.views}</p></li>
                <li><p>Comments: ${r.comments}</p></li>
                <li><p>Downloads: ${r.downloads}</p></li>
                </ul>
            </div>
        `).join("");s.innerHTML=n}const y=document.getElementById("search-form"),c=document.getElementById("loader");let i;y.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget.elements.query.value.trim();if(s===""){l.error({message:"Please enter a search query",color:"red"});return}try{f(),p();const n=await u(s);if(n.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",color:"red"});return}m(n),i&&i.destroy(),i=new d(".gallery a",{}),i.refresh()}catch(n){l.error({title:"Error",message:n.message})}finally{g()}});function p(){c.style.display="block"}function g(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
