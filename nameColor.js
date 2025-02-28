document.addEventListener("DOMContentLoaded", function () {
    // 현재 페이지 파일명 가져오기
    const currentPage = window.location.pathname.split("/").pop(); 
    
    // 네비게이션의 모든 <a> 태그 가져오기
    const navLinks = document.querySelectorAll(".headerLeft ul li a");

    navLinks.forEach(link => {
        // 현재 페이지 파일명과 <a> 태그의 href 속성 비교
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "blue";  // 글자 색상을 파란색으로 변경
            link.style.fontWeight = "bold";  // 강조 효과 추가
        }
    });
});
