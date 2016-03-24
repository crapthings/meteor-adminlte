Package.describe({
  name: 'crapthings:adminlte',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {

  api.versionsFrom('1.2.1');

  api.use([
    'mongo',
    'random',
    'templating',
    'accounts-password',

    'twbs:bootstrap@3.3.6',
    'fortawesome:fontawesome@4.5.0',
    'aramk:ionicons@2.0.1'
  ]);

  api.add_files([
    'dist/css/AdminLTE.css',
    'dist/css/skins/_all-skins.css'
  ], 'client');

  api.add_files([
    'components/layout.html',
    'components/sidebar.html',
  ], 'client');

});
