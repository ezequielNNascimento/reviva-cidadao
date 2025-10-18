# Estágio de compilação
FROM node:lts-alpine AS build-stage

WORKDIR /app

# Instala pnpm globalmente
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia apenas os arquivos essenciais para a instalação das dependências
COPY package.json pnpm-lock.yaml ./

# Instala as dependências sem gerar node_modules desnecessários
RUN pnpm install --frozen-lockfile

# Copia o restante do código
COPY . .

# Compila o projeto
RUN pnpm build

# Estágio de produção
FROM nginx:stable-alpine AS production-stage

# Copia os arquivos da build para o Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando de inicialização do Nginx
CMD ["nginx", "-g", "daemon off;"]