document.getElementsByClassName('changeAddress')[0].textContent = 'Rama II Road, Subdistrict: Samae, District: Bang Khun Thian, Bangkok 10150';

const wantedJobs = [
    { title: 'Export Officer', href: '#export-officer-section' },
    { title: 'Front-End Developer', href: '#projectList' },
    { title: 'Graphics Designer', href: '#training-section' },
    { title: 'Customer Service Representative', href: '#customer-service-section' },
];

let jobList = document.getElementById('js-jobList');
jobList.innerHTML = '';
jobList.style.listStyle = 'none';
const animatedJob = document.createElement('li');
animatedJob.id = 'animated-job-item';
const jobLink = document.createElement('a');
animatedJob.appendChild(jobLink);
jobList.appendChild(animatedJob);

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
let jobTimer;

function typeEffect() {
    const currentJob = wantedJobs[currentIndex].title;
    const jobLink = document.getElementById('animated-job-item').querySelector('a');
    jobLink.href = wantedJobs[currentIndex].href;

    let displayText = isDeleting
        ? currentJob.substring(0, charIndex - 1)
        : currentJob.substring(0, charIndex + 1);   

        jobLink.innerHTML = displayText || '&nbsp;';

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    let typeSpeed = isDeleting ? 150 : 100;

    if (!isDeleting && charIndex === currentJob.length) {
        typeSpeed = 2000; 
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % wantedJobs.length;
        typeSpeed = 500;
    }

    typeTimer = setTimeout(typeEffect, typeSpeed);
}

animatedJob.addEventListener('mouseenter', () => {
    clearTimeout(typeTimer);
    const jobLink = animatedJob.querySelector('a');
    const fullTitle = wantedJobs[currentIndex].title;
    jobLink.textContent = fullTitle;
    charIndex = fullTitle.length;
    isDeleting = true;
});

animatedJob.addEventListener('mouseleave', () => {
    typeTimer = setTimeout(typeEffect, 500);
});

typeEffect();

const education = [{
    year: '2009 - 2013',
    institution: 'Mahachulalongkorn Buddhist University',
    url: 'https://www.mcu.ac.th/',
    level: 'Bachelor\'s degree in Humanities',
    subjects: 'English(Linguistics and Buddhist Theology)'
},
{
    year: '2005 - 2009',
    institution: 'Wat Sra Riang Buddhist School',
    url: 'https://www.facebook.com/Srasiang/',
    level: 'Primary Plus High School(M.2 - M.6)',
    subjects: 'General subjects & Buddhist subjects'
},
{
    year: '2000 - 2004',
    institution: 'Ujjwal Shishu Niketan Boarding High School',
    url: 'https://www.facebook.com/usnhetauda/',
    level: 'UKG, Secondary Level',
    subjects: 'General Subjects'
}];

let addStudy = '';

education.forEach((study, index) => {
   
   const hideClass = (index > 0) ? 'hidden-edu' : ''; 
   const instWithLink = `<a href="${study.url}" target="_blank">${study.institution}</a>`;
   const anchorLink = (index === 0)
        ? '<span class="special-link"><a href="https://postimg.cc/gallery/syzj2k7" target="_blank">Transcript</a></span>' 
        : '';
    addStudy += `
    <div class="studyTime ${hideClass}"> 
        Year: ${study.year}
        <h4>Institution: ${instWithLink}</h4>
        <p>Level: ${study.level}</p>
        Major Subjects: ${study.subjects} ${anchorLink}<br><hr>
    </div>
    `;
});

document.querySelector('#studyContainer').innerHTML = addStudy;

const showMoreEduBtn = document.getElementById('showMoreEdu');

showMoreEduBtn.addEventListener('click', function() {
    const hiddenEdus = document.querySelectorAll('.hidden-edu');

    hiddenEdus.forEach(item => {
        // เช็คสถานะการแสดงผล
        if (item.style.display === 'block') {
            item.style.display = 'none';
            showMoreEduBtn.textContent = '▼ Show More Education';
        } else {
            item.style.display = 'block';
            showMoreEduBtn.textContent = '▲ Show Less';
        }
    });
});

//Work Experience

