const size = {
    tablet: '480px',
    smDesktop: '768px',
    desktop: '1024px',
    lgDesktop: '1200px',
};

export const device = {
    tablet: `@media (min-width: ${size.tablet})`,
    smDesktop: `@media (min-width: ${size.smDesktop})`,
    desktop: `@media (min-width: ${size.desktop})`,
    lgDesktop: `@media (min-width: ${size.lgDesktop})`,
};
