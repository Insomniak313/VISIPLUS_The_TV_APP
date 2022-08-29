import axios from "axios"

export const API_URL = 'https://api.tvmaze.com';

export async function search(term) {
  return axios.get(API_URL + '/search/shows?q=' + term);
}
