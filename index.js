require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "deepakchavan18",
    "id": 68800380,
    "node_id": "MDQ6VXNlcjY4ODAwMzgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/68800380?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/deepakchavan18",
    "html_url": "https://github.com/deepakchavan18",
    "followers_url": "https://api.github.com/users/deepakchavan18/followers",
    "following_url": "https://api.github.com/users/deepakchavan18/following{/other_user}",
    "gists_url": "https://api.github.com/users/deepakchavan18/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/deepakchavan18/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/deepakchavan18/subscriptions",
    "organizations_url": "https://api.github.com/users/deepakchavan18/orgs",
    "repos_url": "https://api.github.com/users/deepakchavan18/repos",
    "events_url": "https://api.github.com/users/deepakchavan18/events{/privacy}",
    "received_events_url": "https://api.github.com/users/deepakchavan18/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Deepak Chavan",
    "company": null,
    "blog": "deepak-chavan.netlify.app/",
    "location": "Nashik",
    "email": null,
    "hireable": null,
    "bio": "Computer Engineer ",
    "twitter_username": "DeepakC23477539",
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2020-07-26T04:21:24Z",
    "updated_at": "2025-02-19T13:15:57Z"
  }
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('deepakchavan18')
})

app.get('/login', (req, res) => {
    res.send(`<h1>Sucessfully logged in</h1>`)
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code </h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/github-user', (req, res) => {
  res.json(githubData.name)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})