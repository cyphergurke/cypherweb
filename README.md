# Cypherweb Development Portfolio Website


### start

```bash
# install dependencies
npm i --legacy-peer-deps

# start in development mode
npm run dev 

# build
npm run build

# start build
npm run start

# start with pm2
pm2 start npm --name "portfolio" -- run start -- -p 4000
```


### Deployment

Deploy the application with Github actions and pm2.

For automated deployment with github actions you need first make a manual deployment 

```bash
apt-get install pm2

# install nodejs 22

# install nvm
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# nvm install 22  # use nodejs 22

# clone the repository, install the dependencies with 
git clone https://github.com/cyphergurke/cypherweb.git

npm i --legacy-peer-deps

# make sure that the environment variable are set correctly in .env.local

npm run build

pm2 start npm --name "portfolio" -- run start -- -p 4000
```

