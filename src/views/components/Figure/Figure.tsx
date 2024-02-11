import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from '@components/Figure/Figure.module.scss';

interface Props extends PropsWithChildren {
	text?: string;
	className?: string;
}

const Figure = (props: Props) => {
	const { children, text = '', className } = props;

	return (
		<>
			<figure className={classNames(className, styles.figure)}>
				{children}
				{text && <figcaption className={styles.figure__caption}>{text}</figcaption>}
			</figure>
		</>
	);
};

export default Figure;
