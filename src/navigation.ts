// src/navigation.js
// Navigation configuration for Parmesh Kumar's Portfolio

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Experience',
      href: '#experience',
    },
    {
      text: 'Projects',
      href: '#projects',
    },
    {
      text: 'Skills',
      href: '#skills',
    },
    {
      text: 'Education',
      href: '#education',
    },
    {
      text: 'Contact',
      href: '#contact',
    },
  ],

};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: '#' },
    { text: 'Privacy Policy', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/parmesh-kumar-ai' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/parmesh-kumar-ai' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:parmesh.kumar.ai@gmail.com' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/parmesh-kumar-ai">Parmesh Kumar</a> · All rights reserved.
  `,
};
