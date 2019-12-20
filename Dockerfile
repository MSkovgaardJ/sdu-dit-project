FROM node
ADD . /var/www/
WORKDIR /var/www/
RUN rm -rf node_modules
RUN npm i
RUN npm install
RUN cd client && npm install
CMD ["npm", "run", "dev"]