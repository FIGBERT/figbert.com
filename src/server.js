import sirv from 'sirv';
import express from "express";
import compression from 'compression';
import * as sapper from '@sapper/server';
import { v4 as uuidv4 } from 'uuid';
import helmet from "helmet";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();
app.use(
	compression({ threshold: 0 }),
	sirv('static', { dev })
);
app.use((req, res, next) => {
	res.locals.nonce = uuidv4();
	next();
});
app.use(
	helmet({
		hsts: {
			maxAge: 5184000,
			includeSubDomains: true,
			preload: true
		},
		contentSecurityPolicy: {
			directives: {
				scriptSrc: [
					"'self'",
					(req, res) => `'nonce-${res.locals.nonce}'`,
					"https://gc.zgo.at"
				],
				imgSrc: [
					"https://txtodo.goatcounter.com/count"
				]
			}
		},
		referrerPolicy: {
			policy: "no-referrer"
		},
		frameguard: {
			action: "deny"
		}
	})
);
app.use(sapper.middleware());
app.listen(PORT, err => {
	if (err) console.log("error", err);
});
