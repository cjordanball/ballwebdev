import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { homePage } from '@/content';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleRegion}>{homePage.headline}</div>
			<div className={styles.imageRegion}>
				<Image
					className={styles.ImageRegion}
					width={500}
					height={300}
					src={'/images/20190201 CJB with hat.jpg'}
					alt='CJB with hat'
				/>
			</div>
			<Link className={styles.buttonStyle} target='blank' href='./resume'>
				<button>Go to Résumé</button>
			</Link>
		</div>
	);
};

export default Home;
