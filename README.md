# Slider
輪播系統

# 範例
https://dartarus.github.io/Slider/

# 使用說明

# CDN

<link rel="stylesheet" href="https://dartarus.github.io/Slider/style.css">

<script src="https://dartarus.github.io/Slider/script.js"></script>

# 架構

 <!-- data-slider-duration 自動播放時間 -->
    <div id="dartarus-slider" data-slider-duration="3000">

        <!-- 輪播圖項目：根據需求複製貼上 active 只有一組 -->
        <div class="dartarus-item dartarus-active">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="dartarus-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <div class="dartarus-item">
            <img src="..." alt="">
            <h1>...</h1>
        </div>

        <!-- 大顆按扭區塊 -->
        <div id="dartarus-prev"></div>
        <div id="dartarus-next"></div>

        <!-- 小顆按扭區塊：根據需求複製貼上 active 只有一組 -->
        <!-- data-slider-item 隨數量增加 -->
        <div id="dartarus-buttons">
            <div class="dartarus-button dartarus-button-active" data-slider-item="1"></div>
            <div class="dartarus-button" data-slider-item="2"></div>
            <div class="dartarus-button" data-slider-item="3"></div>
        </div>
    </div>