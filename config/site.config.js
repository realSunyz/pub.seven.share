/**
 * This file contains the configuration used for customising the website.
 */

module.exports = {
  userPrincipalName: process.env.USER_PRINCIPLE_NAME || 'i@sunyz.net',

  baseDirectory: process.env.BASE_DIRECTORY || '/Public',

  maxItems: 100,

  icon: '/favicon.ico',

  title: "Seven's Files",
  
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  footer:
    '© 2024 realSunyz. All rights reserved.',

  protectedRoutes: [
    "/Private",
  ],

  email: 'i@sunyz.net',

  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/realSunyz',
    },
  ],

  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
