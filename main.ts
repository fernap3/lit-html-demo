import {html, render} from "./node_modules/lit-html/lit-html.js";



class EmployeeCard
{
	constructor(private employee: Employee)
	{

	}

	public Render(parent: Node)
	{
		const card = document.createElement("div");
		card.className = "card";

		const photo = document.createElement("img");
		photo.className = "card__photo";
		photo.src = this.employee.PhotoUrl;
		card.appendChild(photo);

		const title = document.createElement("h1");
		title.className = "card__title";
		title.innerText = this.employee.Name;
		card.appendChild(title);

		const bio = document.createElement("div");
		bio.className = "card__bio";
		bio.innerText = this.employee.Bio;
		card.appendChild(bio);

		parent.appendChild(card);
	}
}

interface Employee
{
	Name: string;
	Bio: string;
	PhotoUrl: string;
}

new EmployeeCard({
	Name: "Richard Hendricks",
	Bio: "Richard invented and built the start-up Pied Piper, a program designed to find music matches, while living at Erlich’s Hacker Hostel alongside his best friend Big Head and fellow geeks Dinesh and Gilfoyle. Pied Piper’s compression algorithm triggered a bidding war and ultimately garnered funding from Peter Gregory's company Raviga. After winning TechCrunch Disrupt -- and $50,000 -- Richard and Pied Piper are in the spotlight more than ever, which for Richard means non-stop thrills (read: nausea and debilitating panic).",
	PhotoUrl: "/Richard.png"
}).Render(document.body);