# Cypherweb Development Portfolio Website


### start

```bash
# install dependencies
ppnpm install

# start in development mode
pnpm run dev 

# build
pnpm run build

# start build
pnpm run start

# start with pm2
pm2 start pnpm --name "portfolio" -- run start -- -p 4000
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

pnpm install

# make sure that the environment variable are set correctly in .env.local

pnpm run build

pm2 start pnpm --name "portfolio" -- run start -- -p 4000
```

