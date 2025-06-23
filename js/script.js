const form = document.getElementById("triangleForm");
const hasil = document.getElementById("hasil");

function updateMode() {
  const mode = document.querySelector('input[name="mode"]:checked').value;
  const isLuas = mode === "luas";

  // Tampilkan hanya yang aktif
  document.getElementById("inputLuas").style.display = isLuas ? "block" : "none";
  document.getElementById("inputKeliling").style.display = isLuas ? "none" : "block";

  // Atur required
  document.getElementById("alas").required = isLuas;
  document.getElementById("tinggi").required = isLuas;
  document.getElementById("sisi1").required = !isLuas;
  document.getElementById("sisi2").required = !isLuas;
  document.getElementById("sisi3").required = !isLuas;

  hasil.classList.remove("show");
  hasil.textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const mode = document.querySelector('input[name="mode"]:checked').value;

  if (mode === "luas") {
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `Luas Segitiga: ${luas.toFixed(2)} cm²`;
  } else {
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);
    const keliling = sisi1 + sisi2 + sisi3;
    hasil.textContent = `Keliling Segitiga: ${keliling.toFixed(2)} cm`;
  }

  hasil.classList.add("show");
});

document.querySelectorAll('input[name="mode"]').forEach((radio) =>
  radio.addEventListener("change", updateMode)
);

updateMode(); // Panggil saat awal halaman load
