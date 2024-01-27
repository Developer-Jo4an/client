// Array.prototype.myMap = function (callback) {
// 	const newArray = []
// 	for (let i = 0; i < this.length; i++) newArray.push(callback(this[i], i, array))
// 	return newArray
// }
//
//
// const array = [1, 2, 3, 4, 5]
// console.log(array.myMap((item, index) =>{
// 	if (item % 2 === 0) return item * index
// }))


class ModifiedArray extends Array {
	constructor(...args) { super(...args) }
	myMap(callback) {
		const newArray = []
		for (let i = 0; i < this.length; i++) newArray.push(callback(this[i], i, array))
		return newArray
	}
}

const array = new ModifiedArray(1, 2, 3, 4, 5)

console.log(array.map(index => index * 2))
