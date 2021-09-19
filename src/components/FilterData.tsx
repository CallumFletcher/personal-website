export default class FilterData {
  page: number | false;
  type: {
    "Work Experience": boolean;
    "Personal Projects": boolean;
    "Hackathon Projects": boolean;
  };
  language: {
    JavaScript: boolean;
    Python: boolean;
    "HTML/CSS": boolean;
    "C#": boolean;
  };
  framework: {
    React: boolean;
    Express: boolean;
    "Node.js": boolean;
    ".Net Core": boolean;
    Firebase: boolean;
    Azure: boolean;
    Flask: boolean;
    CockroachDB: boolean;
    MongoDB: boolean;
  };
  constructor() {
    this.page = 0;
    this.type = {
      "Work Experience": false,
      "Personal Projects": false,
      "Hackathon Projects": false,
    };
    this.language = {
      JavaScript: false,
      Python: false,
      "HTML/CSS": false,
      "C#": false,
    };
    this.framework = {
      React: false,
      Express: false,
      "Node.js": false,
      ".Net Core": false,
      Firebase: false,
      Azure: false,
      Flask: false,
      CockroachDB: false,
      MongoDB: false,
    };
  }
}
