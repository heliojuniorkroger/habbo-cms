const express = require('express')
const fs = require('fs')
const proxy = require('express-http-proxy')
const axios = require('axios')
const handlebars = require('handlebars')

const app = express()

const ME_URL = process.env.ME_URL || 'http://localhost:8080'
const IMAGES_URL = process.env.IMAGES_URL || 'http://localhost'

const config = {
    API_URL: process.env.API_URL || 'http://localhost:9090',
    CONNECTION_INFO_HOST: process.env.INFO_HOST || 'localhost',
    CONNECTION_INFO_PORT: process.env.INFO_PORT || '30000',
    EXTERNAL_TEXTS_TXT: `${ME_URL}/gamedata/external_flash_texts`,
    FURNIDATA_LOAD_URL: `${ME_URL}/gamedata/furnidata_xml`,
    EXTERNAL_VARIABLES_TXT: `${ME_URL}/gamedata/external_variables`,
    EXTERNAL_OVERRIDE_TEXTS_TXT: `${ME_URL}/gamedata/override/external_flash_override_texts`,
    EXTERNAL_FIGUREPARTLIST_TXT: `${ME_URL}/gamedata/figuredata`,
    PRODUCTDATA_LOAD_URL: `${ME_URL}/gamedata/productdata`,
    EXTERNAL_OVERRIDE_VARIABLES_TXT: `${ME_URL}/gamedata/override/external_override_variables`,
    FLASH_CLIENT_URL: `${IMAGES_URL}/gordon/PRODUCTION-201611291003-338511768/`,
    BASE: `${IMAGES_URL}/gordon/PRODUCTION-201611291003-338511768/`,
    HABBO_SWF: `${IMAGES_URL}/gordon/PRODUCTION-201611291003-338511768/Habbo.swf`
}

app.get('/client/:hash', async (req, res) => {
    try {
        const response = await axios.get(`${config.API_URL}/client/sso/${req.params.hash}`)
        console.log(response.data)
        fs.readFile('files/client.html', (err, html) => {
            if (err) throw err
            res.send(handlebars.compile(html.toString())({ ...config, SSO_TICKET: response.data.sso }))
        })
    } catch (err) {
        if (err.response && err.response.status === 404) {
            fs.readFile('files/client.html', (err, html) => {
                if (err) throw err
                res.send(handlebars.compile(html.toString())({ SSO_TICKET: null }))
            })
        }
    }
})

app.get('/gamedata/furnidata_xml', (req, res) => res.sendFile(`${__dirname}/gamedata/furnidata.xml`))
app.get('/gamedata/productdata', (req, res) => res.sendFile(`${__dirname}/gamedata/productdata.txt`))
app.get('/gamedata/external_flash_texts', (req, res) => res.sendFile(`${__dirname}/gamedata/external_flash_texts.txt`))
app.get('/gamedata/external_variables', (req, res) => res.sendFile(`${__dirname}/gamedata/external_variables.txt`))
app.get('/gamedata/figuredata', (req, res) => res.sendFile(`${__dirname}/gamedata/figuredata.xml`))
app.get('/gamedata/override/external_flash_override_texts', (req, res) => res.sendFile(`${__dirname}/gamedata/override/external_flash_override_texts.txt`))
app.get('/gamedata/override/external_override_variables', (req, res) => res.sendFile(`${__dirname}/gamedata/override/external_override_variables.txt`))

if (process.env.NODE_ENV === 'production') {
    // static react dist with router (how?)
} else {
    app.use(proxy('localhost:3000'))
}

app.listen(process.env.PORT || 5050)