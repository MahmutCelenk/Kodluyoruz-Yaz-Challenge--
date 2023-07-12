// Easy: Kullanıcının doğum tarihini alarak kaç yaşında olduğunu bulan bir algoritma yazmanızı istiyorum.
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate())) {
        age--;
    }
    return age;
}

const birthDate = prompt('Doğum Yılınızı Giriniz (Year)');
const age = calculateAge(birthDate);
// console.log('Yaşınız',age);

const yasGosterH2 = document.getElementById('yasGoster');

yasGosterH2.innerHTML = `<h2>Yaşınız : ${age}</h2>`;
yasGosterH2.style.color = 'red';
yasGosterH2.style.fontSize = '35px';
