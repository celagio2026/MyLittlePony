let contacts = JSON.parse(localStorage.getItem('ponyContacts')) || [];

function displayContacts() {
		let contactList = document.getElementById('contactList');
		contactList.innerHTML = '';
		for (let i = 0; i < contacts.length; i++) {
			let li = document.createElement('li');
			let contactName = document.createElement('span');
			contactName.innerText = contacts[i].name;
			let contactDetails = document.createElement('div');
			contactDetails.className = 'contactDetails';
            contactDetails.innerHTML = `
            <hr>
            `;
			li.appendChild(contactName);
			li.appendChild(contactDetails);
			li.addEventListener('click', function() {
				document.getElementById('name').value = contacts[i].name;
				document.getElementById('address').value = contacts[i].address;
				document.getElementById('phone').value = contacts[i].phone;
			});
			contactList.appendChild(li);
		}
	}

	displayContacts();

	
	let saveBtn = document.getElementById('saveBtn');
	saveBtn.addEventListener('click', function(e) {
		if(Number.isInteger(Number(document.getElementById("phone").value)) && document.getElementById("name").value != "" && document.getElementById("address").value != "" && document.getElementById("phone").value != ""){
			e.preventDefault();
			let name = document.getElementById('name').value;
			let address = document.getElementById('address').value;
			let phone = document.getElementById('phone').value;
			
			let contact = { name, address, phone };
			contacts.push(contact);
	
			localStorage.setItem('ponyContacts', JSON.stringify(contacts));
	
			displayContacts();
			document.getElementById('name').value = '';
			document.getElementById('address').value = '';
			document.getElementById('phone').value = '';
		}
		else if(!Number.isInteger(Number(document.getElementById("phone").value)) && document.getElementById("name").value != "" && document.getElementById("address").value != ""){
			alert("Please enter a valid number");
			return false;
		}
		else{
			return false;
		}
	});

