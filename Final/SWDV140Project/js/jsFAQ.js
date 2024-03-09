/*********************************************************************
***
*Original Author:    Anthony Patterson           *
*Date Created:       02/08/2024                  *
*Version:            2                           *
*Date Last Modified: 03/02/2024                  *
*Modified by:        Anthony Patterson           *
*Modification log:  
2-Removed  const toggle                          *
***
******************************************************************** */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const h2Elements = document.querySelectorAll("#faqs h2");

    h2Elements.forEach(h2Element => {
        h2Element.addEventListener("click", () => {
            const divElement = h2Element.nextElementSibling;
            const paragraph = divElement.querySelector("p");

            h2Element.classList.toggle("minus");
            paragraph.style.display = (paragraph.style.display === "block") ? "none" : "block";
        });
    });

    h2Elements[0].firstChild.focus();
});
