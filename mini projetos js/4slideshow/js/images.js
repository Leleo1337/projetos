export const containerItems = document.querySelector('.container-items')

export const images = [
    {'id': '1', 'url':'./img/chrono.jpg'},
    {'id': '2', 'url':'./img/inuyasha.jpg'},
    {'id': '3', 'url':'./img/ippo.png'},
    {'id': '4', 'url':'./img/tenchi.jpg'},
    {'id': '5', 'url':'./img/tenjhotenge.jpg'},
    {'id': '6', 'url':'./img/yuyuhakusho.jpg'},
]

export const loadImages = ( images, containerItems ) => {
    images.forEach(image => {
        containerItems.innerHTML += `
            <div class="item">
                <img src="${image.url}" /img>
            </div>
        `
     })
}