// let arr = [1, 23, 45, 6, 7, 8568, 'js', 8, 4, 0];
// let str = ['orange', 'apple', 'Banana', 'kiwi']
// let num = [2,5,2,7,9,4,5,1]

// let res = str.filter((value) => {
//     return value.length < 6
// })
// console.log(res);


// let students = [
//     { id: 1, name: 'Ilhom', year: 2003 },
//     { id: 2, name: 'Islom', year: 1998 },
//     { id: 3, name: 'Rustam', year: 2002 },
//     { id: 4, name: 'Mirkomil', year: 2007 },
//     { id: 5, name: 'Sulton', year: 2001 },
//     { id: 6, name: 'Shahzod', year: 2012 },
//     { id: 7, name: 'Hojiakbar', year: 2010 },
//     { id: 8, name: 'Davron', year: 2005 },
//     { id: 9, name: 'Ilhom', year: 2003 },
// ]

// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// let n = [2, 5, 1, 7, 3, 8, 9, 8]

// console.log(Array.from('webbrain', (v) => v.toUpperCase()));

// let obj = { name: 'Ilhom', age: 19 }
// console.log(Object.entries(obj));


// let res = n.filter((value, index, array) => {
//     return array.indexOf(value) === index
// })
// console.log(res);

// console.log(new Set(n));

// let num = [1, [2, [3, [4]]], 5, 6, 7, 8];
// console.log(num);
// console.log(num.flat(Infinity).reduce((s, c) => s + c, 0));

// let num = [1, 2, 3, 4, 5]
// let res = num.reduce((sum, current, i) => {
//     console.log(current,i,current -i);
//     return current -i
// }, 0)
// console.log(res);

// let num = [0, 0, 0, 1, 2, 3, 4, 5, 6];
// console.log(num.copyWithin(0,6,9));

// console.log(arr.fill('web',6,7));



// console.log(arr.every((val)=> typeof val ==='number'));
// console.log(arr.some((val)=> typeof val ==='number'));

// let res = arr.forEach((value,index)=>{
//     console.log(value);
// })
// console.log('=====');
// let resmap = arr.forEach((value,index)=>{
//     console.log(value);
// })


// console.log(res);
// console.log(resmap);

// let res = students.findIndex((value)=>{
//     return value.id == 5
// })

// let res = students.find((value)=>{
//     return value.id == 5
// }).name
// let res = students.find((value)=>{
//     return value.id == 5
// }).name

// let res = students.sort((a, b) => a.name.localeCompare(b.name))
// let res = students.sort((a, b) => b.year - a.year)

// let res = str.sort((a,b)=> a.localeCompare(b))
// let res = arr.sort((a, b) => a - b)

// let res = students.filter((value) => {
//     return value.year == 2002
// })



//Homework
// 1
// let user = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     children: [
//         {
//             id: 1,
//             name: 'Umar',
//             age: 54,
//             children: [
//                 { id: 1, name: 'Asmo', age: 34 },
//                 { id: 2, name: 'Osim', age: 30 },
//                 { id: 3, name: 'Xattob', age: 25 },
//             ]
//         },
//         { id: 2, name: 'Umar', age: 54 },
//         { id: 3, name: 'Umar', age: 54 },
//     ]
// }

// let res = user.children.filter((val) => console.log(val));
// console.log(res);

// 2
// let arr = [
//     { id: 1, name: 'Usmon', job: 'developer' },
//     { id: 2, name: 'Usmon', job: 'developer' },
//     { id: 3, name: 'Usmon' },
//     { id: 4, name: 'Usmon', job: 'developer' },
//     { id: 5, name: 'Usmon' }
// ]
// let res = arr.filter((value) => value.job);
// console.log(res);

// 3
// let obj = {
//     id: 1, name: 'Usmon', job: 'developer'
// }
// let obj1 = { ...objj }
// // Object.assign(obj1, obj);
// console.log(obj, obj1);

// 4
// function chooseRegion(region) {
//     let arr = ['Andijon', 'Namangan', 'Qarshi', 'toshkent'];
//     let res = arr.filter((value) => value.toLowerCase() === region.toLowerCase())
//     if (res.length) {
//         return res[0]
//     } else {
//         let str = 'bizning filallarimiz faqat shu viloyatlarda: ';
//         arr.forEach((value) => str += value + ', ')
//         return str
//     }
// }
// console.log(chooseRegion('jizzax'));

// 5
// let arr = [
//     { id: 3, name: 'Usmon', parol: '1231' },
//     { id: 1, name: 'Umar', parol: '1241' },
//     { id: 5, name: 'Jasur', parol: '3452' },
//     { id: 2, name: 'Asmo', parol: '2312' },
//     { id: 4, name: 'Salohiddin', parol: '3421' },
// ]

// function Login(userName, parol) {
//     let res = arr.filter((value) => value.name.toLowerCase() === userName.toLowerCase() && +value.parol === parol);
//     if (res.length) {
//         console.log('Hush kelibsiz');
//     } else {
//         console.log('login yoki parol xato');
//     }
// }

// Login('Umar', 1241)
