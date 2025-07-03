const apiURL = 'https://jsonplaceholder.typicode.com/users'; // Replace with your IT Varsity API

// Fetch and display contacts
function getContacts() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('contact-list');
      if (!list) return;
      list.innerHTML = '';
      data.forEach(contact => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${contact.name} - ${contact.phone}
          <a href="editContact.html?id=${contact.id}">Edit</a>
          <button onclick="deleteContact(${contact.id})">Delete</button>
        `;
        list.appendChild(li);
      });
    })
    .catch(err => {
      alert('Failed to fetch contacts.');
      console.error(err);
    });
}

// Add new contact
const addContactForm = document.getElementById('addContactForm');
if (addContactForm) {
  addContactForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch(apiURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(() => {
        alert('Contact Added!');
        window.location.href = 'index.html';
      })
      .catch(err => {
        alert('Failed to add contact.');
        console.error(err);
      });
  });
}

// Load contact data for editing
if (window.location.pathname.includes('editContact.html')) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch(`${apiURL}/${id}`)
    .then(res => res.json())
    .then(contact => {
      document.getElementById('editName').value = contact.name;
      document.getElementById('editPhone').value = contact.phone;
    })
    .catch(err => {
      alert('Failed to load contact.');
      console.error(err);
    });

  // Update contact
  const editContactForm = document.getElementById('editContactForm');
  if (editContactForm) {
    editContactForm.addEventListener('submit', e => {
      e.preventDefault();
      const updatedData = {
        name: document.getElementById('editName').value,
        phone: document.getElementById('editPhone').value
      };

      fetch(`${apiURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      })
        .then(() => {
          alert('Contact Updated!');
          window.location.href = 'index.html';
        })
        .catch(err => {
          alert('Failed to update contact.');
          console.error(err);
        });
    });
  }
}

// Delete contact
function deleteContact(id) {
  fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'apikey': 'appacademy@itvarsity.org'
    }
  })
    .then(() => {
      alert('Contact Deleted!');
      getContacts();
    })
    .catch(err => {
      alert('Failed to delete contact.');
      console.error(err);
    });
}
