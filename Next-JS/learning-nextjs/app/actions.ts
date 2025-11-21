'use server';

// All user related server actions are defined here...!

const fetchAllUsers = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    try {
        const fetchUsers = await fetch(apiUrl);
        const jsonData = await fetchUsers?.json();
        return jsonData;
        // console.log('Users response: ', jsonData);
    }

    catch (error) {
        console.log('Er is fetching users: ', error);
    };
};

export { fetchAllUsers };