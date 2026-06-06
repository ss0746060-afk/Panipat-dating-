function like(element) {
    if(element.classList.contains('fa-regular')) {
        element.classList.replace('fa-regular', 'fa-solid');
        element.style.color = "#ed4956";
    } else {
        element.classList.replace('fa-solid', 'fa-regular');
        element.style.color = "black";
    }
}
