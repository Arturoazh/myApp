var UriConfigUser = {
  'Macbook Mike' : 'mamonteagudo',
  mamonteagudo : 'mamonteagudo',
  azarzalejo : 'azarzalejo'
};

var keyConfigUser = {
  'Macbook Mike' : 'mpeula',
  mamonteagudo : 'mamonteagudo',
  azarzalejo : 'azarzalejo'
}

var appPath = 'src/thefatfingerBackoffice';
var gulpIgnore = ['!' + appPath + '/gulpTasks/**/*', '!' + appPath + '/assets/**/*.scss'];

module.exports = {
  jsFiles: [
    'src/thefatfingerBackoffice/**/*.module.js',
    'src/thefatfingerBackoffice/**/*.js',
    '!src/thefatfingerBackoffice/gulpTasks/**/*'
  ],
  scssFiles: [
    'src/thefatfingerBackoffice/**/*.scss'
  ],
  htmlFiles: [
    'src/thefatfingerBackoffice/**/*.html'
  ],
  otherFiles: [
    'src/thefatfingerBackoffice/**/*.json',
    'src/thefatfingerBackoffice/**/*.svg'
  ],
  appPath: appPath,
  gulpIgnore : gulpIgnore,
  sourcePath: 'src/thefatfingerBackoffice/app.module.js',
  outputDir: 'dist/thefatfingerBackoffice',

  host: '52.18.132.39',
  key: '/Users/'+keyConfigUser[__dirname.split('/')[2]]+'/.ssh/tbs_multicanal.pem',
  user: 'ec2-user',
  remotePath: '/var/www/'+UriConfigUser[__dirname.split('/')[2]]+'_multicanal/code/INR-Platform/public/thefatfingerBackoffice'
};