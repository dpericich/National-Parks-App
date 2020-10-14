import images from './weather-images/weather-image'

export const getWeatherTime = (arr) => {
    let currentTime = new Date(arr.dt * 1000);
    let hours = currentTime.getHours();
    return `${hours}:00`
}

export const getWeatherImage = (arr) => {
    let icon = arr.weather[0].icon;
    console.log(icon)
    let correctIcon = images.filter(item => item.id === icon)
    return correctIcon[0].src
    console.log(images)
}