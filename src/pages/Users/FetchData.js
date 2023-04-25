import Link from 'next/link';
import React from 'react'

function FetchData({ users }) {
    return (
        <div>
            <h1>Fetch User Data from Json Placeholder</h1>
            <p>USers</p>
            {/* <li></li> */}
            {users && users.map(user => (
                <>
                    <li>
                        <Link href={`/Users/${user.id}`} key={user.id}>
                            {user.name}
                        </Link>
                    </li>

                </>
            ))}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    };
};

export default FetchData;
