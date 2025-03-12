# Sovereign Cloud Stack Website

## Quickstart: Local Development Server

- Install NodeJS

    ```bash
    apt-get install nodejs -y
    ```

- Install dependencies

    ```bash
    npm install
    ```

- Run server

    ```bash
    npm run dev
    ```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

The content is to be found within the content directory organised by locale and type of content like pages or components.

---

# Sovereign Cloud Stack Website Documentation

This document serves as a guide for developers and editors to maintain and expand the Sovereign Cloud Stack website. It includes information about the folder structure, content management, adding new features, and deploying the site.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Prerequisites](#prerequisites)
4. [Folder Structure](#folder-structure)
5. [Content Management](#content-management)
6. [Development](#development)
7. [Building and Deployment](#building-and-deployment)
8. [Configuration Files](#configuration-files)
9. [Template Types](#template-types)
10. [Troubleshooting](#troubleshooting)
11. [Contribution Guidelines](#contribution-guidelines)
12. [Contact](#contact)

---

## 1. Introduction

The Sovereign Cloud Stack website is built using [GatsbyJS](https://www.gatsbyjs.com/). This project is multilingual, supports editorial content in Markdown, and integrates a modern theme for styling.

---

## 2. Project Overview

### Key Features

- **Bilingual Content**: Separate directories for English and German content.

- **Markdown-based CMS**: All editorial content is stored as Markdown files for easy maintenance and potential future compatibility with DecapCMS.
- **Component-based Architecture**: Reusable React components for layout, navigation, and other UI elements.
- **Static Site Generation**: Optimized for fast load times and high performance.

---

## 3. Prerequisites

Ensure you have the following installed:

- **Node.js**: v16 or higher
- **Yarn**: Recommended for dependency management
- **Git**: For version control

To install dependencies:

```bash
npm install
```

---

## 4. Folder Structure

### Key Directories

- `/src/components`: React components used across pages (e.g., Footer, TopNavigation).

- `/content`: Markdown content for the website, divided into language-specific folders:
  - `content/en`: English content
  - `content/de`: German content.
- `/templates`: Page templates for different content types like annonucements posts.
- `/images`: Static assets, organized by purpose (e.g., authors, backgrounds).
- `/gatsby-plugin-theme-ui`: Theme configuration.

### Example Content Path

To edit the homepage content in German:
`/content/de/pages/index.md`

---

## 5. Content Management

### Adding New Pages

1. Navigate to the appropriate language folder under `/content/{locale}/pages`.
2. Create a new `.md` file with the following frontmatter:

    ```yaml
    slug: new-page
    language: en # de for german or en english
    template: staticPage
    title: 'Your Page Title'
    ```

3. Add the content below the frontmatter.

Markdown will be rendered as html content for the `staticPage` template.

### Adding Announcements

1. Create a Markdown file under the appropriate folder `/announcements`.
2. Use the corresponding template `announcementsPost`.
3. Example frontmatter for an announcement:

    ```yaml
    postType: announcements
    slug: announcement-title
    title: Announcement Title
    date: '2024-12-24'
    template: post
    authors:
        - name: Foo Bar #
        - image: '../../../images/authors/foo-bar.webp'
    language: en # de for german or en english
    featuredImage: '../../../images/image.png'
    ```

### Updating Existing Pages

1. Locate the file under `/content/{language}/pages`.
2. Edit the content or metadata as needed.

---

## 6. Development

### Running the Development Server

To start the local server:

```bash
gatsby develop
```

Access the website at `http://localhost:8000`.

### Adding Features

1. Add components to `/src/components`.
2. Update templates in `/src/templates` if the feature requires custom rendering.
3. Commit your changes with a meaningful message.

---

## 7. Building and Deployment

### Building the Site

To generate a production-ready build:

```bash
gatsby build
```

### Deploying

1. Ensure the `gh-pages` branch is up to date.
2. The page is currently built with the `build_and_deploy.yml` workflow and published on <https://sovereigncloudstack.org/>.
3. There is a `build_only.yml` job that works on pushes to the branches and does a gatsby build. This GH action thus avoids breakage.
4. The `staging` branch has a `build_and_deploy_staging.yml` job that builds and publishes to the `gh-pages-staging` branch which is published (with a few minutes delay) on <https://staging.sovereigncloudstack.org/>. Use this to test more complex changes or to validate visual impressions.

---

## 8. Configuration Files

### Gatsby Configuration (`gatsby-config.ts`)

The `gatsby-config.ts` file defines metadata, plugins, and settings for the Gatsby site.

- **Site Metadata**: Contains general website info like `title` and `siteUrl`.
- **Plugins**:
  - **`gatsby-plugin-react-i18next`**: Enables multilingual support.
  - **`gatsby-transformer-remark`**: Converts Markdown files into queryable nodes.
  - **`gatsby-source-filesystem`**: Defines source paths for content and images.

### Gatsby Node API (`gatsby-node.ts`)

The `gatsby-node.ts` file dynamically creates pages using Markdown files.

1. **`createPages`**:

    - Reads `template`, `slug`, `language`, and `postType` from Markdown frontmatter.
    - Maps `template` to corresponding files in `/templates/`.
    - Constructs paths dynamically based on `postType` and `slug`.

2. **`createSchemaCustomization`**:
    - Ensures all frontmatter fields have consistent types.
    - Defines additional metadata like `authors` or `featuredImage`.

---

## 9. Template Types

1. **`staticPage`**:

    - Used for simple static content.
    - Renders the Markdown body without additional layout.

2. **`announcementsPost`**:

    - Dedicated to time-sensitive announcements.
    - Requires structured frontmatter (e.g., `title`, `date`).

3. **`news.tsx`** and **`index.tsx`**:
    - Aggregates dynamic content from Markdown files.
    - The homepage uses `index.tsx` for a preconfigured structure.

---

## 10. Background Animation

The **background animation** visually represents the concept described on the landing page: a **cloud platform** that is  connected, standardized, and collaboratively built. The animation reflects this vision through interconnected clouds of particles, symbolizing integration, interoperability, and a dynamic global community. It can be switched off by users that want to avoid increased power consumption on e.g. mobile devices.

### Key Features

- **Particle Clouds**: Configurable clouds with custom colors, sizes, and opacity.
- **Dynamic Motion**: Smooth particle movement with subtle, noise-like patterns.
- **Connection Lines**: Lines between particles represent collaboration and connectivity.
- **Performance Optimized**: Debounced resize handling and throttled frame rates ensure smooth rendering.

### Implementation

The component is implemented in **`BackgroundAnimation.tsx`** and can be integrated into any layout or page.

**Code File**: [`src/components/BackgroundAnimation.tsx`](./src/components/BackgroundAnimation.tsx)

### Example Usage

```tsx
import BackgroundAnimation from '../components/BackgroundAnimation';

const Layout = () => {
    return (
        <>
            <BackgroundAnimation />
            <div>Website Content Here</div>
        </>
    );
};
```

---

## 11. Troubleshooting

### Common Issues

- **Content Not Rendering**: Ensure the `template` matches a valid template.

- **Build Fails**: Check `gatsby-config.ts` for misconfigured plugins.

---

## 12. Contribution Guidelines

### Code Style

- Follow TypeScript conventions.

- Use descriptive commit messages.

### Pull Requests

1. Create a feature branch.
2. Submit a PR with detailed changes. Ensure DCO and build checks (and other CI tests) pass before asking for reviews.
3. Optionally do cherry-picks or merges into the `staging` branch for testing.

---

## 13. Contact

For questions or support, refer to the repository maintainer.

```
