'use strict'

function Country(title, capital, population, area) {
	this.title = title
	this.capital = capital
	this.population = population
	this.area = area

	this.showCountry = function() {
		return `Country: ${this.title}, capital: ${this.capital}, population: ${this.population}, area: ${this.area}`
	}
}

const country1 = new Country('Ukraine', 'Kiev', '42000000', '603700')
const country2 = new Country('Japan', 'Tokio', '124000000', '377974')
