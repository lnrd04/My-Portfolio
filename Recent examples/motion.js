  const modal = document.getElementById("loginModal");
  const openBtn = document.getElementById("openLogin");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = () => modal.style.display = "block";
  closeBtn.onclick = () => modal.style.display = "none";

  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
