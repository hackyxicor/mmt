# Hotel List App

## Steps to run app

1. Install Expo App from Playstore/App Store
2. Scan QR code from https://exp.host/@hkxicor/mmt

## Approach

1. Added 'id' field to hotel object
2. converted list of hotels into dictionary of following pattern

```js
{
    1: {
        name: "xyz1",
        address: {}
    },
    2: {
        name: "xyz2",
        address:{}
    },
    ...
}
```

3. Sorted results are stored in memory in array of ids

```js
const sortedResults = {
    default: [1,2,3,4,5,6,...],
    price: [6,1,2,5,....]
}

```

Thus if user repeat any operation in that case stored result will be used insted of sorting it again
