const profile = {
    name: 'Alex',
    age: 35,
    coords: {
        lat: 40,
        lng: 56,
    }
}

const { age }: {age: number} = profile;
const {coords: { lat, lng }} : { coords: { lat: number, lng: number } } = profile;
console.log(age, lat, lng);