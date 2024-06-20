function renderTitle(desc) {
	desc && desc !== ""
		? (document.title = `${desc} | IMDB 250 GEMS`)
		: "IMDB 250 GEMS";
}

export default renderTitle;
