import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Streaming from './Streaming';
import Tv from './Tv';
import Cinema from './Cinema';
import Rent from './Rent';

export default function LabTabs() {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box
					sx={{
						marginLeft: '35px',
						marginTop: '30px',
						border: 1,
						width: '489px',
						borderRadius: '30px',
						height: '39px',
						borderColor: '#032541',
					}}
				>
					<TabList onChange={handleChange} aria-label="Popüler Olanlar">
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="Yayın Akışı"
							value="1"
						/>
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="Televizyonda"
							value="2"
						/>
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="Kiralık"
							value="3"
						/>
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="Sinemalarda"
							value="4"
						/>
					</TabList>
				</Box>
				<TabPanel value="1">
					<Streaming />
				</TabPanel>
				<TabPanel value="2">
					<Tv />
				</TabPanel>
				<TabPanel value="3">
					<Rent />
				</TabPanel>
				<TabPanel value="4">
					<Cinema />
				</TabPanel>
			</TabContext>
		</Box>
	);
}
