import path from 'path';
import { GatsbyNode } from 'gatsby';

interface MarkdownNode {
    id: string;
    frontmatter: {
        template: string; // staticPage, post
        slug: string;
        language: string;
        postType?: string; // announcements, event, blog, press
    };
}

interface GraphQLResult {
    data?: {
        allMarkdownRemark: {
            nodes: MarkdownNode[];
        };
    };
    errors?: any;
}

export const createPages: GatsbyNode['createPages'] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions;

    const result: GraphQLResult = await graphql(`
        query FetchAllMarkdownData {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        template
                        slug
                        language
                        postType
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw new Error('Error loading Markdown files: ' + result.errors);
    }

    const items = result.data?.allMarkdownRemark.nodes;

    if (!items || items.length === 0) {
        console.warn('No Markdown files found.');
        return;
    }

    items.forEach((node) => {
        const { template, slug, language, postType } = node.frontmatter;

        console.log(`Processing node: ${JSON.stringify(node.frontmatter)}`);

        let templatePath: string;

        switch (template) {
            case 'staticPage':
                templatePath = path.resolve('./src/templates/staticPage.tsx');
                break;
            case 'post':
                if (!postType) {
                    console.warn(`Post missing postType: ${slug}`);
                    return;
                }
                templatePath = path.resolve(
                    `./src/templates/${postType}Post.tsx`
                );
                break;
            default:
                console.warn(`Unknown template: ${template} for ${slug}`);
                return;
        }

        const pagePath =
            template === 'post' ? `/${postType}/${slug}` : `/${slug}`

        createPage({
            path: pagePath,
            component: templatePath,
            context: {
                id: node.id,
                language,
                slug,
            },
        });

        console.log(`Created page: ${pagePath} with template: ${templatePath}`);
    });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
    ({ actions }) => {
        const { createTypes } = actions;

        createTypes(`
            type MarkdownRemark implements Node {
                frontmatter: Frontmatter
            }

            type Frontmatter {
                title: String
                date: Date @dateformat
                language: String
                template: String
                slug: String
                postType: String
                featuredImage: File @fileByRelativePath
                authors: [Author]
            }

            type Author {
                name: String
                image: File @fileByRelativePath
            }
        `);
    };
