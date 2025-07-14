const modal = document.createElement("div");
modal.id = "loginModal";
modal.className = "modal";

const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const closeBtn = document.createElement("span");
closeBtn.className = "close";
closeBtn.innerHTML = "&times;";

const form = document.createElement("form");
form.id = "loginForm";

form.innerHTML = `
  <h2>Login</h2>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" required placeholder="you@example.com" />
  
  <label for="password">Password</label>
  <input type="password" id="password" name="password" required placeholder="********" />
  
  <button type="submit">Login</button>
`;

modalContent.appendChild(closeBtn);
modalContent.appendChild(form);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// ⬇️ Create a backdrop div (initially not in DOM)
const backdrop = document.createElement("div");
backdrop.className = "modal-backdrop";

// CSS styles
const style = document.createElement("style");
style.innerHTML = `
#loginModal {
    display: none;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: transparent; /* So backdrop shows separately */
  }
  
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
  
  #loginModal .modal-content {
    background-color: #fefefe;
    margin: 10% auto;
    padding: 20px;
    border: 2px solid #446d28;
    width: 300px;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
  
  #loginModal .close {
    float: right;
    font-size: 24px;
    cursor: pointer;
  }
  
  #loginModal form label {
    display: block;
    margin-top: 10px;
  }
  
  #loginModal form input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    box-sizing: border-box;
  }
  
  #loginModal button {
    margin-top: 15px;
    width: 100%;
    padding: 10px;
    background-color: #659645;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  #loginModal input[type="text"],
  #loginModal input[type="email"],
  #loginModal input[type="password"],
  #loginModal input[type="tel"],
  #loginModal input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;
    font-size: 14px;
    transition: border-color 0.2s;
  }
  
  #loginModal input:focus {
    border-color: #659645;
  }
  
`;
document.head.appendChild(style);

// Logic
const openModal = () => {
  document.body.appendChild(backdrop); // show backdrop
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
  if (document.body.contains(backdrop)) {
    backdrop.remove(); // remove backdrop
  }
};

closeBtn.onclick = closeModal;
backdrop.onclick = closeModal;

window.onclick = (event) => {
  if (event.target === modal) closeModal();
};

form.onsubmit = (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  console.log("Login submitted:", { email, password });

  // Your login API logic here...

  closeModal();
};

// Hook up to the existing Sign In button
const triggerBtn = document.getElementById("myBtn");
if (triggerBtn) {
  triggerBtn.addEventListener("click", openModal);
}

function checkall(masterCheckbox) {
    const allCheckboxes = document.querySelectorAll('input.custom-control-input:not(#checkAll)');
    const isChecked = masterCheckbox.checked;

    allCheckboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}
$(document).ready(function() {
    $('select[name="data_collection_date_from"]').select2({
      theme: 'bootstrap4',
      placeholder: 'არჩევა',
      width: '100%' // Match the container width
    });
  });
  