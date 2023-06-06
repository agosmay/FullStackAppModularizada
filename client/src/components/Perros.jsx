import React , { useState, useEffect } from 'react';
import axios from 'axios';

const Perros = () => {
	
	const [data, setData] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	
	
	const fetchingData = async() => {
		
		try{
			
			
			const res = await axios.get("http://localhost:3000/api/perros");
			setData(res.data);
		
			
		}catch(err){
			setError(true)
			
		}finally{
			
			setIsLoading(false);
		}
		
		
	}
	
	
	
	useEffect(()=> {
		
		
		
		fetchingData();
		
	},[])
	
	
	
	
	return (
		<>
			<ul>
			
			{
				data.map((item)=> (
					<li key={item.id}>{item.juegoPreferido}</li>
				))
				
				
			}
			
			</ul>
		</>
	);
	
}

export default Perros;