const works = [{
    year: '2017 - 2020',
    company: 'Synturn (M) Sdn. Bhd.',
    location: 'No.6, Jalan Istimewa 7, Ulu Tiram 81800, Johor Bahru, Malaysia.',
    position: 'QA Auditor, Translator',
    duties: 'Translate Eng-Nepali, Nepali-Eng; Auditor, Quality Assurance in QA lab and Production Area. Check employees\' daily duties to ensure the everyday job is ongoing well. Train newcomers by teaching them about Technical Drawing, Basic use of equipment: Micrometre, Profile-projector, and Paperwork.'
},{
    year: '2014 - 2015',
    company: 'Thai Rung United Engineering Co., Ltd.',
    location: 'Sedtakij 1 Road T. Kaerai, A. Kratumban, Samudsakorn 74110',
    position: 'Export Salesman',
    duties: 'Overseas coordinator, Liaison, Translate Eng-Thai, Thai-Eng; Sales, and Documentation.'
},{
    year: '2014 - 2014',
    company: '3D Orchids and Etc Co., Ltd.',
    location: 'Krathumban, Samutsakorn 74110',
    position: 'Customer Service Representative',
    duties: 'Have good contact with existing customers as well as search for new clients, Correspondence by Email, Immediate phone call, if necessary, Performa Invoice, Documentation, and Communication.'
}, {
        year: '2013 - 2014',
    company: 'CRR Product Co., Ltd.',
    location: 'Chaiyaphreuk 13. Talingchan, Bangkok',
    position: 'Export Officer',
    duties: 'Search clients, Correspondence by email, Increase email subscribers by 20 percent in six months, A phone call, Proforma Invoice, Communication, Shipping.'
}];

let addWork = '';

works.forEach((work) => {
  let sectionId = '';
    if (work.position === 'Export Officer') {
        sectionId = 'id="export-officer-section"';
    } else if (work.position === 'Customer Service Representative') {
        sectionId = 'id="customer-service-section"';
    }
    
addWork += `
  <div class="workTime" ${sectionId}>
    Year: ${work.year} <br>
    <h4>Company: ${work.company}</h4>
    Location: ${work.location} <br>
    Position: ${work.position} <br>
    Job Duties: ${work.duties}
    <hr>
  </div>`
});

document.querySelector('#workContainer').innerHTML = addWork;

const showMoreBtn = document.getElementById('showMoreWork');

//References
const referPeople = [{
    name: 'Dr Veerakan Kanokkamalabe',
    position: 'Lecturer',
    institution: 'Mahachulalongkorn Buddhist University',
    address: 'Wangnoi Ayutthaya',
    number: '+66 0891465842',
    email: 'Vee.veerakarn@gmail.com'
},{
    name: 'Mr Kasem Koompondsyn',
    position: 'MDRT Advisor & Agency Manager',
    institution: 'AIA (Thailand)',
    address: 'Pathumwan, BKK 10332',
    number: '+66 0864487338',
    email: '2016aia@gmail.com' 
},{
    name: 'Mr. Shankar Maharjan',
    position: 'Government Officer',
    institution: 'Geology Department Office',
    address: 'Kathmandu, Nepal',
    number: '+977 9841372458',
    email: 'shankar331484@gmail.com' 
}
];

let addPerson = '';

referPeople.forEach((person) => {
    addPerson += `
    <div class="referPeople">
    Name: ${person.name} <br>
    Position: ${person.position} <br>
    <h4>Institution: ${person.institution}</h4>
    Address: ${person.address} <br>
    Contact: ${person.number} <br>
    Email: ${person.email} <br>
    <hr>
  </div>
    `;
});


document.querySelector('.referContainer').innerHTML = addPerson;

const projectList = document.getElementById('projectList');

const projects = [
    { name: 'To Do List', url: 'https://my-to-do-list-olive.vercel.app/' },
    { name: 'Expense Tracker', url: 'https://expense-tracker-five-lime-64.vercel.app/' },
    { name: 'Chatapp', url: 'https://my-chat-love.onrender.com/' },
    { name: 'Trekking Website', url: 'https://desar-maharjan-website.vercel.app/' },
    { name: 'Weather App plus information about marriage visa in Thailand', url: 'https://visa-marriage.vercel.app/' }
];

projects.forEach(project => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = project.url;
    link.textContent = project.name;
    link.target = '_blank';
    listItem.appendChild(link);
    projectList.appendChild(listItem);
});
