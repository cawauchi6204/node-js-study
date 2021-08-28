const {
  echo,
  area
} = require('./methods')
const Lamborgini = require('./lamborgini')
const config = require('./config')

echo("Hello world")
console.log('indexの7行目のarea(5,10)は' + area(5, 10))

const car = new Lamborgini('lamborgini')
car.drive()
car.echo()

console.log('indexの15行目のconfigは' + JSON.stringify(config, null, 2))
