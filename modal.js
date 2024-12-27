const modal = document.createElement("div");
modal.id = "myModal";
modal.className = "modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const popRow = document.createElement("div");
popRow.className = "poprow";

const col75 = document.createElement("div");
col75.className = "col-75";

const closeBtn = document.createElement("span");
closeBtn.className = "close";
closeBtn.innerHTML = "&times;";

const container = document.createElement("div");
container.className = "container";

const form = document.createElement("form");
form.id = "donationForm";
form.action = "script.js";

const modalElements = [modal, modalContent, popRow, col75, closeBtn, container, form];

const billingAddressCol = document.createElement("div");
billingAddressCol.className = "col-50";

billingAddressCol.innerHTML = `
    <h4>Billing Address</h4>
    <label for="email"><i class="fa fa-envelope"></i> Email</label>
    <input type="text" id="email" name="email" placeholder="john@example.com">
    <label for="cname">Name on Card</label>
    <input type="text" id="cname" name="cardname" placeholder="John More Doe">
    <label for="phonenum">Phone Number</label>
    <input type="tel" id="phone" name="phone" value="+995" oninput="formatPhoneNumber(this)" onkeydown="handleBackspace(event, this)">
    <div class="amount">
        <div class="btn">$1</div>
        <div class="btn">$5</div>
    </div>
`;

const paymentCol = document.createElement("div");
paymentCol.className = "col-50";

paymentCol.innerHTML = `
    <h4>Payment</h4>
    <label for="fname">Accepted Cards</label>
    <div class="icon-container">
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
    </div>
    <label for="ccnum">Credit card number</label>
    <input type="tel" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
    <div class="poprow">
        <div class="col-40">
            <label for="expdate">Exp Date</label>
            <input type="text" id="expdate" name="expdate" placeholder="MM/YY" pattern="^(0[1-9]|1[0-2])\/\d{2}$">
        </div>
        <div class="col-40">
            <label for="cvv">CVV</label>
            <input type="tel" id="cvv" name="cvv" placeholder="123" maxlength="3" pattern="^\d{3}$">
        </div>
    </div>
    <div class="amount">
        <div class="btn">$10</div>
        <div class="btn">$<input type="number" class="set-amount" pattern="/^-?\d+\.?\d*$/" onKeyPress="if(this.value.length==6) return false;" placeholder=""></div>
    </div>
`;


const continueBtn = document.createElement("div");
continueBtn.className = "btn";
continueBtn.textContent = "Continue to Checkout";

const formElements = [billingAddressCol, paymentCol, continueBtn];

container.appendChild(form);
form.appendChild(billingAddressCol);
form.appendChild(paymentCol);
container.appendChild(continueBtn);
col75.appendChild(closeBtn);
col75.appendChild(container);
popRow.appendChild(col75);
modalContent.appendChild(popRow);
modal.appendChild(modalContent);

document.body.appendChild(modal);

const openModal = function() {
    modal.style.display = "block";
};

const closeModal = function() {
    modal.style.display = "none";
};

const closeBtnClick = function() {
    closeModal();
};

const continueBtnClick = function() {
    closeModal();
};

const windowClick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};

myBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeBtnClick);
continueBtn.addEventListener("click", continueBtnClick);
window.addEventListener("click", windowClick);

function formatPhoneNumber(input) {
    
    let value = input.value.replace(/\D/g, '');

    if (!value.startsWith('995')) {
        value = '995' + value;
    }

    value = value.substring(0, 12);

    let formattedValue = '+995' +
        (value.length > 3 ? ' ' + value.substring(3, 6) : '') +
        (value.length > 6 ? '-' + value.substring(6, 8) : '') +
        (value.length > 8 ? '-' + value.substring(8, 10) : '') +
        (value.length > 10 ? '-' + value.substring(10, 12) : '');

    input.value = formattedValue;
    
}

function handleBackspace(event, input) {
    if (event.key === 'Backspace' && input.selectionStart === 4 && input.selectionEnd === 4) {
        event.preventDefault();
    }
}


document.getElementById('expdate').addEventListener('input', function (event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 2) {
        formattedValue += value.slice(0, 2) + '/' + value.slice(2, 4);
    } else {
        formattedValue = value;
    }

    input.value = formattedValue;
});

document.getElementById('ccnum').addEventListener('input', function (event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); 
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0 && i !== 16) {
            formattedValue += '-';
        }
        formattedValue += value[i];
    }

    input.value = formattedValue.slice(0, 19);
});

var mailCheck = function() {
    if(document.donationForm.email.value == ""){
        alert("Email cannot be blank");
    }
    else{
        return false;
    }
}

var cardCheck = function() {
    if(document.donationForm.cardnumber.value == ""){
        alert("Card number cannot be blank");
    }
    else{
        return false;
    }
}

var expmonthCheck = function() {
    if(document.donationForm.expmonth.value == ""){
        alert("Expiration month cannot be blank");
    }
    else{
        return false;
    }
}

var NameCheck = function() {
    if(document.donationForm.cardname.value == ""){
        alert("Name cannot be blank"); 
    }
    else{
        return false;
    }
}

var expyearCheck = function() {
    if(document.donationForm.expyear.value == ""){
        alert("Expiration year cannot be blank");
    }
    else{
        return false;
    }
}

var cvvCheck = function() {
    if(document.donationForm.cvv.value == ""){
        alert("CVV cannot be blank");
    }
    else{
        return false;
    }
}

class Modal {
    constructor() {
        this.modal = document.createElement("div");
        this.modal.id = "myModal";
        this.modal.className = "modal";

        this.modalContent = document.createElement("div");
        this.modalContent.className = "modal-content";

        this.popRow = document.createElement("div");
        this.popRow.className = "poprow";

        this.col75 = document.createElement("div");
        this.col75.className = "col-75";

        this.closeBtn = document.createElement("span");
        this.closeBtn.className = "close";
        this.closeBtn.innerHTML = "&times;";

        this.container = document.createElement("div");
        this.container.className = "container";

        this.form = document.createElement("form");
        this.form.id = "donationForm";
        this.form.action = "script.js";

        this.modalElements = [this.modal, this.modalContent, this.popRow, this.col75, this.closeBtn, this.container, this.form];

        this.modalElements.forEach((element) => this.form.appendChild(element));

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.closeBtnClick = this.closeBtnClick.bind(this);
        this.windowClick = this.windowClick.bind(this);

        myBtn.addEventListener("click", this.openModal);
        this.closeBtn.addEventListener("click", this.closeBtnClick);
        window.addEventListener("click", this.windowClick);

        this.form.addEventListener("submit", async (event) => {
            event.preventDefault();
            await this.handleFormSubmission();
        });
    }

    openModal() {
        this.fetchData();
        this.modal.style.display = "block";
        this.form.elements[0].focus();
    }

    closeModal() {
        this.modal.style.display = "none";
    }

    closeBtnClick() {
        this.closeModal();
    }

    windowClick(event) {
        if (event.target == this.modal) {
            this.closeModal();
        }
    }

    async fetchData() {
        try {
            const response = await fetch("https://api.example.com/data");
            const data = await response.json();
            console.log("Fetched data:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async submitForm() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve("Form submitted successfully!");
                } else {
                    reject("Error submitting form");
                }
            }, 1000);
        });
    }

    async handleFormSubmission() {
        try {
            await this.submitForm();
            console.log("Form submitted successfully!");
            this.closeModal();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
}

const modalInstance = new Modal();

window.modalInstance = modalInstance;
