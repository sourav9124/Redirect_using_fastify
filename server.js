// server.js
'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/g', async (request, reply) => {
    reply.redirect('https://www.google.com')
  })
}

