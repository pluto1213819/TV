'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // ===== 轮播图功能 =====
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicatorsContainer = document.getElementById('carousel-indicators');

  if (!carouselItems.length) return;

  let currentSlide = 0;
  let carouselInterval = null;

  // 生成指示器圆点
  function createIndicators() {
    if (!indicatorsContainer) return;
    indicatorsContainer.innerHTML = '';
    carouselItems.forEach(function (_, index) {
      var indicator = document.createElement('button');
      indicator.className = 'w-3 h-3 rounded-full ' + (index === currentSlide ? 'bg-white' : 'bg-white/50');
      indicator.setAttribute('aria-label', '跳转到第 ' + (index + 1) + ' 张轮播图');
      indicator.addEventListener('click', function () {
        showSlide(index);
        resetAutoPlay();
      });
      indicatorsContainer.appendChild(indicator);
    });
  }

  // 切换到指定幻灯片
  function showSlide(index) {
    carouselItems.forEach(function (item) { item.classList.remove('active'); });
    carouselItems[index].classList.add('active');

    if (indicatorsContainer) {
      var indicators = indicatorsContainer.querySelectorAll('button');
      indicators.forEach(function (ind, i) {
        ind.classList.toggle('bg-white', i === index);
        ind.classList.toggle('bg-white/50', i !== index);
      });
    }
    currentSlide = index;
  }

  // 上一张/下一张
  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
      showSlide(currentSlide);
      resetAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      currentSlide = (currentSlide + 1) % carouselItems.length;
      showSlide(currentSlide);
      resetAutoPlay();
    });
  }

  // 自动轮播（5 秒切换）
  function startAutoPlay() {
    carouselInterval = setInterval(function () {
      currentSlide = (currentSlide + 1) % carouselItems.length;
      showSlide(currentSlide);
    }, 5000);
  }

  function resetAutoPlay() {
    clearInterval(carouselInterval);
    startAutoPlay();
  }

  // 触摸滑动支持
  var touchStartX = 0;
  var carousel = document.querySelector('.carousel');

  if (carousel) {
    carousel.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    carousel.addEventListener('touchend', function (e) {
      var touchEndX = e.changedTouches[0].screenX;
      var diff = touchEndX - touchStartX;
      if (Math.abs(diff) < 50) return;

      if (diff < 0) {
        currentSlide = (currentSlide + 1) % carouselItems.length;
      } else {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
      }
      showSlide(currentSlide);
      resetAutoPlay();
    }, { passive: true });

    // 鼠标悬停暂停
    carousel.addEventListener('mouseenter', function () {
      clearInterval(carouselInterval);
    });
    carousel.addEventListener('mouseleave', function () {
      startAutoPlay();
    });
  }

  // 初始化
  createIndicators();
  startAutoPlay();
});
