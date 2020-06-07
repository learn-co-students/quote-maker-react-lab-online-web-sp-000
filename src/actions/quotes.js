// TODO: Create action creators as defined in tests
import React, { Component } from 'react';

export function addQuote(quoteObject) {
  //return {type: "ADD_QUOTE", quote: quoteObject}
  quoteObject.votes = 0;
  return {
    type: "ADD_QUOTE",
    quote: Object.assign({}, quoteObject, { votes: 0 })
    //quoteObject WRONG
  }
}
// export const addQuote = (quoteObject) => {
//   return {
//     type: "ADD_QUOTE",
//     quote: Object.assign({}, quoteObject, { votes: 0 })
//   }
// }


// export function removeQuote(quoteIdInteger) {
//   //should return an Object with a type of "REMOVE_QUOTE" and a quoteId
//   return {type: "REMOVE_QUOTE", quoteId: quoteIdInteger}
// }
export const removeQuote = (quoteIdInteger) => {
  return {type: "REMOVE_QUOTE", quoteId: quoteIdInteger}
}


// export function upvoteQuote(quoteIdInteger) {
//   //should return an Object with a type of "UPVOTE_QUOTE" and a quoteId
//   return {type: "UPVOTE_QUOTE", quoteId: quoteIdInteger}
// }
export const upvoteQuote = (quoteIdInteger) => {
  return {type: "UPVOTE_QUOTE", quoteId: quoteIdInteger}
}

// export function downvoteQuote(quoteIdInteger) {
//   // should return an Object with a type of "DOWNVOTE_QUOTE" and a quoteId
//   return {type: "DOWNVOTE_QUOTE", quoteId: quoteIdInteger}
// }
export const downvoteQuote = (quoteIdInteger) => {
  return {type: "DOWNVOTE_QUOTE", quoteId: quoteIdInteger}
}
