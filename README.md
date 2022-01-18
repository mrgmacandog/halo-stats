# halo-stats

## About

## Developer setup

1. Sign up for an Autocode account at https://autocode.com/signup/
2. A Development Token will be automatically generated and will be viewable at https://autocode.com/{YOUR_USERNAME}/general-tokens/
3. At the root of the directory, create a `.env` file that matches the following

```
// .env file

AUTOCODE_SECRET_TOKEN={YOUR_DEVELOPMENT_TOKEN}
```

4. To start the node server, run `npm start` (or `npm run dev-start` to use `nodemon`) at the root of the directory
5. To start the web app, in another terminal window, `cd client` and run `npm start`
6. The node server will be listening at http://localhost:3001 and the web app can be viewed at http://localhost:3000
