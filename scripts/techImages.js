function whiteImage(element) {
    var id = element.id;
    var image = document.getElementById(`image-${id}`);
    image.src = `/luanpozzobon_site/assets/images/tech/${id}-white.svg`;
    
}

function originalImage(element) {
    var id = element.id;
    var image = document.getElementById(`image-${id}`);
    image.src = `/luanpozzobon_site/assets/images/tech/${id}-original.svg`;
    
}