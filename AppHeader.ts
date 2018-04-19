import {TemplateInstance, TemplateResult} from "./node_modules/lit-html/lit-html.js";
import {html, render, EventPart} from "./node_modules/lit-html/lib/lit-extended.js";

export class AppHeader
{
	public Render(parent: HTMLElement): void
	{
		const header = document.createElement("div");
		header.className = "app-header";
		const title = document.createElement("span");
		header.textContent = "Pied Piper Company Profile";
		header.appendChild(title);
		const button = document.createElement("button");
		button.className = "user-button";
		header.appendChild(button);
		parent.appendChild(header);
	}

	public get Template(): TemplateResult
	{
		return html`
			<div class="app-header">
				<span>Pied Piper Company Profile</span>
				<button class="user-button"></button>
			</div>
		`;
	}

	private OnUserMenuClick(evt: MouseEvent): void
	{
		alert("Here, have a user menu");
	}
}

//onclick=${(evt)=> this.OnUserMenuClick(evt)}