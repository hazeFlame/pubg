HEADERS: {
  Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMzQzMzg3MC1mNjBhLTAxMzYtM2YwNC0xNzc1MzNlMGE0ZTQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ3MDE3NTYzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1Ymctd2VjaGF0YXBwIn0.veFsynH8vBbuMRAljTzCwUgr1UuO8PYanSwcrjIhmUg
  Accept: 'application/vnd.api+json'
}

baseUrl: https://api.pubg.com/shards/steam


 // 玩家最近信息 `/players?filter[playerNames]=${DECIDED-HAZE}&filter[playerIds]=${account.f7c490b3a8b045aeb56b81ce831b15d3}` 

resp: {
  "data":[
    {
      "type": "player",
      "id": "account.f7c490b3a8b045aeb56b81ce831b15d3",
      "attributes":{"shardId": "steam", "createdAt": "2019-01-09T10:20:50Z", "updatedAt": "2019-01-09T10:20:50Z", "patchVersion": "",…},
      "relationships":{"matches":{"data":[{"type": "match", "id": "390b66a4-3b3a-4a8e-bb75-ef4552daf4d0"…},
      "links":{"self": "https://api.playbattlegrounds.com/shards/steam/players/account.f7c490b3a8b045aeb56b81ce831b15d3",…}
    }
  ],
  "links":{
    "self": "https://api.pubg.com/shards/steam/players?filter[playerNames]=DECIDED-HAZE"
  },
  "meta":{}
}


// 玩家信息 `/players/${account.f7c490b3a8b045aeb56b81ce831b15d3}/seasons/lifetime`

// 单局信息 `/matches/${993e4f93-a738-4202-ab93-2ee267244dd0}`
