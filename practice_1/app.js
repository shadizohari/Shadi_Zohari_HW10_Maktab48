let addition = document.getElementById("addition")
let table = document.querySelector("table");
let totalTax = document.querySelector(".total-tax span");
let totalPrice = document.querySelector(".total-price span");
let check = true;


addition.addEventListener("click", function (e) {
    if ((e.target === this) && check) {
        let obj = {};
        let row = table.insertRow(1);
        for (let i = 0; i < 11; i++) {
            obj["cell" + i] = row.insertCell(i);
            obj["cell" + i].innerHTML = "<input type='text'></input>"
        }
        obj["cell0"].innerHTML = 0;
        obj["cell1"].innerHTML = `
        <select id="service">
        <option value="">select...</option> 
        <option value="کالا">کالا</option>
        <option value="خدمات">خدمات</option>
      </select>`;
        obj["cell4"].innerHTML = "<input type='number'></input>";
        obj["cell9"].innerHTML = "";
        obj["cell10"].innerHTML = "";
        obj["cell9"].classList.add("fa", "fa-cloud-download-alt", "btnCells");
        obj["cell9"].setAttribute("id", "save");
        obj["cell10"].classList.add("fa", "fa-undo", "btnCells");
        let inputs = document.querySelectorAll("input")
        inputs[6].value = 0
        document.querySelector("select").focus();
        document.querySelector(".noData").style.display = "none"
        check = false;

    }
})



table.addEventListener("click", function (e) {
    if (e.target.id == "save") {
        check=true;
        let x;
        let row = table.getElementsByTagName('tr');
        for (let i = 4; i < row[1].children.length - 3; i++) {
            if (!Number(row[1].children[i].children[0].value)) {
                return false;
            }
        }
        for (let i = 1; i < row[1].children.length - 7; i++) {
            if (!row[1].children[i].children[0].value) {
                return false;
            }
        }
        if (Number(row[1].children[4].children[0].value) <= 0) {
            return false;
        }
        for (let i = 1; i < row[1].children.length - 2; i++) {
            row[1].children[i].children[0].disabled = true;
        }
        row[1].children[9].classList.remove("fa-cloud-download-alt")
        row[1].children[9].classList.add("fa-pen")
        row[1].children[9].setAttribute("id", "edit");
        row[1].children[10].classList.remove("fa-undo")
        row[1].children[10].classList.add("fa-trash")
        x = ((row[1].children[4].children[0].value) * ((100 - Number(row[1].children[6].children[0].value)) / 100) * (Number(row[1].children[5].children[0].value))) + Number(row[1].children[7].children[0].value)
        x = Number(x.toFixed(3))
        row[1].children[8].children[0].value = x
        totalPrice.innerHTML = Number(totalPrice.innerHTML) + x
        totalTax.innerHTML = Number(row[1].children[7].children[0].value) + Number(totalTax.innerHTML)


        let shifted = row[1];
        row[1].parentNode.removeChild(row[1]);
        table.appendChild(shifted);
        shifted.children[0].innerHTML = row.length - 1;
    }

    // if (e.target.id == "edit") {
    //     let edit = e.target.parentNode.children
    //     console.log(edit)
    //     for (let i = 1; i < 8; i++) {
    //         edit.disabled = false;
    //     }
    // }


})
// The git repository at '/home/shadi/maktab48/Home_Work/Shadi_Zohari_HW10_Maktab48' has too many active changes, only a subset of Git features will be enabled.