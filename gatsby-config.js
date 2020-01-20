/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Backroads',
		description:
			'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure',
		author: '@johndoe',
		twitterUsername: '@juditsarkanyy',
		image: '/defaultBcg.jpeg',
		siteUrl: 'https://priceless-hawking-8e844a.netlify.com/'
	},

	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-transition-link`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://priceless-hawking-8e844a.netlify.com/',
				sitemap: 'hhttps://priceless-hawking-8e844a.netlify.com/sitemap.xml/',
				policy: [ { userAgent: '*', allow: '/' } ]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		}
	]
};
