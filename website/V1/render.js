(function () {
  const content = window.PORTFOLIO_CONTENT || {};
  document.querySelectorAll("[data-edit]").forEach((element) => {
    const value = content[element.dataset.edit];
    if (typeof value === "string") element.textContent = value;
  });
  if (typeof content.name === "string") {
    document.title = content.name + " — Personal Website";
  }
})();
