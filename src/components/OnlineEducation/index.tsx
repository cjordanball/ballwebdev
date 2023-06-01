import styles from './onlineEducation.module.css';
import education from '../../content/education';

const OnlineEducation = () => {
	const courses = education.courses.courseNames;
	const courseList = courses.map((val) => {
		return (
			<div
				key={`${val}-${Math.random().toString()}`}
				className={styles.courseItem}
			>
				{val}
			</div>
		);
	});
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<span className={styles.mainTitle}>Courses</span>
			</div>
			<div className={styles.listSection}>
				<div className={styles.introSection}>{education.courses.introText}</div>
				<div className={styles.listingSection}>{courseList}</div>
			</div>
		</div>
	);
};

export default OnlineEducation;
