# Usa a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependências para cache de build
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o restante do código para dentro do container
COPY . .

# Torna o entrypoint.sh executável
RUN chmod +x /app/entrypoint.sh

# Expõe a porta 4000
EXPOSE 4000

# Define o script de entrada
ENTRYPOINT ["/app/entrypoint.sh"]

# Comando padrão para rodar o servidor
CMD ["npm", "start"]
