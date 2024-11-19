const companies = [
    { companyName: "TechNova", category: "Technology", startDate: "2001", endDate: "2016" },
    { companyName: "HealthCore", category: "Healthcare", startDate: "1998", endDate: "2019" },
    { companyName: "GreenFuture", category: "Construction", startDate: "2005", endDate: "2023" },
    { companyName: "EduWorld", category: "Education", startDate: "2010", endDate: "2020" },
    { companyName: "AutoDrive", category: "Automobile", startDate: "2000", endDate: "2021" },
    { companyName: "upholstry", category: "Construction", startDate: "2013", endDate: "2023" },
    { companyName: "BuildSmart", category: "Construction", startDate: "1995", endDate: "2018" },
    { companyName: "StyleTrend", category: "Fashion", startDate: "2012", endDate: "2024" },
    { companyName: "FinanceHub", category: "Finance", startDate: "2008", endDate: "2017" },
    { companyName: "MediaMax", category: "Entertainment", startDate: "2016", endDate: "2023" }
  ];
  const ages = [12, 18, 21, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75];



//   for loop 
//   const elderly = [];

//   for(i = 0; i < ages.length; i++){
//     if(ages[i] >= 40) {
//         elderly.push(ages[i]);
//     }
//   }
// console.log(elderly);


//   filter()
// ES5 filter
// const elderly =ages.filter(function(age){
//     if(age >= 40){
//         return true;
//     }
// })

// ES6 filter
// const elderly = ages.filter(age => age >= 40);
// console.log(elderly);


// get list of companies under Construction category using the ES6 filter
// const constructionCompanies = companies.filter(company => company.category === 'Construction');


// map()
// (ES5)
// const companyNames = companies.map(function(company){
//     return company.category;
// });

// (shorthand)
// const companyName = companies.map(company => company.category);
// console.log(companyName);

// using the map and filter together
// const numgt40squared = ages.filter(age => age >= 40).map(age => age ** 2);

// same as 
// const numgt40squared = ages
// .filter(age => age >= 40)
// .map(age => age ** 2);
// console.log(numgt40squared);


// sorts ()
// const ascendingages = ages.sort((a,b) => b - a);
// console.log(ascendingages);

// reduce()

// let ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum);

// let totalDates = companies.reduce((total, company) => total + (company.endDate - company.startDate), 0);
// console.log(totalDates);

let combined = ages
  .map(age => age ** 3)
  .filter(age => age.toString().length >= 5)
  .sort((a, b) => b - a)
  .reduce((total, age) => total + age, 0);

console.log(combined);