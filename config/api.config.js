/**
 * This file contains the configuration for the API endpoints and tokens use.
 */

module.exports = {
  // The clientId and clientSecret are used to authenticate the user with Microsoft Graph API using OAuth. You would
  // not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
  clientId: '3c1046bf-b529-49a6-9c47-fbad13acd67e',
  obfuscatedClientSecret: 'U2FsdGVkX1/hyFL0MGy2pJaAvZixQkUsDKZce8hGKW2WaXsLZLL4O6xsBgMVsYI8aRjX1r+G8M8zysNwoJPzug==',

  // The redirectUri is the URL that the user will be redirected to after they have authenticated with Microsoft Graph API.
  // Likewise, you would not need to change redirectUri if you are using your personal Microsoft account with OneDrive International.
  redirectUri: 'http://localhost',

  // These are the URLs of the OneDrive API endpoints. You would not need to change anything here if you are using OneDrive International
  // or E5 Subscription OneDrive for Business. You may need to change these if you are using OneDrive 世纪互联.
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // The scope we require are listed here, in most cases you would not need to change this as well.
  scope: 'user.read files.read.all offline_access',

  // Cache-Control header, check Vercel documentation for more details. The default settings imply:
  // - max-age=0: no cache for your browser
  // - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
  // - stale-while-revalidate: allow serving stale content while revalidating on the edge
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
