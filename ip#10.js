const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        let { age } = { ...plan }
        let { languages } = { ...plan.skills }
        let info = "";
        info += `Мне ${age} лет и я владею языками:`
        for (let i in languages) {
            info += ` ${languages[i].toUpperCase()}`
        }
        return info
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const { skills } = { ...plan }
    return skills.exp
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    const { programmingLangs } = { ...plan.skills };
    let language = "";
    for (let key in programmingLangs) {
        language += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return language;
}

showProgrammingLangs(personalPlanPeter); 