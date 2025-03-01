FROM node:lts-buster
RUN git clone https://github.com/ayodejibot/Dark-Love-MD/root/ayodejibot
WORKDIR /root/ayodejibot
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
