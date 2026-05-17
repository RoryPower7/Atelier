(function () {
  'use strict';

  var EXAM = new Date('2026-06-10T09:30:00');

  function updateCountdown() {
    var el = document.getElementById('days-countdown');
    if (!el) return;
    var diff = Math.ceil((EXAM - new Date()) / 86400000);
    el.textContent = diff > 0 ? diff : '0';
  }

  function updateStreak() {
    var els = document.querySelectorAll('.streak');
    if (!els.length) return;
    var today = new Date().toDateString();
    var stored = JSON.parse(localStorage.getItem('atelier_streak') || '{}');
    var count = stored.count || 0;
    if (stored.date !== today) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      count = (stored.date === yesterday.toDateString()) ? count + 1 : 1;
      localStorage.setItem('atelier_streak', JSON.stringify({ date: today, count: count }));
    }
    var label = count === 1 ? '1 day streak' : count + ' day streak';
    els.forEach(function (el) { el.textContent = label; });
  }

  function setNavActive() {
    var path = window.location.pathname;
    if (path.indexOf('/texts/') === 0) path = '/comprehensions.html';
    document.querySelectorAll('.nav-pill a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var match = (href === '/index.html')
        ? (path === '/' || path === '/index.html')
        : path === href;
      a.classList.toggle('active', match);
    });
  }

  function updateGreeting() {
    var el = document.querySelector('.hero-text .greeting');
    if (!el) return;
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    el.textContent = 'Bonjour — ' + days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()];
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateCountdown();
    updateStreak();
    setNavActive();
    updateGreeting();
  });
})();
