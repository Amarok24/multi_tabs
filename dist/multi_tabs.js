export { MultiTabs };
class MultiTabs {
    constructor(parameters) {
        this.navClick = (buttonIndex, ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            for (let i = 0; i < this.navigation.length; i++) {
                this.navigation[i].classList.remove(this.activeCssClass);
            }
            this.setExclusiveVisibility(this.contentSections, buttonIndex);
            this.navigation[buttonIndex].classList.add(this.activeCssClass);
        };
        this.contentSections = parameters.contentSections;
        this.navigation = parameters.navigation;
        this.activeCssClass = parameters.activeCssClass ?? "active";
        this.initTabs();
    }
    setExclusiveVisibility(nodeList, index) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.display = "none";
        }
        nodeList[index].style.display = "block";
    }
    initTabs() {
        this.setExclusiveVisibility(this.contentSections, 0);
        for (let i = 0; i < this.navigation.length; i++) {
            console.log(`Setting navigation listener, index ${i}`);
            this.navigation[i].addEventListener("click", this.navClick.bind(null, i));
        }
    }
}
//# sourceMappingURL=multi_tabs.js.map