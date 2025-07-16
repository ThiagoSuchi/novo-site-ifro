var n=Object.defineProperty;var l=(a,i,t)=>i in a?n(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var s=(a,i,t)=>l(a,typeof i!="symbol"?i+"":i,t);import{_ as d}from"./main-DNpTjYPO.js";class m{constructor(){s(this,"containerNoticias");this.containerNoticias=document.getElementById("grade-noticias"),this.inicializar()}inicializar(){this.renderizarNoticias()}renderizarNoticias(){d(async()=>{const{noticias:i}=await import("./noticias-Cj4i-3_c.js");return{noticias:i}},[]).then(({noticias:i})=>{const t=i[0],c=i.slice(1),e=this.criarHtmlNoticiaPrincipal(t),r=c.map(o=>this.criarHtmlNoticiaSecundaria(o)).join("");this.containerNoticias.innerHTML=`
        ${e}
        <div class="noticias-secundarias">
          ${r}
        </div>
      `})}criarHtmlNoticiaPrincipal(i){return`
      <div class="noticia-principal">
        <div class="imagem-noticia-principal">
          <img src="${i.imagem}" alt="${i.titulo}" />
          <div class="categoria-badge">${i.categoria}</div>
        </div>
        <div class="conteudo-noticia-principal">
          <h3 class="titulo-noticia-principal">${i.titulo}</h3>
          <p class="resumo-noticia-principal">${i.resumo}</p>
          <div class="meta-noticia">
            <div class="item-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>${i.data}</span>
            </div>
            <div class="item-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>${i.autor}</span>
            </div>
          </div>
          <button class="botao-ler-mais">
            Ler Mais
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    `}criarHtmlNoticiaSecundaria(i){return`
      <div class="cartao-noticia">
        <div class="imagem-noticia">
          <img src="${i.imagem}" alt="${i.titulo}" />
          <div class="categoria-badge-pequena">${i.categoria}</div>
        </div>
        <div class="conteudo-noticia">
          <h4 class="titulo-noticia">${i.titulo}</h4>
          <p class="resumo-noticia">${i.resumo}</p>
          <div class="meta-noticia-pequena">
            <span class="data-noticia">${i.data}</span>
          </div>
        </div>
      </div>
    `}}export{m as GerenciadorNoticias};
