console.log("jeg er i setclassname")


const pbSetClassname = document.getElementById("pbSetStyle")
const inpClassname = document.getElementById("styleName")
const inpElementname = document.getElementById("elementName")


function setClassnameRuinName() {
    const elemname = inpElementname.value;
    console.log(elemname)
    const clsname = inpClassname.value;
    const inpelement = document.querySelector("." + elemname)
    console.log(inpelement)
    inpelement.className =  clsname
}

function setClassname() {
    const elemname = inpElementname.value;
    console.log(elemname)
    const clsname = inpClassname.value;
    const inpelement = document.querySelector("." + elemname)
    console.log(inpelement)

    inpelement.className = ""
    inpelement.classList.add(clsname)
    inpelement.classList.add(elemname)
    console.log(inpelement.innerHTML)
}


pbSetClassname.addEventListener('click', setClassname)


