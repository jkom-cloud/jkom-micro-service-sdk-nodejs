const baseUrl = 'http://jkom-log.chinacloudapp.cn/';
const request = require("request");

const doReq = (body) => {
  const options = {
    uri: baseUrl + 'log?signature=jkom',
    method: 'POST',
    json: body
  };
  if (process.env.ISDEV) {
    return ;
  }
  request(options)
};

module.exports = {
  error: (project, content, remark) => {
    doReq({project: project, level: 'error', content: content, remark: remark});
  },
  debug: (project, content, remark) => {
    doReq({project: project, level: 'debug', content: content, remark: remark});

  },
  warn: (project, content, remark) => {
    doReq({project: project, level: 'warn', content: content, remark: remark});

  },
  info: (project, content, remark) => {
    doReq({project: project, level: 'info', content: content, remark: remark});
  }
};