function buscarNota() {
  const regex = new RegExp("^[0-9]{2}-[0-9]{6}-[0-9]{4}$");

  const Notas = new Map();
  //#region Asignaciones de Notas
  Notas.set("MjItMDA3NjA0LTAzMDA=", "ODk=");
  Notas.set("MjItMDA3NzQwLTAzMDA=", "Nzc=");
  Notas.set("MjItMDA3NjE4LTAzMDA=", "Nzc=");
  Notas.set("MjItMDA3NTk5LTAzMDA=", "ODg=");
  Notas.set("MjItMDA3NjY5LTAzMDA=", "Njg=");
  Notas.set("MjItMDA3NjUzLTAzMDA=", "ODA=");
  Notas.set("MjQtMDA4NDY1LTAzMDA=", "ODc=");
  Notas.set("MjQtMDA4NDkxLTAzMDA=", "MjU=");
  Notas.set("MjQtMDA4NDQ4LTAzMDA=", "ODI=");
  Notas.set("MjQtMDA4NDc1LTAzMDA=", "Nzk=");
  Notas.set("MjQtMDA4NTAxLTAzMDA=", "ODM=");
  Notas.set("MjQtMDA4NDkwLTAzMDA=", "NzA=");
  Notas.set("MjQtMDA4NDY5LTAzMDA=", "ODA=");
  Notas.set("MjQtMDA4NDcxLTAzMDA=", "MzI=");
  Notas.set("MjQtMDA4NDM2LTAzMDA=", "ODQ=");
  Notas.set("MjQtMDA4NDYzLTAzMDA=", "ODY=");
  Notas.set("MjQtMDA4NDc0LTAzMDA=", "Nzc=");
  Notas.set("MjQtMDA4NDQwLTAzMDA=", "ODY=");
  Notas.set("MjQtMDA4NDkyLTAzMDA=", "NzU=");
  Notas.set("MjQtMDA4NTc1LTAzMDA=", "MA==");
  Notas.set("MjQtMDA4NDU2LTAzMDA=", "NzY=");
  Notas.set("MjQtMDA4NDYwLTAzMDA=", "ODU=");
  Notas.set("MjQtMDA4NDQxLTAzMDA=", "NzI=");
  Notas.set("MjQtMDA4NDYyLTAzMDA=", "ODg=");
  Notas.set("MjQtMDA4NDQyLTAzMDA=", "NzQ=");
  Notas.set("MjQtMDA4Nzg0LTAzMDA=", "Njc=");
  Notas.set("MjMtMDA3OTQzLTAzMDA=", "MjU=");
  Notas.set("MjQtMDA4NTE5LTAzMDA=", "MjU=");
  Notas.set("MjQtMDA4NDYxLTAzMDA=", "Nzc=");
  Notas.set("MjQtMDA4NDczLTAzMDA=", "Njc=");
  Notas.set("MjQtMDA4NTIwLTAzMDA=", "MA==");
  Notas.set("MjQtMDA4NDcyLTAzMDA=", "Nzk=");
  Notas.set("MjQtMDA4NTc2LTAzMDA=", "MzE=");
  Notas.set("MjQtMDA4NDU5LTAzMDA=", "Nzk=");
  Notas.set("MjQtMDA4NDY3LTAzMDA=", "MzQ=");
  Notas.set("MjQtMDA4NDY4LTAzMDA=", "ODI=");
  Notas.set("MjQtMDA4NDY2LTAzMDA=", "MA==");
  Notas.set("MjQtMDA4NDQ3LTAzMDA=", "ODA=");
  Notas.set("MjQtMDA4NjE5LTAzMDA=", "NzE=");
  Notas.set("MjQtMDA4NTA1LTAzMDA=", "Njg=");
  Notas.set("MjQtMDA4NDk5LTAzMDA=", "NzM=");
  Notas.set("MjQtMDA4NTA3LTAzMDA=", "MzI=");
  Notas.set("MjQtMDA4NTA5LTAzMDA=", "MjU=");
  Notas.set("MjQtMDA4NTkwLTAzMDA=", "Njk=");
  Notas.set("MjQtMDA4NDY0LTAzMDA=", "ODQ=");
  Notas.set("MjQtMDA4NDcwLTAzMDA=", "ODc=");
  Notas.set("MjQtMDA4NTcxLTAzMDA=", "NzA=");
  Notas.set("MjQtMDA4NTAwLTAzMDA=", "NzI=");
  Notas.set("MjQtMDA4NDk4LTAzMDA=", "NzE=");
  Notas.set("MjQtMDA4NTA4LTAzMDA=", "MzI=");
  Notas.set("MjQtMDA4NTcwLTAzMDA=", "MA==");
  Notas.set("MjQtMDA4NTY5LTAzMDA=", "MzY=");
  //#endregion
  let carnet = document.getElementById("carnet").value;

  if (regex.test(carnet)) {
    let encodedCarnet = window.btoa(carnet);
    let encodedNota = Notas.get(encodedCarnet);

    let nota = window.atob(encodedNota);

    if (nota > 59) {
      alert(`${carnet} pasa con ${nota}`);
    } else {
      alert(`${carnet} reprueba con ${nota}`);
    }
  } else {
    alert("Carnet inválido o no encontrado.");
  }
}
