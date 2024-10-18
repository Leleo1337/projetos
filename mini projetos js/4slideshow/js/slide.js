import { loadImages, images, containerItems} from "./images.js";

loadImages(images,containerItems)

let items = document.querySelectorAll('.item')

export const slide = {
    previous:() =>{
        const lastItem = items[items.length - 1]
        containerItems.insertBefore( lastItem, items[0])
        items = document.querySelectorAll('.item')
    },
    next: () =>{
            containerItems.appendChild(items[0])
            items = document.querySelectorAll('.item')
    }
}