let sections=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("header nav  a");
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>=offset && top <offset+height)
        {
                navlinks.forEach(links=>{
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
        }
    });
};
window.onscroll=()=>{
    let header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);

}
let mode=document.querySelector(".mode");
let body=document.querySelector("body");
let at=document.querySelector(" nav a");
let flag=0;
mode.addEventListener("click",()=>{
    if(flag==0)
    {
        mode.innerHTML="<i class='bx bxs-moon' ></i>";
        flag=1;
        body.style.background="White";
        body.style.color="black";
        header.sticky.style.background="white";
        
    }
    else if(flag=1)
    {
        mode.innerHTML="<i class='bx bx-sun'></i>";
        flag=0;
        body.style.background="var(--bg-color)";
        body.style.color="white";
        at.style.color="--var(--main-color)";
    }
});
