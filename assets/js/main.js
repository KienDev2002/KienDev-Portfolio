// text header
let jobEffect = new Typed(".multiText", {
    strings: ["coder", "web developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
})


const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);


// dark-mode
let btnMoon = $$('.dark-mode img:first-child');
let btnSun = $$('.dark-mode img:last-child');
let blockDarkMode = $$(".dark-mode");

blockDarkMode.onclick = () => {
    btnMoon.classList.toggle('active');
    btnSun.classList.toggle('active');
    let element = document.body;
    element.classList.toggle("dark-mode-change");
}




// navigation
let itemsHeader = $$$('.header__nav .header__nav-link');

Array.from(itemsHeader).forEach(element => {
    element.onclick = () => {
        $$('.header__nav .header__nav-link.active').classList.remove('active');
        element.classList.add('active');
    }
});


// let itemsHeaderMobile = $$$('.navbar-mobile .header__nav-link');
// Array.from(itemsHeaderMobile).forEach(element => {
//     element.onclick = () => {
//         $$('.navbar-mobile .header__nav-link.active').classList.remove('active');
//         element.classList.add('active');
//     }
// });


// scroll
let fixedImgHeader = $$('.fixed-img');
let headerNode = $$('.header');
// on top
let btnOnTop = $$('.scroll-top-btn');


window.onscroll = () => {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // scroll header active
    let btnItemHeader = $$$('.header__nav-list .header__nav-items:nth-child(1) .header__nav-link');
    let aboutBlock = $$('.about');;
    if (scrollTop >= 0 && scrollTop < aboutBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemHeader).forEach(e => {
            e.classList.add('active');
        })

    }

    // scroll about active
    let btnItemAbout = $$$('.header__nav-list .header__nav-items:nth-child(2) .header__nav-link');
    let servicesBlock = $$('.services');
    if (scrollTop >= aboutBlock.offsetTop - 350 && scrollTop < servicesBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemAbout).forEach(e => {
            e.classList.add('active');
        })

    }


    // scroll service active
    let btnItemservices = $$$('.header__nav-list .header__nav-items:nth-child(3) .header__nav-link');
    let skillBlock = $$('.skill');
    if (scrollTop >= servicesBlock.offsetTop - 350 && scrollTop < skillBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemservices).forEach(e => {
            e.classList.add('active');
        })

    }


    // scroll skill active
    let btnItemskill = $$$('.header__nav-list .header__nav-items:nth-child(4) .header__nav-link');
    let PortfolioBlock = $$('.myPortfolio');
    if (scrollTop >= skillBlock.offsetTop - 350 && scrollTop < PortfolioBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemskill).forEach(e => {
            e.classList.add('active');
        })

    }


    // scroll portfolio active
    let btnItemsPortfolio = $$$('.header__nav-list .header__nav-items:nth-child(5) .header__nav-link');
    let TeamBlock = $$('.myTeam');
    if (scrollTop >= PortfolioBlock.offsetTop - 350 && scrollTop < TeamBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemsPortfolio).forEach(e => {
            e.classList.add('active');
        })

    }


    // scroll contact active
    let btnItemsContact = $$$('.header__nav-list .header__nav-items:nth-child(6) .header__nav-link');
    let contactBlock = $$('.contact');
    if (scrollTop >= contactBlock.offsetTop - 350) {
        if ($$$('.header__nav-link.active')) {
            let items = $$$('.header__nav-link.active');
            Array.from(items).forEach(e => {
                e.classList.remove('active');
            })
        }
        Array.from(btnItemsContact).forEach(e => {
            e.classList.add('active');
        })

    }



    if (Math.floor(scrollTop) >= fixedImgHeader.clientHeight - headerNode.clientHeight) {
        headerNode.style['box-shadow'] = '1px 2px rgb(0, 0, 0, 0.1)';
        headerNode.style.background = '#302d2d';
        headerNode.style.top = '0px';

        headerNode.style.transition = "all 1s linear";
        btnOnTop.style.display = 'block'

    } else {
        headerNode.style['box-shadow'] = 'none';
        headerNode.style.background = 'transparent'
        headerNode.style.top = '20px';
        headerNode.style.transition = "all 0s linear";
        btnOnTop.style.display = 'none'


    }


    if (Math.floor(scrollTop) >= skillBlock.offsetTop - 350) {
        const C = $$('.C');
        const keyFramesC = document.createElement("style");

        keyFramesC.innerHTML = `
          @keyframes CProcess {
            100% {
                width: 70%;
            }
          }
        
          .C {
            animation: CProcess 5s forwards;
          }
        `;
        C.appendChild(keyFramesC);

        const html = $$('.html');
        const keyFrames = document.createElement("style");

        keyFrames.innerHTML = `
          @keyframes htmlProcess {
            100% {
                width: 90%;
            }
          }
        
          .html {
            animation: htmlProcess 5s forwards;
          }
        `;

        html.appendChild(keyFrames);

        const css = $$('.css');
        const keyFrameCss = document.createElement("style");
        keyFrameCss.innerHTML = `
          @keyframes cssProcess {
            100% {
                width: 80%;
            }
          }
        
          .css {
            animation: cssProcess 5s forwards;
          }
        `;

        css.appendChild(keyFrameCss);



        const bootstrap = $$('.bootstrap');
        const keyFramebootstrap = document.createElement("style");
        keyFramebootstrap.innerHTML = `
          @keyframes bootstrapProcess {
            100% {
                width: 85%;
            }
          }
        
          .bootstrap {
            animation: bootstrapProcess 5s forwards;
          }
        `;

        bootstrap.appendChild(keyFramebootstrap);


        const javascript = $$('.javascript');
        const keyFramejavascript = document.createElement("style");
        keyFramejavascript.innerHTML = `
          @keyframes javascriptProcess {
            100% {
                width: 80%;
            }
          }
        
          .javascript {
            animation: javascriptProcess 5s forwards;
          }
        `;

        javascript.appendChild(keyFramejavascript);


        const ubuntu = $$('.ubuntu');
        const keyFrameubuntu = document.createElement("style");
        keyFrameubuntu.innerHTML = `
          @keyframes ubuntuProcess {
            100% {
                width: 60%;
            }
          }
        
          .ubuntu {
            animation: ubuntuProcess 5s forwards;
          }
        `;

        ubuntu.appendChild(keyFrameubuntu);


        const reactjs = $$('.reactjs');
        const keyFramereactjs = document.createElement("style");
        keyFramereactjs.innerHTML = `
          @keyframes reactjsProcess {
            100% {
                width: 10%;
            }
          }
        
          .reactjs {
            animation: reactjsProcess 5s forwards;
          }
        `;

        reactjs.appendChild(keyFramereactjs);



        const django = $$('.django');
        const keyFramedjango = document.createElement("style");
        keyFramedjango.innerHTML = `
          @keyframes djangoProcess {
            100% {
                width: 50%;
            }
          }
        
          .django {
            animation: djangoProcess 5s forwards;
          }
        `;

        django.appendChild(keyFramedjango);

    } else {

    }
}


btnOnTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

// item header
let btnItemHeader = $$$('.header__nav-list .header__nav-items:first-child');

Array.from(btnItemHeader).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
})

let btnItemFooterHeader = $$('.footerHeader');

btnItemFooterHeader.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}



// item about
let btnItemAbout = $$$('.header__nav-list .header__nav-items:nth-child(2)');
let aboutBlock = $$('.about');
Array.from(btnItemAbout).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: aboutBlock.offsetTop - 100,
            behavior: "smooth",
        })
    }
})

let btnItemFooterAbout = $$('.footerAbout');
btnItemFooterAbout.onclick = function() {
    window.scrollTo({
        top: aboutBlock.offsetTop - 100,
        behavior: "smooth",
    })
}

let btnDownHeader = $$('.scroll-down');
btnDownHeader.onclick = function() {
    window.scrollTo({
        top: aboutBlock.offsetTop - 100,
        behavior: "smooth",
    })
}


// Education footer link
let btnItemFooterEducation = $$('.footerEducation');
let educationBlock = $$('.education');
btnItemFooterEducation.onclick = function() {
    window.scrollTo({
        top: educationBlock.offsetTop - 100,
        behavior: "smooth",
    })
}


// item services
let btnItemservices = $$$('.header__nav-list .header__nav-items:nth-child(3)');
let servicesBlock = $$('.services');
Array.from(btnItemservices).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: servicesBlock.offsetTop - 100,
            behavior: "smooth",
        })
    }
})
let btnItemFooterServices = $$('.footerServices');
btnItemFooterServices.onclick = function() {
    window.scrollTo({
        top: servicesBlock.offsetTop - 100,
        behavior: "smooth",
    })
}


// item skill
let btnItemskill = $$$('.header__nav-list .header__nav-items:nth-child(4)');
let skillBlock = $$('.skill');
Array.from(btnItemskill).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: skillBlock.offsetTop - 100,
            behavior: "smooth",
        })
    }
})
let btnItemFooterSkill = $$('.footerSkill');
btnItemFooterSkill.onclick = function() {
    window.scrollTo({
        top: skillBlock.offsetTop - 100,
        behavior: "smooth",
    })
}


// item Portfolio
let btnItemPortfolio = $$$('.header__nav-list .header__nav-items:nth-child(5)');
let PortfolioBlock = $$('.myPortfolio');
Array.from(btnItemPortfolio).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: PortfolioBlock.offsetTop - 100,
            behavior: "smooth",
        })
    }
})
let btnItemFooterPortfolio = $$('.footerPortfolio');
btnItemFooterPortfolio.onclick = function() {
    window.scrollTo({
        top: PortfolioBlock.offsetTop - 100,
        behavior: "smooth",
    })
}


