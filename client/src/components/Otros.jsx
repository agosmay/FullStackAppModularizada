import React from 'react';
import axios from 'axios';
import { useEffect , useState } from 'react';

const Otros  = () => {
	
	
	
	const [data,setData]= useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError]= useState(null);

	
	
	const fetchingData = async () => {
		try {
			const res = await axios.get('http://localhost:3000/api/otros');
			setData(res.data);
			
		}catch(err){
			setError(true);
		}finally {
			setIsLoading(false);
		}
		
		
	}
	
	
	useEffect(()=> {
		fetchingData();
		
		
	},[])
	
	
	return (
		<>
			 <div>
				  {data.map(item => (
					<div key={item.id}>{item.name}</div>
				  ))}
			</div>
		</>
	);
}

export default Otros;