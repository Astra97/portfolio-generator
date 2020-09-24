const fs = require('fs');
const generatePage = require('./src/page-template.js');


//var commandLineArgs = process.argv;
//console.log(commandLineArgs);

 const profileDataArgs = process.argv.slice(2, process.argv.length);
 const [name, github] = profileDataArgs;

// console.log(profileDataArgs);


// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i+=1){
//     console.log(profileDataArr[i]);
//     }
// };

// printProfileData(profileDataArgs);

// console.log('================');

// profileDataArgs.forEach(profileItem => console.log(profileItem));

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});

  