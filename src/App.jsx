import React, { StrictMode } from 'react';

import Figure from './components/Figure/Figure.tsx';
import { pics } from './data/data.ts';
import './App.scss';
import './styles/index.scss';

const App = () => {
	return (
		<StrictMode>
			<h1>Мои замечательные картины</h1>
			<ul className='pics_list'>
				{pics.map(({ img, text }, index) => (
					<li key={index}>
						<Figure text={text}>
							<img className='pic' src={img} alt={text} />
						</Figure>
					</li>
				))}
			</ul>
		</StrictMode>
	);
};

export default App;
