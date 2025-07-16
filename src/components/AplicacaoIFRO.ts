// Classe principal da aplicação IFRO
export class AplicacaoIFRO {
  private gerenciadorPesquisa!: any;
  private gerenciadorMenuMobile!: any;
  private gerenciadorFiltrosCursos!: any;
  private gerenciadorNoticias!: any;
  private gerenciadorNavegacaoSuave!: any;
  private gerenciadorSubmenu!: any;

  constructor() {
    this.inicializar();
  }

  private inicializar(): void {
    // Aguardar o DOM estar completamente carregado
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.configurarAplicacao());
    } else {
      this.configurarAplicacao();
    }
  }

  private async configurarAplicacao(): Promise<void> {
    console.log('Configurando aplicação...');
    
    try {
      // Importar e inicializar todos os gerenciadores
      const { GerenciadorPesquisa } = await import('../services/GerenciadorPesquisa');
      this.gerenciadorPesquisa = new GerenciadorPesquisa();
      console.log('GerenciadorPesquisa inicializado');
      
      const { GerenciadorMenuMobile } = await import('../services/GerenciadorMenuMobile');
      this.gerenciadorMenuMobile = new GerenciadorMenuMobile();
      console.log('GerenciadorMenuMobile inicializado');
      
      const { GerenciadorFiltrosCursos } = await import('../services/GerenciadorFiltrosCursos');
      this.gerenciadorFiltrosCursos = new GerenciadorFiltrosCursos();
      console.log('GerenciadorFiltrosCursos inicializado');
      
      const { GerenciadorNoticias } = await import('../services/GerenciadorNoticias');
      this.gerenciadorNoticias = new GerenciadorNoticias();
      console.log('GerenciadorNoticias inicializado');
      
      const { GerenciadorNavegacaoSuave } = await import('../services/GerenciadorNavegacaoSuave');
      this.gerenciadorNavegacaoSuave = new GerenciadorNavegacaoSuave();
      console.log('GerenciadorNavegacaoSuave inicializado');
      
      const { GerenciadorSubmenu } = await import('../services/GerenciadorSubmenu');
      this.gerenciadorSubmenu = new GerenciadorSubmenu();
      console.log('GerenciadorSubmenu inicializado');
      
      console.log('Aplicação IFRO inicializada com sucesso!');
    } catch (error) {
      console.error('Erro ao inicializar aplicação:', error);
    }
  }
}
