async function viewArticle() {
  const art = document.querySelector("[href='/articles']");
  art.click();

  setTimeout(() => {
    const feedRow = document.querySelector(".articles-feed-type");
    feedRow.lastElementChild.firstElementChild.click();
  }, 1000);

  setTimeout(() => {
    const svelte = document.querySelector(
      "[href='/articles/front-end-com-compilador-svelte?back=/articles']"
    );
    svelte.click();
  }, 2000);
}
