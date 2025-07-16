#!/bin/bash

# Script para deploy manual no GitHub Pages

echo "Iniciando deploy para GitHub Pages..."

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    echo "Erro: Execute este script no diretório raiz do projeto"
    exit 1
fi

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
fi

# Fazer build do projeto
echo "Fazendo build do projeto..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "Erro no build do projeto"
    exit 1
fi

# Fazer deploy
echo "Fazendo deploy para GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "Deploy realizado com sucesso!"
    echo "Seu site estará disponível em: https://SEU-USUARIO.github.io/novo-site-ifro/"
    echo "Pode levar alguns minutos para as mudanças aparecerem online"
else
    echo "Erro durante o deploy"
    exit 1
fi
