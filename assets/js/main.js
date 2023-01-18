let navbar = document.getElementById("navbar");
window.addEventListener('scroll',function(){
    if(this.scrollY > 50){
        navbar.classList.replace('bg-transparent','bg-white');
        navbar.classList.add('shadow');
    }
    else{
        navbar.classList.replace('bg-white','bg-transparent');
        navbar.classList.remove('shadow');
    }
});

let links = document.querySelectorAll(".nav-link");
for(var i = 0;i<links.length;i++){
    links[i].addEventListener('click',function(e){
        e.preventDefault();
        let aim = e.target.getAttribute("href");
        let sectionPosition = document.querySelector(aim).offsetTop;
        window.scroll({
            top: sectionPosition,
            behavior: "smooth",
        })
    });
}

let moveToTop = document.getElementById('move-to-top');
let servicesSection = document.getElementById('services');

window.addEventListener('scroll',function(){
    let servicesPosition = servicesSection.offsetTop;
    if(this.window.scrollY > servicesPosition){
        moveToTop.style.opacity = '1';
    }
    else{
        moveToTop.style.opacity = '0';
    }
})

moveToTop.addEventListener('click',function(e){
    e.preventDefault();
    window.scroll({
        top:0,
        behavior: "smooth",
    })
});

let loading = document.querySelector('.loading');
// loading screen 

window.addEventListener('load',function(){
    setTimeout(function(){
        loading.style.opacity = '0';
        document.body.style.overflow = 'visible';
        loading.style.zIndex = '-55';
    },2000)
})