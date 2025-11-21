const users = ['Mark', 'Andrew', 'Ahmed'];

const userDetails = {
    userName: users[2],
    employeeId: users.indexOf(users[2]),
    company: 'ABC Company'
};

// export default users;
export { users, userDetails };