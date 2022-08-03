//ex1

const emailCompany = users.map((u) => {
  return { email: u.email, companyName: u.company.name };
});

//ex2

const zipCodeFive = users.filter((u) => u.address.zipcode[0] === "5");

//ex3

const zipCodeFiveId = users
  .filter((u) => u.address.zipcode[0] === "5")
  .map((u) => u.id);

//ex4

const names = users
  .map((u) => u.name)
  .filter((n) => n[0].toLowerCase() === "c");

//ex5

const doesAllLiveSC = users.every((u) => u.address.city === "South Christy");

//ex6

const findUser = (suite) =>
  console.log(users.find((u) => u.address.suite === suite).company.name);

//ex7

const printInfo = user => console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`) users.forEach(printInfo)
