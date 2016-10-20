module.exports = [
	{
		pattern: /^(https?:\/\/)(.*nbcuni.com\/_api\/search)(.+)/,
		responder: '$1qa-web-chillertv.apps.nbcuni.com/_api/search$3'
	},
	{
		pattern: /^(https?:\/\/.*nbcuni.com[^\?]+$)/,
		responder: '$1?date=19800112'
	},
	{
		pattern: /^(https?:\/\/.*nbcuni.com.*\?.+$)/,
		responder: '$1&date=19800112'
	}
];
