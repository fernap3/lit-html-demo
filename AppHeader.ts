import {html, render, TemplateInstance, TemplateResult} from "./node_modules/lit-html/lit-html.js";

export class AppHeader
{
	public get Template(): TemplateResult
	{
		return html`
			<div class="app-header">
				<span>Pied Piper Company Profile</span>
				<button class="user-button"></button>
			</div>
		`;
	}
}