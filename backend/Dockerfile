# Stage 1: Build
FROM node:20.11.1-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Production
FROM node:20.11.1-slim
WORKDIR /app
COPY --from=builder /app .
EXPOSE 5001
CMD ["npm", "start"]
