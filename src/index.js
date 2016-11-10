import express from 'express';

const app = express();


 function canonize(fullName) {
   console.log(fullName.length);
   const localFullName = fullName.split(' ');
   if (localFullName.length > 3) {
     return 'Invalid fullname';
   }
   if (localFullName.length == 1) {
       return localFullName[0];
   }
   if (localFullName.length == 2) {
     return localFullName[1]+ ' '+(localFullName[0].slice(0,1) + '.');
   }
   let array = (localFullName[2]) +' ' +(localFullName[0].slice(0,1) + '.') + ' '+(localFullName[1].slice(0,1) + '.');

  return array;
}

app.get('/task2B',function (req,res) {

  const fullName = canonize(req.query.fullname.toString());
  return res.json({
    fullName,
  });
});

app.listen(3000, function () {
 console.log('.!.');
})
