module.exports = [
	{
		pattern: /(https?:\/\/)(stage\-api\.nbcuni\.com\/tve\/sprout\/apps\/cnbc-roku\/pages\/programs\/)(.+)/,
		responder: '$1vDgjyNo82JE0degDarH6rdkuau4_8bNm'
	},
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
