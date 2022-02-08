import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Movie from './Movie';
import FreeTv from './FreeTv';

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
						width: '186px',
						borderRadius: '30px',
						height: '39px',
						borderColor: '#032541',
					}}
				>
					<TabList onChange={handleChange} aria-label="Popüler Olanlar">
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="Filmler"
							value="1"
						/>
						<Tab
							sx={{ fontWeight: 'bold', color: '#032541', minHeight: 'unset' }}
							label="TV"
							value="2"
						/>
						value="4"
					</TabList>
				</Box>
				<TabPanel value="1">
					<Movie />
				</TabPanel>
				<TabPanel value="2">
                <FreeTv />
                </TabPanel>
			</TabContext>
		</Box>
	);
}
