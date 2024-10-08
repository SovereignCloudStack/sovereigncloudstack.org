/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource theme-ui */

import Link from 'next/link';
import { Box, Grid, Text, useThemeUI } from 'theme-ui';
import { useRouter } from 'next/router';
import TopNavigation from './TopNavigation';

interface MenuOverlayProps {
    showOverlay: boolean;
    setShowOverlay: Function;
    logoSrc: string;
}

const links = {
    discover: [
        { title: 'Über SCS', href: '/' },
        { title: 'SCS nutzen', href: '/' },
        { title: 'Team', href: '/' },
        { title: 'Referenzen', href: '/' },
        { title: 'Community', href: '/' },
    ],
    news: [
        { title: 'Neuigkeiten', href: '/' },
        { title: 'Veranstaltungen', href: '/' },
    ],
    service: [
        { title: 'Kontakt', href: '/' },
        { title: 'Presse', href: '/' },
        { title: 'Konferenzbeiträge', href: '/' },
    ],
};

const MenuOverlay: React.FC<MenuOverlayProps> = ({
    showOverlay,
    setShowOverlay,
    logoSrc,
}) => {
    const { theme } = useThemeUI();
    const locale = useRouter().locale;

    if (!showOverlay) {
        return null;
    }

    return (
        <Box
            sx={{
                zIndex: 1000,
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                bg: theme.colors?.background,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 4,
            }}
        >
            <TopNavigation
                logoSrc={logoSrc}
                setShowOverlay={setShowOverlay}
                showOverlay={showOverlay}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexGrow: 1,
                    pt: [5, 0, 0, 0],
                }}
            >
                <Grid
                    columns={[1, 3]}
                    gap={[4, 6]}
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        textAlign: 'center',
                        mx: 'auto',
                    }}
                >
                    <Box>
                        <Text
                            variant='bold'
                            sx={{ mb: 3, fontSize: [1, 2, 3, 3] }}
                        >
                            SCS entdecken
                        </Text>
                        {links.discover.map((link) => (
                            <Box key={link.title} my={[2, 2, 4, 4]}>
                                <Link
                                    href={link.href}
                                    passHref
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <Text
                                        as='a'
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text',
                                            fontSize: [1, 2, 3, 3],
                                        }}
                                    >
                                        {link.title}
                                    </Text>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                    <Box>
                        <Text
                            variant='bold'
                            sx={{ mb: 3, fontSize: [1, 2, 3, 3] }}
                        >
                            Aktuelles
                        </Text>
                        {links.news.map((link) => (
                            <Box key={link.title} my={[2, 2, 4, 4]}>
                                <Link
                                    href={link.href}
                                    passHref
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <Text
                                        as='a'
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text',
                                            fontSize: [1, 2, 3, 3],
                                        }}
                                    >
                                        {link.title}
                                    </Text>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                    <Box>
                        <Text
                            variant='bold'
                            sx={{ mb: 3, fontSize: [1, 2, 3, 3] }}
                        >
                            Service
                        </Text>
                        {links.service.map((link) => (
                            <Box key={link.title} my={[2, 2, 4, 4]}>
                                <Link
                                    href={link.href}
                                    passHref
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <Text
                                        as='a'
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'text',
                                            fontSize: [1, 2, 3, 3],
                                        }}
                                    >
                                        {link.title}
                                    </Text>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Link
                    href='/'
                    locale='de'
                    passHref
                    sx={{ textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Text
                        as='a'
                        sx={{ color: 'text', fontSize: [1, 2, 3, 3] }}
                        variant={locale == 'en' ? 'body' : 'bold'}
                    >
                        de
                    </Text>
                </Link>
                <Text variant='body' sx={{ fontSize: [1, 2, 3, 3], mx: 2 }}>
                    {' '}
                    /{' '}
                </Text>
                <Link
                    href='/'
                    locale='en'
                    passHref
                    sx={{ textDecoration: 'none' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <Text
                        as='a'
                        sx={{ color: 'text', fontSize: [1, 2, 3, 3] }}
                        variant={locale == 'de' ? 'body' : 'bold'}
                    >
                        en
                    </Text>
                </Link>
            </Box>
        </Box>
    );
};

export default MenuOverlay;
