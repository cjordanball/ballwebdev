import styles from './programBox.module.css';

interface ProgramBoxProps {
	data:
		| {
				provider: string;
				name: string;
				startDate: string;
				endDate: string;
				location: string;
				description: string;
		  }
		| {
				provider: string;
				name: string;
				startDate: null;
				endDate: string;
				location: string;
				description: string;
		  };
}

const ProgramBox = ({ data }: ProgramBoxProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.introSection}>
				<div className={styles.leftSection}>
					<div className={styles.nameText}>{data.provider}</div>
					<div>
						<em>{data.name}</em>
					</div>
				</div>
				<div className={styles.rightSection}>
					<div className={styles.nameText}>{data.location}</div>
				</div>
			</div>
			<div
				className={styles.descriptionSection}
				dangerouslySetInnerHTML={{ __html: data.description }}
			/>
		</div>
	);
};

export default ProgramBox;
