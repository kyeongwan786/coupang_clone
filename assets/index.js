// 카테고리 리스트 스크롤 기능
let scrollPosition = 0;
const scrollDistance = 300; // 한 번에 스크롤할 거리

/**
 * 카테고리 리스트를 스크롤하는 함수
 * @param {string} direction - 스크롤 방향 ('prev', 'next')
 */
function scrollList(direction) {
    const list = document.getElementById('category-list');
    const listWidth = list.scrollWidth;
    const wowContainer = list.parentElement;
    const containerWidth = wowContainer.clientWidth;
    const maxScroll = listWidth - containerWidth;

    if (direction === 'next') {
        scrollPosition = Math.min(scrollPosition + scrollDistance, maxScroll);
    } else if (direction === 'prev') {
        scrollPosition = Math.max(scrollPosition - scrollDistance, 0);
    }

    // 변환 적용
    list.style.transform = `translateX(-${scrollPosition}px)`;

    // 버튼 상태 업데이트
    updateButtonState(scrollPosition, maxScroll);
}

/**
 * 네비게이션 버튼 상태를 업데이트하는 함수
 * @param {number} position - 현재 스크롤 위치
 * @param {number} maxScroll - 최대 스크롤 가능 거리
 */
function updateButtonState(position, maxScroll) {
    const leftImg = document.querySelector('.image-left');
    const rightImg = document.querySelector('.image-right');

    // 맨 왼쪽이면 왼쪽 버튼 반투명
    if (position <= 0) {
        leftImg.style.opacity = '0.5';
    } else {
        leftImg.style.opacity = '1';
    }

    // 맨 오른쪽이면 오른쪽 버튼 반투명
    if (position >= maxScroll) {
        rightImg.style.opacity = '0.5';
    } else {
        rightImg.style.opacity = '1';
    }
}