function handleResize(){
    const width = window.innerWidth;

    if (width <= 500) {
        document.body.style.backgroundColor = "blue";
    } else if  (width > 500 && width <800) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

window.addEventListener("resize", handleResize);
