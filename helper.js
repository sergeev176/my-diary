

export function getDate() {
    const now = new Date();
    return addZero(now.getDate()) + '-' + addZero(now.getMonth() + 1) + '-' + now.getFullYear();
}

export function difference(date) {
    
    let arrNow = getDate().split('-'); // массив сегодняшнего дня (дд. мм. гггг)
    let arrThisDate = date.split('-'); // массив редактируемого дня

    return (findTimeDate(arrNow) - findTimeDate(arrThisDate)) / 1000 / 60 / 60 / 24;
}

function addZero(num) {
    return num < 10 ? '0' + num : num;
}

function findTimeDate(arr) {
    return new Date(arr[2], arr[1], arr[0]).getTime();
}