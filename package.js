Package.describe({
  name: 'oaf:moment-duration-format',
  summary: 'Format Moment Duration objects.',
  version: "1.3.1",
  git: "https://github.com/oafmedium/meteor-moment-duration-format.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR@1.0.2.1");
  where = where || ['client', 'server'];
  api.use("underscore", where);
  api.use("momentjs:moment@2.9.0", where);

  api.add_files(['compatibility.js', 'lib/moment-duration-format/lib/moment-duration-format.js'], where);

  if (api.export) {

  }
});
