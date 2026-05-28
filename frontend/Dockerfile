From node:20

workdir /app

copy package.*.json ./

run  npm install

copy . .

Expose 3000

cmd ["npm","run","dev" ,"--","--host"]
