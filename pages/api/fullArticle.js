// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const axios = require('axios');
export default function handler(req, res) {
  const { url } = req.query;
  axios.get(url).then(result => {
    let dom = new JSDOM(result.data, { url });
    let article = new Readability(dom.window.document).parse();
    return res.status(200).json({ content: article.textContent })
  })
}
