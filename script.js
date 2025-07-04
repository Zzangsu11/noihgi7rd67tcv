function connectToChat() {  
  const name = prompt("이름을 입력해주세요 😊");
  if (!name) return alert("이름은 필수입니다 🌿");

  const gender = prompt("성별을 입력해주세요 (예: 남 / 여)");
  if (!gender) return alert("성별을 입력해주세요 💬");

  const age = prompt("나이를 입력해주세요 (예: 25)");
  if (!age || isNaN(age)) return alert("정확한 숫자 형식으로 나이를 입력해주세요 📆");

  const encodedName = encodeURIComponent(name);
  const encodedGender = encodeURIComponent(gender);
  const encodedAge = encodeURIComponent(age);

  // [1] 챗봇 링크 연결
  // [1] 챗봇 링크 연결
const chatUrl = `https://mizou.com/login-thread?ID=oujzPJshVit6EgrQ2I4S2kCPdpTHOsvciUzU1nCN0Eg-82653&name=${encodedName}&gender=${encodedGender}&age=${encodedAge}`;
window.open(chatUrl, "_blank");


  // [2] Google Sheets에 저장
  const formData = new FormData();
  formData.append("name", name);
  formData.append("gender", gender);
  formData.append("age", age);

  fetch("https://script.google.com/macros/s/웹앱-URL/exec", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (!response.ok) throw new Error("데이터 저장 실패");
    console.log("사용자 정보 저장 완료");
  })
  .catch(error => {
    console.error("에러:", error);
  });
}



fetch("https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbxRhevNoo0R60xRkNSShhaNKX5okBtqvFlWn0HD4Gt1itZP7eF3jMCTcPx_SseIi8g/exec/exec", {
  method: "POST",
  body: formData
})
