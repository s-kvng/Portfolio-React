import { useState, useEffect } from 'react';


function Profile({userName}) {

    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});

    useEffect(() => {

        async function fetchData() {

            const data = await fetch(`https://api.github.com/users/${userName}`);
            const results = await data.json();

            if (results) {
                setProfile(results);
                setLoading(false);
            }
        }

        fetchData();
    }, [userName]);

    return (
        <div>
            <h2>About me</h2>

            {loading ? 
                (<span>Loading....</span>) : 
                ( <ul>
                    
                </ul>)
            }
        </div>
    )
}


export default Profile;
