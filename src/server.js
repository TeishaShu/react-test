import { createServer } from "miragejs";

// export default function(){
  createServer({
    routes(){
      this.namespace="api"
      this.get("/properties",()=>({
        data:[
          {
            "id":1,
            "city":"Attleboro",
            "state":"Georgia",
            "type":"Apartment",
            "house":60,
            "price":218
          },
          {
            "id":2,
            "city":"Enterprise",
            "state":"Wyoming",
            "type":"Condo",
            "house":63,
            "price":696
          },
          {
            "id":3,
            "city":"South Hill",
            "state":"Montana",
            "type":"Condo",
            "house":36,
            "price":1190
          },
          {
            "id":4,
            "city":"Columbus",
            "state":"Georgia",
            "type":"Townhomes",
            "house":40,
            "price":41
          },
          {
            "id":5,
            "city":"Enterprise",
            "state":"Wyoming",
            "type":"Condo",
            "house":46,
            "price":50
          },
          {
            "id":6,
            "city":"South Hill",
            "state":"Montana",
            "type":"Condo",
            "house":94,
            "price":175
          },
          {
            "id":7,
            "city":"Savannah",
            "state":"Georgia",
            "type":"Condo",
            "house":91,
            "price":324
          },
          {
            "id":8,
            "city":"Enterprise",
            "state":"Wyoming",
            "type":"Condo",
            "house":88,
            "price":46
          },
          {
            "id":9,
            "city":"South Hill",
            "state":"Montana",
            "type":"Condo",
            "house":94,
            "price":78
          },
          {
            "id":10,
            "city":"Sandy Springs",
            "state":"Georgia",
            "type":"Apartment",
            "house":64,
            "price":486
          },
          {
            "id":11,
            "city":"Attleboro",
            "state":"Wyoming",
            "type":"Condo",
            "house":34,
            "price":352
          },
          {
            "id":12,
            "city":"South Hill",
            "state":"Montana",
            "type":"Condo",
            "house":74,
            "price":12
          },
          {
            "id":13,
            "city":"Savannah",
            "state":"Georgia",
            "type":"Townhomes",
            "house":156,
            "price":55
          },
          {
            "id":14,
            "city":"Stonecrest",
            "state":"Georgia",
            "type":"Townhomes",
            "house":78,
            "price":145
          },
          {
            "id":15,
            "city":"Attleboro",
            "state":"Georgia",
            "type":"Single-family",
            "house":453,
            "price":530
          },
          {
            "id":16,
            "city":"Attleboro",
            "state":"Georgia",
            "type":"Townhomes",
            "house":43,
            "price":245
          },
          {
            "id":17,
            "city":"Mableton",
            "state":"Georgia",
            "type":"Single-family",
            "house":46,
            "price":564
          },
        ]
      }))
    }
  })
// }