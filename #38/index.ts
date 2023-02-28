function describe_city(city:string,country:string = "unknown"){
    console.log(`${city} is in ${country}`)
}
describe_city("Karachi","Pakistan");
describe_city("london","England");
describe_city("Sydney");
describe_city("Washington","America");