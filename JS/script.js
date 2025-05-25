const chapters = document.querySelectorAll('.chapter');
const chapter_number = document.getElementById('page-number')
let currentIndex = 0;

function showChapter(index) {
    chapters.forEach((chapter, i)=> {
        chapter.style.display = i === index? 'block':'none';
    });
    chapter_number.innerHTML = "— " + String(currentIndex + 1) + " —"
}

showChapter(currentIndex)

function changePage(change) {
    currentIndex = Math.max(0, Math.min(currentIndex + change, chapters.length - 1));
    document.body.scrollTop = 0
    showChapter(currentIndex)
}