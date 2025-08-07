import React, { useState } from 'react';
import { Box, Grid, Text, NavLink, useThemeUI } from 'theme-ui';
import { formatLocalizedDate } from '../helpers/formatLocalizedDate';

interface NewsSectionListProps {
    items: Array<{
        id: string;
        frontmatter: {
            title: string;
            date: string;
            journal: string;
            link: string;
            slug: string;
            postType: string;
            authors?: Array<{
                name: string;
                image: string;
            }>;
        };
        excerpt: string;
    }>;
    headline: string;
    language: string;
    moreButtonText: string;
    loadMoreItemsButtonText: string;
    initialVisibleItems?: number;
}

const NewsSectionList: React.FC<NewsSectionListProps> = ({
    items,
    headline,
    language,
    moreButtonText,
    loadMoreItemsButtonText,
    initialVisibleItems = 5,
}) => {
    const [visibleItems, setVisibleItems] =
        useState<number>(initialVisibleItems);

    const { theme } = useThemeUI();

    return (
        <Box
            sx={{
                mb: [5, 5, 5, 6],
            }}
        >
            <Box sx={{ mb: [3, 4, 4, 5] }}>
                <Text
                    variant='heading'
                    sx={{
                        fontSize: [6, 7, 7, 8],
                    }}
                >
                    {headline}
                </Text>
            </Box>
            <Grid
                columns={[2, 4, 4, 6]}
                gap={[4, 20, 20, 40]}
                sx={{
                    gridTemplateRows: 'auto',
                }}
            >
                {items.slice(0, visibleItems).map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            gridColumn: ['1 / -1', null, '2 / 6'],
                            borderBottom: '2px black solid',
                            position: 'relative',
                            minHeight: '100px',
                            background: theme.colors?.background,
                        }}
                    >
                        <Grid
                            columns={[2, 4, 4, 6]}
                            gap={[4, 20, 20, 40]}
                            sx={{
                                gridTemplateRows: 'auto',
                            }}
                        >
                            <Box sx={{ gridColumn: ['1 / -1', null, '1 / 2'] }}>
                                <Text sx={{ fontSize: 0, fontWeight: '900' }}>
                                    {formatLocalizedDate(
                                        item.frontmatter.date,
                                        language
                                    )}
                                </Text>
                                {item.frontmatter.authors &&
                                    item.frontmatter.authors.map(
                                        (author, index) => (
                                            <Box key={index}>
                                                <Text
                                                    variant='body'
                                                    sx={{ fontSize: '12px' }}
                                                >
                                                    {author.name}
                                                </Text>
                                            </Box>
                                        )
                                    )}
                            </Box>

                            {/* Title and Excerpt */}
                            <Box sx={{ gridColumn: ['1 / -1', null, '2 / 6'] }}>
                                <Box sx={{ mb: [2] }}>
                                    <Text
                                        variant='heading'
                                        sx={{ fontSize: 2 }}
                                    >
                                        {item.frontmatter.title}
                                    </Text>
                                </Box>
                                <Box
                                    sx={{
                                        maxWidth: [
                                            '350px',
                                            '400px',
                                            '400px',
                                            '100%',
                                        ],
                                    }}
                                >
                                    <Text sx={{ mt: 3 }}>{item.excerpt}</Text>
                                </Box>
                            </Box>
                        </Grid>

                        {/* "Mehr" Button */}
                        <NavLink
                            href={item.frontmatter.postType === 'press' ? `${item.frontmatter.link}` : `/${item.frontmatter.postType}/${item.frontmatter.slug}`}
                            sx={{
                                display: 'inline-block',
                                backgroundColor: 'black',
                                color: 'white',
                                textDecoration: 'none',
                                px: 3,
                                py: 2,
                                fontSize: 1,
                                borderRadius: 0,
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: 'secondary',
                                    color: 'primary',
                                },
                            }}
                        >
                            {moreButtonText}
                        </NavLink>
                    </Box>
                ))}
            </Grid>

            {visibleItems < items.length && (
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: '400px',
                        m: 'auto',
                        mt: 4,
                    }}
                >
                    <NavLink
                        onClick={() => setVisibleItems((prev) => prev + 5)}
                        sx={{
                            cursor: 'pointer',
                            display: 'inline-block',
                            backgroundColor: 'primary',
                            color: 'white',
                            textDecoration: 'none',
                            px: 3,
                            py: 2,
                            fontSize: 1,
                            borderRadius: 0,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: 'secondary',
                                color: 'primary',
                            },
                        }}
                    >
                        {loadMoreItemsButtonText}
                    </NavLink>
                </Box>
            )}
        </Box>
    );
};

export default NewsSectionList;