// Team footer link
let btnItemFooterTeam = $$('.footerTeam');
let TeamBlock = $$('.myTeam');
btnItemFooterTeam.onclick = function() {
    window.scrollTo({
        top: TeamBlock.offsetTop - 100,
        behavior: "smooth",
    })
}



// item contact
let btnItemContact = $$$('.header__nav-list .header__nav-items:last-child');
let contactBlock = $$('.contact');
Array.from(btnItemContact).forEach(e => {
    e.onclick = function() {
        window.scrollTo({
            top: contactBlock.offsetTop - 100,
            behavior: "smooth",
        })
    }
})



// menu mobile
let menuMobile = $$('.mobile-menu');
let navBarHeader = $$('.navbar-mobile ');
let navBarClose = $$('.navbar-mobile .menu-close');
menuMobile.onclick = () => {
    navBarHeader.style.display = 'block'
    navBarHeader.style.transition = "all 0s linear";
}

navBarClose.onclick = () => {
    navBarHeader.style.transition = "all 0s linear";
    navBarHeader.style.display = 'none'
}

let itemsHeaderMobile = $$$('.navbar-mobile .header__nav-link');
Array.from(itemsHeaderMobile).forEach(element => {
    element.onclick = () => {
        $$('.navbar-mobile .header__nav-link.active').classList.remove('active');
        element.classList.add('active');
    }
});

// education
let educationNode = $$$('.education__know');
Array.from(educationNode).forEach((element, index) => {
    element.onclick = () => {

        $$('.education__know.active').classList.remove('active');
        element.classList.add('active');
        if (element.className.split(' ').includes('active')) {
            displayEducation(index);
        }
    }
});



let educationDetails = $$('.education__knowledge-details');
let experieceDetails = $$('.experience__knowledge-details');

function displayEducation(n) {
    if (n === 1) {
        experieceDetails.style.display = 'flex';
        educationDetails.style.display = 'none';
    } else {
        educationDetails.style.display = 'flex';
        experieceDetails.style.display = 'none';
    }
}


// experience
let itemExperience = $$$('.experience__knowledge-details .education__knowledge-details-items-link');
let itemExperienceModals = $$$('.experience__knowledge-details .experience__modal');
let closeExperoences = $$$('.experience__modal img:last-child');

Array.from(itemExperience).forEach((e, index) => {
    e.onclick = () => {
        itemExperienceModals[index].style.display = 'flex';
    }
})

Array.from(closeExperoences).forEach((e, index) => {
    e.onclick = () => {
        itemExperienceModals[index].style.display = 'none';
    }
})


Array.from(itemExperienceModals).forEach((e, index) => {
    e.onclick = () => {
        itemExperienceModals[index].style.display = 'none';
    }
})



// my portfolio

let itemsMyportfolio = $$$('.myPortfolio__btn');
let itemsMyportfolioImg = $$$('.myPortfolio__btns-imgs');
Array.from(itemsMyportfolio).forEach((itemsBtn, index) => {
    let item = itemsMyportfolioImg[index];
    itemsBtn.onclick = function() {
        $$(".myPortfolio__btn.active").classList.remove('active');
        $$(".myPortfolio__btns-imgs.active").classList.remove('active');
        this.classList.add('active');
        item.classList.add('active');
    }
})

// const portfolio = $$('.myPortfolio__btn');
// Array.from(portfolio).forEach((element, index) => {
//     const itemPortfolio = 
//     element.onclick = () => {
//         $('.myPortfolio__btn.active').classList.remove('active');
//         element.classList.add('active');
//         if (element.className.split(' ').includes('active')) {
//             displayImgPortfolio(element.innerHTML.toLowerCase());
//         }
//     }
// })

// function displayImgPortfolio(string) {
//     switch (string) {
//         case 'web':
//             let itemsPortfolioWeb = $$(`.myPortfolio__btns-imgs .${string}`)
//             Array.from(itemsPortfolioWeb).forEach((e) => {
//                 e.style.display = 'inline-block';
//             });
//             break;
//         case 'logo':
//             let itemsPortfolioLogo = $$(`.myPortfolio__btns-imgs .${string}`)
//             Array.from(itemsPortfolioLogo).forEach((e) => {
//                 e.style.display = 'inline-block'
//             })
//             break;
//         case 'branding':
//             let itemsPortfoliobranding = $$(`.myPortfolio__btns-imgs .${string}`)
//             Array.from(itemsPortfoliobranding).forEach((e) => {
//                 e.style.display = 'inline-block'
//             });
//             break;
//     }
// }







// Array.from(myPortfolioModal).forEach(e => {
//     e.onclick = () => {
//         Array.from(myPortfolioModal).forEach(e => {
//             e.style.display = 'none';
//         })

//     }
// })





// Array.from(myPortfolioImg).forEach((e, i) => {
//     e.onclick = () => {
//         myPortfolioModal.style.display = 'flex';
//         myPortfolioClose.onclick = () => {
//             myPortfolioModal.style.display = 'none';
//         }
//     }
// })