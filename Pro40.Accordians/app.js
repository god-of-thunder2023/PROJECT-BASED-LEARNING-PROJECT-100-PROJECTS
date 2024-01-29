const itemHeaders = document.querySelectorAll(".accordian-item-header");

itemHeaders.forEach(accordian => {
    accordian.addEventListener("click", collapseAccordians);
        function collapseAccordians() {
        const activeAccordian = document.querySelector(".active");
        if (activeAccordian && activeAccordian !== accordian) {
            activeAccordian.nextElementSibling.style.maxHeight = 0;
        }
        accordian.classList.toggle("active");
        const accordianItemBody = accordian.nextElementSibling;

        if (accordian.classList.contains("active")) {
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
        } else {
            accordianItemBody.style.maxHeight = 0;
        }
        
    }       
    }) 