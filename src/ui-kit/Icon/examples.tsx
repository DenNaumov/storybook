import { Icon16, Icon20, Icon24, Icon28 } from './IconWrappers';

// Пример реализации конкретной иконки (например, Add) для разных паков
export const Icon16Add = (props: any) => (
    <Icon16 {...props}>
        <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Icon16>
);

export const Icon20Add = (props: any) => (
    <Icon20 {...props}>
        <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Icon20>
);

export const Icon24Add = (props: any) => (
    <Icon24 {...props}>
        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </Icon24>
);

export const Icon28Add = (props: any) => (
    <Icon28 {...props}>
        <path d="M14 7V21M7 14H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </Icon28>
);
