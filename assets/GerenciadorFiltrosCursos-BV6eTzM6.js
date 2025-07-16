var a=Object.defineProperty;var l=(s,o,i)=>o in s?a(s,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[o]=i;var r=(s,o,i)=>l(s,typeof o!="symbol"?o+"":o,i);import{_ as n}from"./main-DNpTjYPO.js";class h{constructor(){r(this,"containerCursos");r(this,"botoesFiltro");r(this,"filtroAtivo","todos");if(this.containerCursos=document.getElementById("grade-cursos"),this.botoesFiltro=document.querySelectorAll(".filtro-botao"),!this.containerCursos){console.error("Elemento grade-cursos não encontrado");return}if(this.botoesFiltro.length===0){console.error("Botões de filtro não encontrados");return}this.inicializar()}inicializar(){this.renderizarCursos(),this.configurarEventosFiltro()}configurarEventosFiltro(){this.botoesFiltro.forEach(o=>{o.addEventListener("click",()=>{const i=o.dataset.filtro;this.alternarFiltro(i,o)})})}alternarFiltro(o,i){this.botoesFiltro.forEach(t=>{t.classList.remove("filtro-ativo")}),i.classList.add("filtro-ativo"),this.filtroAtivo=o,this.renderizarCursos()}aplicarFiltro(){this.containerCursos.querySelectorAll(".cartao-curso").forEach(i=>{const t=i,e=t.dataset.tipo;this.filtroAtivo==="todos"||e===this.filtroAtivo?t.style.display="block":t.style.display="none"})}renderizarCursos(){n(async()=>{const{cursos:o}=await import("./cursos-gj-zeMYs.js");return{cursos:o}},[]).then(({cursos:o})=>{const i=this.filtroAtivo==="todos"?o:o.filter(t=>t.nivel===this.filtroAtivo);this.containerCursos.innerHTML=i.map(t=>`
        <div class="cartao-curso" data-tipo="${t.nivel}">
          <div class="imagem-curso">
            <img src="${t.imagem}" alt="${t.nome}" />
            <div class="nivel-badge">${t.nivel==="tecnico"?"Técnico":"Graduação"}</div>
          </div>
          
          <div class="conteudo-curso">
            <h3 class="titulo-curso">${t.nome}</h3>
            <p class="descricao-curso">${t.descricao}</p>
            
            <div class="info-curso">
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <span>${t.duracao}</span>
              </div>
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>${t.modalidade}</span>
              </div>
              <div class="item-info">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>${t.vagas} vagas</span>
              </div>
            </div>
            
            <button class="botao-curso">
              Saiba Mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      `).join(""),this.configurarBotoesSaibaMais()}).catch(o=>{console.error("Erro ao carregar cursos:",o)})}configurarBotoesSaibaMais(){this.containerCursos.querySelectorAll(".botao-curso").forEach((i,t)=>{i.addEventListener("click",()=>{this.mostrarDetalhesCurso(t+1)})})}mostrarDetalhesCurso(o){console.log(`Mostrando detalhes do curso: ${o}`),alert(`Detalhes do curso ${o} - Funcionalidade em desenvolvimento`)}}export{h as GerenciadorFiltrosCursos};
