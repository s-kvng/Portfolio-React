import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import List from '../components/List';
import Link from '../components/Link';


function Project({userName}){

    const [loading , setLoading] = useState(true);
    const [project , setProject] = useState([]);
    const {name} = useParams();
   
    useEffect(() =>{

        async function fetchData(){

            const data = await fetch(`https://api.github.com/repos/${userName}/${name}`)
            
            const result = await data.json();

            console.log(userName, name)
            console.log(result);    
            if(result){
                setProject(result);
                setLoading(false);
            }


        }

        if(userName && name){
            fetchData();
        }
    }, [userName, name]);


    const items = [

        {
            field : 'visibility',
            value : project.visibility
        },
        {
            field : 'Html_url',
            value : <Link url={project.html_url} title={project.html_url} />
        },
    ]

    return (

        <div className='Project-container'>
            <h2>Projects : {project.name}</h2>

            {loading ? <span>Loading...</span> : 
            <div>
                <List items={items}/>
            </div> }
        </div>
    );
}


export default Project;