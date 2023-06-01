import styles from './page.module.css';
import Link from 'next/link';
import hatPic from 'public/images/20190201 CJB with hat.jpg';
import { homePage } from '../content';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleRegion}>{homePage.headline}</div>
			<div className={styles.imageRegion}>
				<img
					className={styles.theImage}
					src={'/images/20190201 CJB with hat.jpg'}
					alt='CJB with hat'
				/>
			</div>
			<div className={styles.welcomeSection}>{homePage.intro}</div>
			<Link className={styles.buttonStyle} target='_blank' href='/resume'>
				<button>Go to Résumé</button>
			</Link>
		</div>
	);
};

export default Home;
