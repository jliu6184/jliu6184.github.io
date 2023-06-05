import axios from 'axios';
import { useEffect, useState } from 'react';
import './Experience.css';
import ExperienceItem from './ExperienceItem'
import Footer from '../Footer/Footer';
const experiences = require('../helpers/experiences.png');

function Experience() {
	const [experienceItem, setExperienceItem] = useState([]);

	useEffect(() => {
		const url1 = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_EXPERIENCE_ID}`;
		const config = {
			headers: {
				"Authorization": `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
			}
		};

		axios.get(url1, config)
			.then(res => {
				let tableEntries = res.data.records;
				let items = [];

				tableEntries.forEach(record => {
					let entry = record.fields;
					let item = {
						name: entry["name"],
						role: entry["role"],
						timeline: entry["timeline"],
						description: entry["description"],
						sort: entry["sort"]
					}
					items.push(item);
				});
				console.log(items);
				items.sort((a, b) => a.sort - b.sort);
				setExperienceItem(items);
			})
			.catch(err => console.log(err))

		console.log("Finished fetching experience table from Airtable...");
	}, []);

	return (
		<div className="Experience">
			<img src={experiences} alt="experience header" className="experience-header"></img>
			<div className="experience-list">
				{experienceItem.map(item => {
					return <ExperienceItem name={item["name"]} role={item["role"]} timeline={item["timeline"]} description={item["description"]} />
				})}
			</div>
			<Footer />
		</div>
	);
}

export default Experience;