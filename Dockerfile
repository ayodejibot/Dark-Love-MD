FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/ayodejibot/Dark-Love-MD.git /root/ayodejibot

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Kingjux/node_modules

# Install dependencies
WORKDIR /root/ayodejibot
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/Kingjux/node_modules
