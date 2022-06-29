'use strict';

///////////////////////////////////////
// Default Parameters

// const bookings = [];

// const createBooking = function (
//   flightNumber,
//   numberOfPassangers = 1,
//   price = 199 * numberOfPassangers
// ) {
//   // ES5
//   // numberOfPassangers = numberOfPassangers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNumber,
//     numberOfPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 23432432432432,
// };

// const checkIn = function (flightNumber, passenger) {
//   flightNumber = 'LH9990';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 23432432432432) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing
// // const flightNumber = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

///////////////////////////////////////
// Functions Accepting Callback Functions

// const oneWord = function (string) {
//   return string.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (string) {
//   const [first, ...others] = string.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (string, fnctn) {
//   console.log(`Original string: ${string}`);
//   console.log(`Transformed string ${fnctn(string)}`);

//   console.log(`Transformed by: ${fnctn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('Hi');
// };
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////
// Functions Returning Functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // Challenge
// const greetArray = greeting => name => console.log(`${greeting} ${name}`);

// greetArray('Hi')('Jonas');

///////////////////////////////////////
// The call and apply Methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNumber, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// // console.log(lufthansa); // Array of 2 bookings

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);
// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);
// book.call(swiss, ...flightData);
