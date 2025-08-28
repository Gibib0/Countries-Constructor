'use strict'

function Country (title, capital, population, area) {
	this.title = title
	this.capital = capital
	this.population = population
	this.area = area

	this.showCountry = function() {
		return `Country: ${this.title}, capital: ${this.capital}, population: ${this.population}, area: ${this.area}`
	}
}