import { useState, useEffect } from 'react';
import Link from '../components/Link';
import List from '../components/List';
import './Profile.css'


function Profile({ userName }) {

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

    

    const items = [
        {
            field: 'Html_url',
            value: <Link
                url={profile.html_url}
                title={profile.html_url}
                />,
        },

        {
            field: 'Repos_url',
            value: <Link
                url={profile.repos_url}
                title={profile.repos_url}
                />,
        },

        { field: 'Name', value: profile.name },
        { field: 'Company', value: profile.company },
        { field: 'Location', value: profile.location },
        { field: 'Email', value: profile.email },
        { field: 'Bio', value: profile.bio },

    ];

    return (
        <div className='Profile-container'>
            <h2>About me</h2>

            {loading ?
                (<span>Loading....</span>) :
                (
                    <div>
                        <img className='Profile-avatar' src={profile.avatar_url} alt={profile.name} />
                        <List items={items} />
                    </div>
                )
            }
        </div>
    )
}


export default Profile;
