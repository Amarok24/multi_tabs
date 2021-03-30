import { MultiTabs } from "./multi_tabs.js";


if (document.body.clientWidth > 640)
{
	new MultiTabs({
		navigation: document.querySelectorAll("#navigation a"),
		contentSections: document.querySelectorAll(".container section")
	});
}

new MultiTabs({
	navigation: document.querySelectorAll("#footerNav input"),
	contentSections: document.querySelectorAll("div.colors"),
	activeCssClass: "selected"
});

console.log("init done");
