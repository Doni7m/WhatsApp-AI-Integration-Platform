# Usa imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala todas as dependências
RUN npm install

# Copia todo o restante do código
COPY . .

# Permite execução do entrypoint
RUN chmod +x /app/entrypoint.sh

# Expõe a porta que o backend usa
EXPOSE 4000

# Inicia o servidor
ENTRYPOINT ["/app/entrypoint.sh"]
