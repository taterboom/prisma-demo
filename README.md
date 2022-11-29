# Prisma Demo

## Usage

```sh
docker build -t prisma-demo .
docker run -d -p 4000:4000 -p 5555:5555 -v ~/.prisma-demo:/app/.prisma-demo prisma-demo
```
