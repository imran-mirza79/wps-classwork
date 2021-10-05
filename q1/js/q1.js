let form = document.querySelectorAll(".myform");
let leftBtn = document.querySelectorAll(".leftbtn");
let rightBtn = document.querySelectorAll(".rightbtn");
let successDisplay = document.querySelector("#success-display");
let count = 0;

console.log(rightBtn[0].textContent === "Submit");
rightBtn[0].onclick = () => {
	if (count >= 3) {
		show();
		return;
	}
	form[count].classList.add("display");
	form[count + 1].classList.remove("display");
	leftBtn[0].classList.remove("display");
	count++;
	if (count == 3) {
		rightBtn[0].innerHTML = "Submit";
	}
};

leftBtn[0].onclick = () => {
	form[count].classList.add("display");
	form[count - 1].classList.remove("display");
	count--;
	if (count == 0) {
		leftBtn[0].classList.add("display");
	}

	if (count < 3) {
		rightBtn[0].innerHTML = "Next";
	}
};

const validateFirstName = () => {
	const expression = /^[a-zA-Z ]{2,30}$/;
	let firstName = document.getElementsByName("first-name");
	let name = firstName[0].value;
	if (expression.test(name) === false) {
		firstName[0].parentElement.classList.add("error");
		firstName[0].parentElement.children[1].classList.remove("display");
		if (name.length != 0) {
			firstName[0].parentElement.children[1].innerHTML =
				"Name must contain atleast 2 characters";
		}
	} else {
		firstName[0].parentElement.classList.remove("error");
		firstName[0].parentElement.children[1].classList.add("display");
	}
	return expression.test(name);
};

const validateLastName = () => {
	const expression = /^[a-zA-Z ]{2,30}$/;
	let lastName = document.getElementsByName("last-name");
	let name = lastName[0].value;
	if (expression.test(name) === false) {
		lastName[0].parentElement.classList.add("error");
		lastName[0].parentElement.children[1].classList.remove("display");
		if (name.length != 0) {
			lastName[0].parentElement.children[1].innerHTML =
				"Name must contain atleast 2 characters";
		}
	} else {
		lastName[0].parentElement.classList.remove("error");
		lastName[0].parentElement.children[1].classList.add("display");
	}
	return expression.test(name);
};

const validateEmail = () => {
	const expression =
		/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
	let email = document.getElementsByName("email");
	let emailText = email[0].value;
	if (expression.test(emailText) === false) {
		email[0].parentElement.classList.add("error");
		email[0].parentElement.children[2].classList.remove("display");
	} else {
		email[0].parentElement.classList.remove("error");
		email[0].parentElement.children[2].classList.add("display");
	}
	return expression.test(email);
};

const display = () => {
	let name =
		document.getElementsByName("first-name")[0].value +
		" " +
		document.getElementsByName("last-name")[0].value;
	let email = document.getElementsByName("email")[0].value;
	let number = document.getElementsByName("number")[0].value;
	let address =
		document.getElementsByName("address")[0].value +
		" " +
		document.getElementsByName("address-2")[0].value;
	let clgName = document.getElementsByName("college-name")[0].value;
	let crname = document.getElementsByName("course-name")[0].value;
	let majors = document.getElementsByName("majors")[0].value;
	let cgpa = document.getElementsByName("cgpa")[0].value;
	let dos = document.getElementsByName("dos")[0].value;
	let sem = document.getElementsByName("sem")[0].value;
	let mentorName = document.getElementsByName("mentor-name")[0].value;
	let mentorFeedback = document.getElementsByName("fd")[0].value;
	let att = document.getElementsByName("days")[0].value;
	let managementFeedback = document.getElementsByName("feedback")[0].value;

	console.log(successDisplay.children.length);

	successDisplay.children[0].innerHTML = ` <p>Name: ${name}</p>`;
	successDisplay.children[0].innerHTML = ` <p>Email: ${email}</p>`;
	successDisplay.children[0].innerHTML = ` <p>Mobile Number: ${number}</p>`;
	successDisplay.children[0].innerHTML = ` <p>Address: ${address}</p>`;

	successDisplay.children[1].innerHTML = ` <p>College Name: ${clgName}</p>`;
	successDisplay.children[1].innerHTML = ` <p>Course: ${crname}</p>`;
	successDisplay.children[1].innerHTML = ` <p>Majors: ${majors}</p>`;
	successDisplay.children[1].innerHTML = ` <p>CGPA: ${cgpa}</p>`;
	successDisplay.children[1].innerHTML = ` <p>Date of Start: ${dos}</p>`;
	successDisplay.children[1].innerHTML = ` <p>Semester: ${sem}</p>`;

	successDisplay.children[2].innerHTML = ` <p>Mentor Name: ${mentorName}</p>`;
	successDisplay.children[2].innerHTML = ` <p>Feedback(Mentor): ${mentorFeedback}</p>`;

	successDisplay.children[3].innerHTML = ` <p>Attendance: ${att}</p>`;
	successDisplay.children[3].innerHTML = ` <p>Feedback(Managment): ${managementFeedback}</p>`;
};

const show = () => {
	if (rightBtn[0].textContent === "Submit") {
		for (var i = 0; i < 4; i++) form[i].classList.add("display");
        successDisplay.classList.remove("display");
        leftBtn[ 0 ].classList.add('display');
        rightBtn[ 0 ].classList.add('display');
        document.querySelector('.ribbon').classList.add('display')
        document.querySelector('.success').classList.remove('display');
        document.querySelector(".raised").classList.add('display');
		display();
	}
};
