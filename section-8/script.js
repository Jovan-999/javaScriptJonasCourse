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
