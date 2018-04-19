import {html, render, TemplateInstance, TemplateResult} from "./node_modules/lit-html/lit-html.js";
import { EmployeeCard } from "./EmployeeCard.js";
import { EmployeeCardLit } from "./EmployeeCardLit.js";
import { AppHeader } from "./AppHeader.js";

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
	public Render(useLit = true): void
	{
		if (useLit)
		{
			const employeeTemplates = [] as TemplateResult[];

			for (let e of employees)
				employeeTemplates.push(new EmployeeCardLit(e).Template);
			
			render(html`
				${new AppHeader().Template}
				${employeeTemplates}
			`, document.body);

			// render(html`
			// 	${new AppHeader().Template}
			// 	${employees.map(e => new EmployeeCardLit(e).Template)}
			// `, document.body);
		}
		else
		{
			for (let e of employees)
			{
				new EmployeeCard(e).Render(document.body);
			}
		}
	}
}

document.body.onload = () => { new App().Render(true);};