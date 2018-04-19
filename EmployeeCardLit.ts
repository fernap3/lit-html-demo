import { Employee } from "./Employee.js";
import {TemplateInstance, TemplateResult} from "./node_modules/lit-html/lit-html.js";
import {html, render, EventPart} from "./node_modules/lit-html/lib/lit-extended.js";

export class EmployeeCardLit
{
	constructor(private employee: Employee)
	{
	}

	public get Template(): TemplateResult
	{
		return html`
			<div class="card">
				<img class="card__photo" src="${this.employee.PhotoUrl}">
				<h1 class="card__title">${this.employee.Name} \ud83d\udd25</h1>
				<div class="card__bio">${this.employee.Bio}</div>
			</div>
		`;
	}

	public Render(parent: HTMLElement)
	{
		render(this.Template, parent);
	}
}