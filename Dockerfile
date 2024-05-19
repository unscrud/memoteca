# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários (package.json, package-lock.json, e os arquivos da sua aplicação Angular) para o diretório de trabalho no contêiner
COPY . .

# Instale as dependências do Node.js
RUN npm install

# Instale o json-server globalmente
RUN npm install -g json-server

# Instale o concurrently globalmente
RUN npm install -g concurrently

# Exponha a porta 4200 (para o Angular) e a porta 3000 (para o json-server)
EXPOSE 4200
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]

# Para realizar o build --> docker build -t memoteca .
# Para executar --> docker run -p 4200:4200 -p 3000:3000 memoteca
