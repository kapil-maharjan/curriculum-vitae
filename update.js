document.getElementsByClassName('changeAddress')[0].textContent = 'Rama II Road, Subdistrict: Samae, District: Bang Khun Thian, Bangkok 10150';


const wantedJobs = [
    'International Trade Agent',
    'English Teacher',
    'Frond-End Developer',
    'Graphcs Designer',
    'Customer Service Representative',
];

let jobList = document.getElementById('js-jobList');

wantedJobs.forEach(job => {
const newList = document.createElement('li');

  newList.textContent = job;
  jobList.append(newList);
});

const education = [{
    year: '2009 - 2013',
    institution: 'Mahachulalongkorn Buddhist University',
    level: 'Bachelor\'s degree in Humanities',
    subjects: 'English(Linguistics and Buddhist Theology)'
},
{
    year: '2005 - 2009',
    institution: 'Wat Sra Riang Buddhist School',
    level: 'Primary Plus High School(M.2 - M.6)',
    subjects: 'General subjects & Buddhist subjects'
},
{
    year: '2000 - 2004',
    institution: 'Ujjwal Shishu Niketan Boarding High School',
    level: 'UKG, Secondary Level',
    subjects: 'General Subjects'
}];

let addStudy = '';

education.forEach((study) => {
    addStudy += `
    <div class="studyTime">
        Year: ${study.year}
        <h4>Institution: ${study.institution}</h4>
        <p>Level: ${study.level}</p>
        Major Subjects: ${study.subjects}<br><hr>
    </div>
    `;
});

document.querySelector('.studyContainer').innerHTML = addStudy;

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
  addWork += `
  <div class="workTime">
    Year: ${work.year} <br>
    <h4>Company: ${work.company}</h4>
    Location: ${work.location} <br>
    Position: ${work.position} <br>
    Job Duties: ${work.duties}
    <hr>
  </div>`
});

document.querySelector('.workContainer').innerHTML = addWork;


//References
const referPeople = [{
    name: 'Dr Veerakan Kanokkamalabe',
    position: 'Lecturer',
    institution: 'Mahachulalongkorn Buddhist University',
    address: 'Wangnoi Ayutthaya',
    number: '+66 089146584',
    email: '........'
},{
    name: 'Mr Kasem Koompondsyn',
    position: 'Agent',
    institution: 'AIA(American International Assurance)',
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