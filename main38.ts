//Exercise no 38:
//Cities:
function describe_city(city:string, country:string="Turkey."):void{
    console.log(`${city} is in ${country}`);
}
describe_city('Istanbul');
describe_city('Paris','France.');
describe_city('Lisbon', 'Portugal.');
describe_city('Berlin','Germany.');