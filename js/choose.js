'use strict';

document.addEventListener('DOMContentLoaded', function () {
  // ===== 筛选器选项交互 =====
  var filterOptions = document.querySelectorAll('.filter-option');
  filterOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      var parentSection = this.closest('.filter-section');
      if (!parentSection) return;

      if (this.textContent.trim() === '全部') {
        // 点击"全部"时取消同组其他选项
        parentSection.querySelectorAll('.filter-option').forEach(function (opt) {
          opt.classList.remove('active');
        });
        this.classList.add('active');
      } else {
        // 取消同组的"全部"选项
        var allOption = parentSection.querySelector('.filter-option:first-child');
        if (allOption && allOption.textContent.trim() === '全部') {
          allOption.classList.remove('active');
        }
        this.classList.toggle('active');

        // 若无选中项则自动选中"全部"
        var hasActive = parentSection.querySelector('.filter-option.active');
        if (!hasActive && allOption) {
          allOption.classList.add('active');
        }
      }
    });
  });

  // ===== 排序选项交互 =====
  var sortOptions = document.querySelectorAll('.sort-option');
  sortOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      sortOptions.forEach(function (opt) { opt.classList.remove('active'); });
      this.classList.add('active');
    });
  });

  // ===== 分页交互 =====
  var paginationItems = document.querySelectorAll('.pagination-item');
  paginationItems.forEach(function (item) {
    item.addEventListener('click', function () {
      paginationItems.forEach(function (pgItem) { pgItem.classList.remove('active'); });
      this.classList.add('active');
    });
  });
});
