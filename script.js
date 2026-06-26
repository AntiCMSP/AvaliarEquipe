(() => {
    const userConfirmed = window.confirm('Ao continuar suas respostas serão escolhidas e enviadas de forma aleatória, tenha certeza de que realmente deseja realizar essa avaliação de forma randômica.');
    const sections = document.querySelectorAll('.container-avaliacao');
    const saveBtn = document.querySelector('button.btn.btn-info[type="submit"]');
    
    const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

    sections.forEach((section) => {
        const rows = section.querySelectorAll('tbody tr');

        rows.forEach((row, personIndex) => {
            const radios = [...row.querySelectorAll('input[type="radio"]')];
            if (!radios.length) return;

            const chosenRadio = randomItem(radios);
            chosenRadio.click();
        });
    });

    if (userConfirmed) {
      window.alert('Respostas foram selecionadas e enviadas de forma automática!\n> AntiCMSP Scripts');
      saveBtn.click();
    } else {
      window.alert('Respostas foram selecionadas, porém não foram enviadas!\n> AntiCMSP Scripts');
    }
})();
