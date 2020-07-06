FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./entrypoint.sh
CMD [ "./entrypoint.sh" ]