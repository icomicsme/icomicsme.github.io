module.exports = {
  apps : [
    // First application
    {
      name             : "ye",
      watch            : true,
      script           : "./server",
      interpreter      : './node_modules/.bin/babel-node',
      log_date_format  : 'MM-DD HH:mm:ss',
      merge_logs       : true,
      ignore_watch     : ['.project', 'public'],
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production   : {
        NODE_ENV       : "production"
      }
    }
  ]
}
