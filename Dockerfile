# Install dependencies only when needed
FROM --platform=linux/amd64 node:16-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install

# Production image, copy all the files and run next
FROM --platform=linux/amd64 node:16-alpine AS runner
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run gen
# RUN npx prisma migrate deploy

ENV DATABASE_URL="file:/app/.prisma-demo/dev.db"
# VOLUME [ "~/.prisma-demo/", "/app/.prisma-demo" ]

EXPOSE 4000

CMD ["npm", "run", "start"]
