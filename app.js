// const express = require('express');
// const app = express();


// app.get('/' , (req ,res) => {
//  res.status(200).json({
//      status: 200 , 
//      data: 'i am Index'
//  })
// });

// app.get('/data' , (req ,res ) => {
//    res.status(200).json({
//        status: 200 ,
//        data: 'I am data page'
//    })

// })


// app.listen(8080 , 'localhost' , () => {
  
//     console.log('start running is port 8080');
// });



const express = require('express');
const app = express();

app.get('/' , (req , res) => {
   res.status(200).json({
       status: '200' ,
       data: 'I am homepage'
   })
});

app.listen(3000 , 'localhost' , () => {
    console.log('start port running 3000');
})