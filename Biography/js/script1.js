window.onload = function () {
    var mobileMenuItems = document.querySelector(".mobile-menu-items");
    var h = mobileMenuItems.scrollHeight;
    // console.log(mobileMenuItems);
    // console.log(mobileMenuItems.scrollHeight);
    var mobileMenuHeaderBtn = document.querySelector(".mobile-menu-header-button");
    // console.log(mobileMenuHeaderBtn);
    var btnClose = document.querySelector(".mobile-menu-header-button .close");
    // console.log(btnClose);
    var btnOpen = document.querySelector(".mobile-menu-header-button .open");
    // console.log(btnOpen);

    mobileMenuHeaderBtn.onclick = function () 
    {
        mobileMenuItems.classList.toggle("height");
        var height = document.querySelector(".mobile-menu-items.height");
        if (height !== null) 
        {
            mobileMenuItems.style.height = h + "px";
        } else 
        {
            mobileMenuItems.style.height = 0;
        }
        btnClose.classList.toggle("visible");
        btnOpen.classList.toggle("visible");
    }


    var slides = document.querySelector(".slides");
    var mas = slides.querySelectorAll("div");
    var checkContainer = document.createElement("section");
    checkContainer.classList.add("checkContainer");

    for (var j = 0; j < mas.length; j++) 
    {
        var divCheck = document.createElement("article");
        checkContainer.appendChild(divCheck);
        if (!j) divCheck.classList.add("select");
    }
    slides.appendChild(checkContainer);

    var i = 0;
    var cheks = checkContainer.querySelectorAll("article");


    function setNewSlide() 
    {
        var active = mas[i];
        console.log(active);
        if (i == mas.length - 1)
            i = 0;
        else i++;
        var next = mas[i];
        active.style.left = "-100%";
        active.classList.add("trans");
        next.style.left = 0;
        next.classList.add("trans");
        setTimeout(function () 
        {
            active.classList.remove("trans");
            next.classList.remove("trans");
            active.style.left = "100%"
        }, 3000);
        var select = slides.querySelector("article.select");
        select.classList.remove("select");
        cheks[i].classList.add("select");
    }

    function setPrevSlide() 
    {
        var active = mas[i];
        console.log(active);
        if (i == 0)
            i = mas.length - 1;
        else i--;
        var prev = mas[i];
        var select = slides.querySelector("article.select");
        select.classList.remove("select");
        cheks[i].classList.add("select");
        prev.style.left = "-100%";
        setTimeout(function () 
        {
            active.style.left = "100%";
            active.classList.add("trans");
            prev.style.left = 0;
            prev.classList.add("trans");
            setTimeout(function () 
            {
                active.classList.remove("trans");
                prev.classList.remove("trans");
            }, 3000)
        }, 10);

    }

    var timer = setInterval(setNewSlide, 6000);

    slides.onmouseover = function () 
    {
        clearInterval(timer);
    }
    slides.onmouseout = function () 
    {
        timer = setInterval(setNewSlide, 6000);
    }
    var back = document.querySelector(".back i");
    var next = document.querySelector(".next i");
    next.onmouseover = function () 
    {
        clearInterval(timer);
    }
    next.onmouseout = function () 
    {
        timer = setInterval(setNewSlide, 4000);
    }
    back.onmouseover = function () 
    {
        clearInterval(timer);
    }
    back.onmouseout = function () 
    {
        timer = setInterval(setNewSlide, 3000);
    }

    back.onclick = function () 
    {
        setPrevSlide();
    }
    next.onclick = function () 
    {
        setNewSlide();
    } 


};

