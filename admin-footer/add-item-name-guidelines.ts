// Give in-line guidelines on how items should be titled. This will help make
// our MyTurn data more consistent and allow MyTurn to group items together
// more accurately.

if (window.location.pathname === '/library/orgInventory/create') {
    document.addEventListener("DOMContentLoaded", function () {
        // Find the `.help-block` text for the `Name` field using an XPath query
        const nodesSnaphot = document.evaluate(
            '//label[@class="control-label" and text()="Name"]//ancestor::div[@class="form-group"]//div[@class="help-block"]',
            document,
            null,
            XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
            null
        )

        if (
            nodesSnaphot.snapshotLength === 0 ||
            nodesSnaphot.snapshotLength > 1
        ) {
            // We don't expect zero or multiple matches, so if we encounter
            // them we should not do anything to this element
            return;
        }

        const nodeToEdit = nodesSnaphot.snapshotItem(0) as HTMLElement;
        nodeToEdit.innerHTML = "The item's name. Please use <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Title_case\">title case</a> and be concise; details like brand, size, and color should be noted in other fields instead, unless they're integral to how this item functions."
    });
}
