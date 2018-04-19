import {html, render, TemplateInstance, TemplateResult} from "./node_modules/lit-html/lit-html.js";

const employees = [
	{
		Name: "Richard Hendricks",
		Bio: "Richard invented and built the start-up Pied Piper, a program designed to find music matches, while living at Erlich’s Hacker Hostel alongside his best friend Big Head and fellow geeks Dinesh and Gilfoyle. Pied Piper’s compression algorithm triggered a bidding war and ultimately garnered funding from Peter Gregory's company Raviga. After winning TechCrunch Disrupt -- and $50,000 -- Richard and Pied Piper are in the spotlight more than ever, which for Richard means non-stop thrills (read: nausea and debilitating panic).",
		PhotoUrl: "/Richard.png"
	},
	{
		Name: "Jared Dunn",
		Bio: "Donald \"Jared\" Dunn was a Hooli executive and right-hand man to the head of the company, Gavin Belson, but after gaining a particular interest in Richard’s algorithm, quit his job at Hooli to work for Pied Piper.",
		PhotoUrl: "/Jared.png"
	},
	{
		Name: "Bertram Gilfoyle",
		Bio: "Gilfoyle lives and works in the Hacker Hostel with Richard, Big Head, and Dinesh. He is pompous and purports to be good at system architecture, networking, and security. Gilfoyle often finds himself sparring with Dinesh about things such as their work efficiency, Dinesh's Pakistani ethnicity, Gilfoyle's religion along with other negligible matters.[1] Often Gilfoyle triumphs in these arguments or reaches an impasse with Dinesh. He is a self-described LaVeyan Satanist, and bears an upside-down cross tattoo on his right arm.",
		PhotoUrl: "/Gilfoyle.png"
	}
];

export class App
{
	public Render(): void
	{
		render(html`
			${employees.map(e => new EmployeeCardLit(e).Template)}
		`, document.body);
	}
}

class EmployeeCard
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

class EmployeeCardLit
{
	constructor(private employee: Employee)
	{
	}

	public get Template(): TemplateResult
	{
		return html`
			<div class="card">
				<img class="card__photo" src="${this.employee.PhotoUrl}">
				<h1 class="card__title">${this.employee.Name}</h1>
				<div class="card__bio">${this.employee.Bio}</div>
			</div>
		`;
	}

	public Render(parent: HTMLElement)
	{
		render(this.Template, parent);
	}
}

interface Employee
{
	Name: string;
	Bio: string;
	PhotoUrl: string;
}

document.body.onload = () => { new App().Render();};