const filterArr = (type) => {
    const arr = [{
        name: "数组",
        isLevel: 1
    }, { name: '字符串', isLevel: 2 }]
    if (type == 1) {
        return arr.filter(v => v.isLevel === type)
    }
    return arr
}


console.log(filterArr())