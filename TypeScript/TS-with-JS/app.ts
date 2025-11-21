// const str: string = 'Hello TS';
// console.log(str);

// let a: string = 'abc';
// // a = 'xyz';
// console.log(a);

// const n: number = 50;
// console.log(n);

// const fName: string = 'Prince';
// const lastName: string = 'John';
// const fullName: string = fName + " " + lastName;
// console.log(fullName);

// const fruitsArr: string[] = ['apple', 'banana', 'mango'];
// console.log(fruitsArr);

// const numArr: number[] = [1, 2, 3, 4];
// console.log(numArr);


// for (let i: number = 1; i <= 10; i++) {
//     console.log(i);
// }


// const greetUser = (user: string) => {
//     console.log(`Hello ${user}`);
// };

// greetUser('Ahmed');

// const userInfo = (
//     user: string,
//     age: number,
//     skills: string[]
// ) => {
//     console.log(user, age, skills);
// };

// userInfo('Ahmed', 28, ['JS', 'TS']);

// const isEdit: boolean = false;
// console.log(isEdit);


// interface UserType {
//     name: string,
//     age: number,
//     title: string,
//     skills?: string[]
// };

// const user: UserType = {
//     name: 'Ahmed',
//     age: 28,
//     title: 'SE',
//     skills: ['JS', 'TS']
// };

// const user2: UserType = {
//     name: 'Prince',
//     age: 38,
//     title: 'Designer'
// };

// console.log(user);
// console.log(user2);




// interface UserType {
//     name: string,
//     age?: number
// };

// const objArr: UserType[] = [
//     {
//         name: 'Ahmed',
//         age: 28
//     },
//     {
//         name: 'Prince'
//     }
// ];
// console.log(objArr);








// Generic types...!
// interface User<Type> {
//     name: string,
//     email: string,
//     data: Type
// }

// const user_1: User<string> = {
//     name: 'Ahmed',
//     email: 'abc@xyz.com',
//     data: 'User testing'
// };
// console.log(user_1);

// const user_2: User<string[]> = {
//     name: 'Ahmed',
//     email: 'abc@xyz.com',
//     data: ['a', 'b', 'c']
// };
// console.log(user_2);





// interface Company<Type extends object> {
//     comName: string,
//     multipleLocations: boolean,
//     departments: Type
// }


// const company1: Company<{ mobileDep: boolean, sap: boolean }> = {
//     comName: 'ABC company',
//     multipleLocations: true,
//     departments: {
//         mobileDep: true,
//         sap: false
//     }
// }
// console.log(company1);





// interface Company<Type extends { hrDep: boolean }> {
//     comName: string,
//     multipleLocations: boolean,
//     departments: Type
// }


// const company1: Company<{
//     mobileDep: boolean,
//     sap: boolean,
//     hrDep: boolean
// }> = {
//     comName: 'ABC company',
//     multipleLocations: true,
//     departments: {
//         mobileDep: true,
//         sap: false,
//         hrDep: true
//     }
// }
// console.log(company1);


// Enum
// enum orderStatus {
//     pending = 'pending',
//     cancelled = 'cancelled',
//     delivered = 'delivered'
// };

// const orders: { orderId: string, orderStatus: string }[] = [
//     {
//         orderId: 'abc123',
//         orderStatus: orderStatus.pending
//     },
//     {
//         orderId: 'xyz456',
//         orderStatus: orderStatus.delivered
//     },
//     {
//         orderId: 'mno789',
//         orderStatus: orderStatus.cancelled
//     },
// ];
// console.log(orders);







// function functionTesting(): void {
//     // const a = 'b';
//     // console.log(a);
//     return 0
// }

// functionTesting();

// function functionTesting(): string {
//     // return "Hello TS";
//     return 8
// };

// function functionTesting(): number[] {
//     // return "Hello TS";
//     return [1, 2, 3]
// };

// const res = functionTesting();
// console.log(res);


// type User = {
//     name: string;
//     age: number;
//     title: string;
// };
// const user1: User = {
//     name: "John",
//     age: 20,
//     title: "SE"
// };

// console.log(user1);



// interface User {
//     name: string;
// }

// interface User {
//     age: number
// }

// const user: User = {
//     name: "Prince",
//     age: 38
// };

// console.log(user);














// type User = {
//     name: string;
// }

// type User = {
//     age: number
// }

// const user: User = {
//     name: "Prince"
// };

// console.log(user);



// Type Union

// type ID = string | number;

// const id: ID = new Date().getTime();
// console.log(id);



// Type Literal

// type Status = 'success' | 'error';

// const apiStatus: Status = 'success';
// console.log(apiStatus);



// Tuple type in TS

// type ArrTypes = [string, number?, number?, ...string[]];

// const arr: ArrTypes = ['abc'];
// const arr1: ArrTypes = ['abc', 1];
// const arr2: ArrTypes = ['abc', 2, 3, 'xyz', 'user', 'testing'];
// console.log(arr2);


// const apiObj: any = {
//     apiStatus: true,
//     srarusCode: 200,
//     data: [],
//     url: "api url"
// };
// console.log(apiObj);