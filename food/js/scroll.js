/*scroll reveal lib */
export default function reveal(){
    ScrollReveal().reveal('#content-wrapper', {
        distance: '200px',
        duration: 2000,
        origin: 'left',
    });
    
    ScrollReveal().reveal('.card', {
        distance: '350px',
        duration: 1500,
        origin: 'left',
    });
    
    ScrollReveal().reveal('#ratings-container > img', {
        distance: '100px',
        duration: 1250,
        origin: 'left',
    });
    
    ScrollReveal().reveal('.feedback', {
        distance: '100px',
        duration: 1250,
        origin: 'top',
    });
}
