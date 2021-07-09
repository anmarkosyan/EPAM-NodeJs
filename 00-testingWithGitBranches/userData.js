module.exports = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calcAge() {
    return new Date().getFullYear() - this.age;
  }
};
