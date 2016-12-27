const baseUrl = 'http://micro-service.chinacloudapp.cn/push';
const request = require("request");

module.exports = (config) => {
  const options = {
    uri: baseUrl + '?signature=561ED961-E358-4217-B49C-5DF4B1F931ED',
    method: 'POST',
    json: config
  };
  request(options)
};