import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import FeaturedTours from '../components/Home/FeaturedTours';
import SEO from '../components/SEO';

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4060) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
			<Banner title="continue exploring" info="Lorem ipsum dolor sit amet.">
				<AniLink fade to="/tours" className="btn-white">
					explore tours
				</AniLink>
			</Banner>
		</StyledHero>
		<About />
		<Services />
		<FeaturedTours />
	</Layout>
);
