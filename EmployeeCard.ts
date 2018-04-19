import { Employee } from "./Employee.js";

export class EmployeeCard
{
	constructor(private employee: Employee)
	{
	}

	public Render(parent: Node): void
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
