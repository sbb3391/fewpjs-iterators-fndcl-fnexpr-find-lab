const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "N/A"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(arr) {
  let result = arr.find( function(object) {
    return object.result === "W";
  })

  return !!result ? result.year : undefined
}
