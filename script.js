function toggleDescription(id) {
    let desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block"; // 🛠 설명 보이게 함
    } else {
        desc.style.display = "none"; // 🛠 설명 숨김
    }
}

