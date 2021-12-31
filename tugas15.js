function countTheTriangle(ab, bc) {
  var hitung = Math.pow(ab, 2) + Math.pow(bc, 2);
  console.log('Nilai AB adalah : ' + ab);
  console.log('Nilai BC adalah : ' + bc);
  return 'Panjang sisi ac adalah : ' + Math.sqrt(hitung);
}
console.log(countTheTriangle(8, 6));
