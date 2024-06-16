const calculateAge = birthDate => {
    const currentDate = new Date();
    let year = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();

    console.log(year, month, day);

    if(year < 0 || (year === 0 && month < 0) || (year === 0 && month === 0 && day < 0)){
        text.innerHTML = `Noto'g'ri sana.`;
        text.style.color = 'darkred';
        return;
    }

    text.style.color = 'blue';

    if(day < 0){
        day = 30 + day;
        month--;
    }
    if(month < 0){
        month = 12 + month;
        year--;
    }
    
    text.innerHTML = `${year} yil, ${month} oy, ${day} kun`;
}

const handleForm = e => {
    e.preventDefault();

    if(!input.value){
        text.innerHTML = 'Sanani kiriting!';
        input.focus();
        text.style.color = 'darkred';
        return;
    }

    text.style.color = 'blue';
    let birthDate = new Date(input.value);
    calculateAge(birthDate);
}

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const text = document.querySelector('.text');

form.addEventListener('submit', handleForm);