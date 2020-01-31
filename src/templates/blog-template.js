import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import styles from '../css/single-blog.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO';

const blog = ({ data }) => {
	const { title, published, image, text: { json } } = data.post;

	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				return (
					<div className="rich">
						<img width="400" src={node.data.target.fields.file['en-US'].url} alt="featured" />
					</div>
				);
			},
			'embedded-entry-block': (node) => {
				const { name, images, description } = node.data.target.fields;
				return (
					<div>
						<img src={images['en-US'][0].fields.file['en-US'].url} width="400" alt="" />
						<p>{description['en-US']}</p>
					</div>
				);
			}
		}
	};
	return (
		<Layout>
			<SEO title={title} />
			<section className={styles.blog}>
				<div className={styles.center}>
					<h1>{title}</h1>
					<h4>published at :{published}</h4>
					<Img fluid={image.fluid} />
					<article className={styles.post}>{documentToReactComponents(json, options)}</article>
					<AniLink fade to="/blog" className="btn-primary">
						all posts
					</AniLink>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query getPost($slug: String!) {
		post: contentfulPost(slug: { eq: $slug }) {
			title
			published(formatString: "MMMM Do, YYYY")
			image {
				fluid {
					...GatsbyContentfulFluid
				}
			}
			text {
				json
			}
		}
	}
`;

export default blog;
