const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var ans = calculateSum(40);
//console.log(ans);
    res.send("the sum till 40 is "+ ans)
})


function handlerequest(req,res){
 //how to send query params 
//?counter=30
    var counter = req.query.counter;
    const answer = calculateSum(counter)
    res.send("the sum is"+ answer)
}

function handlerequest2(req,res){
 //how to send query params 
//?num1=30&num2=324
    var num1 = req.query.num1;
    var num2=req.query.num2;
    const answer = twosum(num1,num2)
    res.send("the sum is"+ answer)
}

app.get('/add', handlerequest)

app.get('/add2',handlerequest2)

// app.use(express.json());

// // Example route handling PUT request
// app.put('/api/users/:id', (req, res) => {
//   const userId = req.params.id;
//   // Assuming there's some logic to update the user with the given ID using req.body data
//   // This is a simple example, you should validate and handle the data appropriately in a real application
//   // Update user logic...
//   res.send(`Updated user with ID ${userId}`);
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function twosum(num1,num2){
    const sum=parseInt(num1) + parseInt(num2);

    return sum;

}

function calculateSum(counter){
    var sum=0;
    for(var i=0;i<counter;i++){
        sum = sum+ i;
    }
    return sum
}


//  url ->route-> method