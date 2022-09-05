

const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
wifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
closeIcon = wrapper.querySelector(".close-icon");


window.onload = () => {
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = () =>{
           if(xhr.status == 200 && xhr.status < 300){
            toast.classList.remove("offline");
            title.innerText = "You're now online";
            subTitle.innerText = "Hurray! Your internet is connected.";
            wifiIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><path d="M12,15a3,3,0,1,0,3,3A3,3,0,0,0,12,15Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm0-8a7.06,7.06,0,0,0-4.95,2.05,1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0,5,5,0,0,1,7.08,0,1,1,0,0,0,.7.3A1,1,0,0,0,17,13.05,7.06,7.06,0,0,0,12,11Zm0-4a11.08,11.08,0,0,0-7.78,3.22,1,1,0,0,0,1.42,1.42,9,9,0,0,1,12.72,0,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42A11.08,11.08,0,0,0,12,7Zm10.61.39a15,15,0,0,0-21.22,0A1,1,0,0,0,2.81,8.81a13,13,0,0,1,18.38,0,1,1,0,0,0,1.42,0A1,1,0,0,0,22.61,7.39Z"/></svg>';

            closeIcon.onclick = ()=>{
                wrapper.classList.add("hide")
            }

            setTimeout(() =>{
                wrapper.classList.add("hide")
            }, 4000);

           }else{
            offline();
           }
        }
        xhr.onerror = () =>{
            offline();
        }
        xhr.send();
    }

    function offline(){
        wrapper.classList.remove("hide")
        toast.classList.add("offline");
        title.innerText = "You're now offline";
        subTitle.innerText = "Oops! Your internet is disconnected.";
        wifiIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 24 24"><path d="M6.92,5.51h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.56,6A15.21,15.21,0,0,0,1.4,8.39a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.7-.29A13.07,13.07,0,0,1,6.05,7.46L7.54,9a10.78,10.78,0,0,0-3.32,2.27,1,1,0,1,0,1.42,1.4,8.8,8.8,0,0,1,3.45-2.12l1.62,1.61a7.07,7.07,0,0,0-3.66,1.94,1,1,0,1,0,1.42,1.4A5,5,0,0,1,12,14a4.13,4.13,0,0,1,.63.05l7.66,7.66a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,16a3,3,0,1,0,3,3A3,3,0,0,0,12,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,20ZM22.61,8.39A15,15,0,0,0,10.29,4.1a1,1,0,1,0,.22,2A13.07,13.07,0,0,1,21.2,9.81a1,1,0,0,0,1.41-1.42Zm-4.25,4.24a1,1,0,0,0,1.42-1.4,10.75,10.75,0,0,0-4.84-2.82,1,1,0,1,0-.52,1.92A8.94,8.94,0,0,1,18.36,12.63Z"/></svg>';
    }

    setInterval(()=>{
        ajax();
    }, 100);
}