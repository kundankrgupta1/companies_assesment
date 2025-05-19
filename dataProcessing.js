// 1st method
let arr = [1, 2, 3, [4, 5, [6, 7, [8, 9], [10]], [11, 12], 13], 14, [15, 16], 17]

function flattenArray(arr) {
	let res = []

	for (let i=0; i<arr.length; i++) {
		if (Array.isArray(arr[i])) {
			res.push(...flattenArray(arr[i]))
		} else {
			res.push(arr[i])
		}
	}
	return res
}

console.log(flattenArray(arr))

// 2nd Method
let arr = [
	{ type: 'fruit', name: 'apple' },
	{ type: 'veg', name: 'carrot' },
	{ type: 'fruit', name: 'banana' },
	{ type: 'veg', name: 'spinach' },
	{ type: 'fruit', name: 'orange' },
	{ type: 'veg', name: 'potato' },
	{ type: 'veg', name: 'bringle' }
]

let res = []

for (let el of arr) {
	key = el.type

	if (!res[key]) {
		res[key] = [el]
	} else {
		res[key].push(el)
	}
}

console.log(res)

let newData = arr.reduce((acc, curr) => {
	let key = curr.type
	if (!acc[key]) {
		acc[key] = [curr]
	} else {
		acc[key].push(curr)
	}
	return acc
}, {})

// deep clone

// 3rd method

let p1 = {
	name: "kundan",
	add: {
		city: "Bengalore",
		state: "Karnatka",
		pin: "123456",
		appartment : {
			room: "5A",
			floor: "2nd"
		}
	}
}

let newObj = JSON.parse(JSON.stringify(p1))
p1.add.city = "Gopalganj"
console.log(p1)
console.log(newObj)

// 4th method

Array.prototype.myMap = function (cb) {
	let newArr = []

	for (let i = 0; i < this.length; i++) {
		let temp = cb(this[i], i, this)
		newArr.push(temp)
	}

	return newArr;

}

let arr = [1, 2, 3].myMap((e)=> e * 2)

console.log(arr)


// 5th method PollyfillReduce()

Array.prototype.myReduce = function (cb, initial) {
	let acc = initial
	for (let i = 0; i < this.length; i++) {
		acc = cb(acc, this[i], i, this)
	}
	return acc
}

let arr = [1, 2, 3, 4, 5]
let sum = arr.myReduce((acc, curr) => acc + curr, 0)
console.log(sum)



