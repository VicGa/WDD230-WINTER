// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datfield = document.querySelector(".date-1");


// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldat = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;
datfield.innerHTML = `<em>${fulldat}</em>`;
