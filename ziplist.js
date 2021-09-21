const testList1 = ['a', 'b', 'c'];
const testList2 = ['1', '2', '3']

function ziplist(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i]);
    resultList.push(list2[i])
  }
  return resultList;
}

function ziplistTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(ziplistTheSimpleWay(testList1, testList2));
