import React from 'react'



function UserDetails({ User }) {
    console.log(User)
    return (
        <div>
            {/* {User.name} */}
            <li>
                name : {User.name}
            </li>
            <li>
                Username : {User.username}
            </li>
            <li>
                Email: {User.email}
            </li>
            <li>
                phone: {User.phone}
            </li>
            <li>
                website: {User.website}
            </li>
            <hr />

            <h1>Address</h1>
            <li>{User.address.city} , {User.address.street} , {User.address.zipcode} , {User.address.suite}</li>
            <li>{User.address.geo.lat} , {User.address.geo.lng}</li>




        </div>


    )
}


export default UserDetails
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const Users = await res.json();

    const paths = Users.map(user => ({
        params: { id: user.id.toString() },
    }));
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const User = await res.json();

    return { props: { User } };
}
