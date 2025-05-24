document.addEventListener('DOMContentLoaded', function() {
    // 區塊淡入淡出效果
    const sections = document.querySelectorAll('.section');
    const backToTopBtn = document.getElementById('back-to-top');

    // 初始化顯示第一個區塊（標題區塊）
    sections[0].classList.add('visible');

    // 監聽滾動事件，實現區塊淡入淡出
    function checkSections() {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });

        // 顯示/隱藏回到頂部按鈕
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // 初始檢查區塊可見性
    checkSections();

    // 滾動時檢查區塊可見性
    window.addEventListener('scroll', checkSections);

    // 回到頂部按鈕功能
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 處理圖片載入錯誤
    const avatars = document.querySelectorAll('.avatar');
    avatars.forEach(avatar => {
        avatar.addEventListener('error', function() {
            // 如果圖片載入失敗，使用預設圖片
            this.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23cccccc"%3E%3C/rect%3E%3Ctext x="50" y="50" font-size="18" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23ffffff"%3E頭像%3C/text%3E%3C/svg%3E';
        });
    });

    // 響應式導航（如果需要添加導航欄）
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleScreenSizeChange(e) {
        // 可以在這裡添加響應式導航的邏輯
    }
    mediaQuery.addEventListener('change', handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);
});