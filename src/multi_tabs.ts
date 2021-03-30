export { MultiTabs };


interface ITabsParameters
{
	contentSections: NodeListOf<HTMLElement>;
	navigation: NodeListOf<HTMLElement>;
	activeCssClass?: string;
}


class MultiTabs
{
	private readonly contentSections: NodeListOf<HTMLElement>;
	private readonly navigation: NodeListOf<HTMLElement>;
	private readonly activeCssClass: string;

	constructor(parameters: ITabsParameters)
	{
		this.contentSections = parameters.contentSections;
		this.navigation = parameters.navigation;
		this.activeCssClass = parameters.activeCssClass ?? "active";
		this.initTabs();
	}

	/**
	 * Makes one HTML element inside a NodeList visible through CSS, others will be hidden.
	 * @param nodeList Node list with HTML elements.
	 * @param index Index of HTML element in nodeList which should have CSS display "block", others will be set to display "none".
	 */
	private setExclusiveVisibility<T extends HTMLElement = HTMLElement>(nodeList: NodeListOf<T>, index: number): void
	{
		for (let i = 0; i < nodeList.length; i++)
		{
			nodeList[i].style.display = "none";
		}

		nodeList[index].style.display = "block";
	}


	private navClick = (buttonIndex: number, ev: MouseEvent): void =>
	{
		// navClick must be an arrow function because it's used as an event handler (handlers usually have own binding of 'this', but that's not wanted here), arrow functions don't have own binding to 'this'.
		ev.preventDefault();  // stops "<a>"-tag default browser behavior
		ev.stopPropagation(); // stops event bubbling (to avoid possible conflicts with other handlers)

		for (let i = 0; i < this.navigation.length; i++)
		{
			this.navigation[i].classList.remove(this.activeCssClass);
		}

		this.setExclusiveVisibility(this.contentSections, buttonIndex);
		this.navigation[buttonIndex].classList.add(this.activeCssClass);
	};


	private initTabs(): void
	{
		this.setExclusiveVisibility(this.contentSections, 0);

		for (let i = 0; i < this.navigation.length; i++)
		{
			console.log(`Setting navigation listener, index ${i}`);
			this.navigation[i].addEventListener("click", this.navClick.bind(null, i));
		}
	}
}
