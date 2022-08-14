import fetch from "node-fetch"

// var dice = 3;
// var sides = 6;
// var query = `query RollDice($dice: Int!, $sides: Int) {
//   rollDice(numDice: $dice, numSides: $sides)
// }`;


function main() {
    var url = "http://localhost:4000/graphql"
    var courseID = 1;

    var query = `query getSingleCourse($courseID: Int!) {
    course(id: $courseID) {
     title
     author
     description
     topic
     url
    }
   }`;

   console.log(JSON.stringify({
    query,
    variables: { courseID },
}))

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { courseID },
        })
    })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
}

main()