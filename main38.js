//Exercise no 38
function describe_city(city, country) {
    if (country === void 0) { country = "Turkey"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city('Istanbul');
describe_city('Paris', 'France');
describe_city('Lisbon', 'Portugal');
describe_city('Berlin', 'Germany');
