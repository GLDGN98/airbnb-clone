import { asyncStorageService } from "./async-storage.service.js"
import { storageService } from "./storage-service.js"
import {utilService} from './util.service.js';
import filterNames from '../data/filter-names.json'
import destinations from '../data/destinations.json'


import originalStays from "../data/stays.json"

const STORAGE_KEY = "staysDB"

_createStays()
const stayIndexIncrement = 20


export const stayService = {
  query,
  getById,
  save,
  remove,
  formatDateRange,
  getStayRating,
  getStays
}
window.cs = stayService

async function query(filterBy = { txt: "", price: 0 }) {
  return await asyncStorageService.query(STORAGE_KEY)

  // return httpService.get(STORAGE_KEY, filterBy)
}

function getStayRating(stay) {
  return (
      stay?.reviews?.reduce((acc, review) => {
          const values = Object.values(review.moreRate)
          const average = values.reduce((sum, value) => sum + value, 0) / values.length

          return acc + average
      }, 0) / stay.reviews.length
  )
}

function getById(stayId) {
  return asyncStorageService.get(STORAGE_KEY, stayId)
  // return httpService.get(`stay/${stayId}`)
}

async function remove(stayId) {
  await asyncStorageService.remove(STORAGE_KEY, stayId)
  // return httpService.delete(`stay/${stayId}`)
}


async function getStays(idx = 0, filterBy = getEmptyFilterBy(), searchBy) {
  try {
      const stays = await query()
      const filteredStays = _filterStays(stays, filterBy)
      return filteredStays.slice(stayIndexIncrement * idx, stayIndexIncrement * idx + stayIndexIncrement)
  } catch (err) {
      throw err
  }
}

function getEmptyFilterBy() {
  return {
      selectedFilter: '',
      minPrice: 20,
      maxPrice: 1000,
      types: [],
  }
}

function _filterStays(stays, filterBy) {
  let filteredStays = stays
  if (filterBy.selectedFilter) {
      filteredStays = filteredStays.filter(stay => stay.filters.includes(filterBy.selectedFilter))
  }
  if (filterBy.minPrice > 0) {
      filteredStays = filteredStays.filter(stay => stay.price > filterBy.minPrice)
  }
  if (filterBy.maxPrice) {
      filteredStays = filteredStays.filter(stay => stay.price < filterBy.maxPrice)
  }
  if (filterBy.types.length) {
      filteredStays = filteredStays.filter(stay => {
          return filterBy.types.includes(stay.type)
      })
  }
  return filteredStays
}

async function save(stay) {
  var savedStay
  if (stay._id) {
    savedStay = await asyncStorageService.put(STORAGE_KEY, stay)
    // savedStay = await httpService.put(`stay/${stay._id}`, stay)
  } else {
    // Later, owner is set by the backend
    // stay.owner = userService.getLoggedinUser()
    savedStay = await asyncStorageService.post(STORAGE_KEY, stay)
    // savedStay = await httpService.post("stay", stay)
  }
  return savedStay
}

function formatDateRange(startDate, endDate) {
  const startMonth = startDate.toLocaleString("default", { month: "short" }) // Get short month name from start date
  const endMonth = endDate.toLocaleString("default", { month: "short" }) // Get short month name from end date
  return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`
}

function generateRandomDateRange() {
  const startDate = new Date()
  startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 180)) // Add random number of days (up to 6 months) to current date
  const numDays = Math.floor(Math.random() * 7) + 2 // Generate a random number between 2 and 8
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + numDays - 1) // Set end date based on start date and number of days
  return [startDate, endDate]
}

function _createStays() {
  const stays = utilService.loadFromStorage(STORAGE_KEY)
  if (!stays || !stays.length) {
      let stays = _makeStays()
      utilService.saveToStorage(STORAGE_KEY, stays)
  }
}


function _makeStays() {
  let stays = originalStays
  stays.sort(() => Math.random() - 0.5)
  stays = stays.map((stay) => {
      stay._id = utilService.makeId()
      stay.filters = [
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
          utilService.getRandomItemFromArr(filterNames),
      ]
      stay.loc.destination = utilService.getRandomItemFromArr(destinations)
      stay.takenDates = []
      stay.datesForPreview = generateRandomDateRange()
      return stay
  })
  return stays
}


