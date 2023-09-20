const movePage = (name) => {
  const mp = document.getElementById(name);
  if (!mp) return;
  mp.scrollIntoView({ behavior: "smooth" });
};
