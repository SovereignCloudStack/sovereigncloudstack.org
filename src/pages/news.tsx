import React, { useState, useEffect } from 'react';
import { graphql, PageProps } from 'gatsby';
import { Box } from 'theme-ui';
import Footer from '../components/Footer';
import MenuOverlay from '../components/MenuOverlay';
import TopNavigation from '../components/TopNavigation';
import NewsSectionList from '../components/NewsSectionList';
import Layout from '../components/Layout';

interface CustomPageContext {
    language: string;
}

interface NewsPageData {
    page: {
        frontmatter: {
            title: string;
            enableAnimation?: boolean;
            description: string;
            headline_events: string;
            headline_announcements: string;
            headline_conferences: string;
            headline_press: string;
            more_events_button: string;
            more_announcements_button: string;
            more_conferences_button: string;
            more_press_button: string;
            more_button: string;
        };
    };
    posts: {
        nodes: Array<{
            id: string;
            frontmatter: {
                title: string;
                date: string;
                journal: string;
                link: string;
                postType: string;
                slug: string;
                authors?: Array<{
                    name: string;
                    image: string;
                }>;
            };
            excerpt: string;
        }>;
    };
}

const NewsPage: React.FC<PageProps<NewsPageData, CustomPageContext>> = ({
    data,
    pageContext,
}) => {
    const { language } = pageContext;
    const { page, posts } = data;
    const [showOverlay] = useState<boolean>(false);

    useEffect(() => {
        if (showOverlay) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showOverlay]);

    // Filter posts by type
    const events = posts.nodes.filter(
        (post) => post.frontmatter.postType === 'event'
    );
    const announcements = posts.nodes.filter(
        (post) => post.frontmatter.postType === 'announcements'
    );
    const blog = posts.nodes.filter(
        (post) => post.frontmatter.postType === 'blog'
    );
    const conferences = posts.nodes.filter(
        (post) => post.frontmatter.postType === 'conferences'
    );
    const press = posts.nodes.filter(
        (post) => post.frontmatter.postType === 'press'
    );

    return (
        <Layout
            pageContext={{
                frontmatter: {
                    enableAnimation: page.frontmatter.enableAnimation ?? true, // Default-Wert
                },
            }}
        >            <title>{page.frontmatter.title} – Sovereign Cloud Stack</title>
            <meta name='description' content={page.frontmatter.description} />
            <Box
                sx={{
                    maxWidth: '1920px',
                    m: 'auto',
                    px: ['20px', '20px', '20px', '40px'],
                }}
            >
                <NewsSectionList
                    items={announcements}
                    headline={page.frontmatter.headline_announcements}
                    language={language}
                    moreButtonText={page.frontmatter.more_button}
                    loadMoreItemsButtonText={
                        page.frontmatter.more_announcements_button
                    }
                />
                {/* <NewsSectionList
                    items={events}
                    headline={page.frontmatter.headline_events}
                    language={language}
                    moreButtonText={page.frontmatter.more_button}
                    loadMoreItemsButtonText={
                        page.frontmatter.more_events_button
                    }
                /> */}
                {/* <NewsSectionList
                    items={conferences}
                    headline={page.frontmatter.headline_conferences}
                    language={language}
                    moreButtonText={page.frontmatter.more_button}
                    loadMoreItemsButtonText={
                        page.frontmatter.more_conferences_button
                    }
                /> */
                <NewsSectionList
                    items={press}
                    headline={page.frontmatter.headline_press}
                    language={language}
                    moreButtonText={page.frontmatter.more_button}
                    loadMoreItemsButtonText={page.frontmatter.more_press_button}
                /> }
            </Box>
        </Layout>
    );
};

export const query = graphql`
    query NewsPageQuery($language: String!) {
        page: markdownRemark(
            frontmatter: {
                language: { eq: $language }
                template: { eq: "newsPage" }
            }
        ) {
            frontmatter {
                title
                enableAnimation
                description
                headline_events
                headline_announcements
                headline_conferences
                headline_press
                more_button
                more_announcements_button
                more_events_button
                more_conferences_button
                more_press_button
            }
        }
        posts: allMarkdownRemark(
            filter: {
                frontmatter: {
                    language: { eq: $language }
                    postType: {
                        in: ["announcements", "event", "conferences", "press"]
                    }
                }
            }
            sort: { frontmatter: { date: DESC } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    language
                    slug
                    postType
                    authors {
                        name
                        image {
                            childImageSharp {
                                gatsbyImageData(layout: CONSTRAINED)
                            }
                        }
                    }
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(layout: CONSTRAINED)
                        }
                    }
                }
                excerpt(pruneLength: 150) # Automatically generate an excerpt
            }
        }
    }
`;

export default NewsPage;
