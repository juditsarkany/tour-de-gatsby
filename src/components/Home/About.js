import React from 'react';
import Title from '../Title';
import styles from '../../css/about.module.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const getAbout = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const About = () => {
	const { aboutImage } = useStaticQuery(getAbout);
	return (
		<section className={styles.about}>
			<Title title="about" subtitle="us" />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						<Img fluid={aboutImage.childImageSharp.fluid} alt="awesome landscape" />
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>explore the difference</h4>
					<p>
						Fixie woke tacos glossier celiac skateboard hashtag cloud bread. Tote bag pork belly
						asymmetrical jianbing green juice keytar tumblr ugh synth meh typewriter. Raclette viral taiyaki
						polaroid, microdosing authentic pabst cray. Viral readymade bespoke synth helvetica blog, keytar
						fam lyft meh salvia unicorn try-hard gochujang. Hell of venmo beard narwhal tattooed kombucha
						banh mi listicle wolf artisan.
					</p>
					<button type="button" className="btn-primary">
						read more
					</button>
				</article>
			</div>
		</section>
	);
};

export default About;
